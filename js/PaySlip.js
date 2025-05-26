window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);


  const empName = params.get('employeeName') || '';
  const empId = params.get('employeeId') || '';
  const empRole = params.get('employeeRole') || '';
  const date = params.get('date') || '';
  const basicSalary = params.get('basicSalary') || '';
  const totalSalary = params.get('totalSalary') || '';
  const additions = params.get('additions') || '';
  const deductions = params.get('deductions') || '';

  document.getElementById('empName').textContent = empName;
  document.getElementById('empId').textContent = empId;
  document.getElementById('empRole').textContent = empRole;
  document.getElementById('date').textContent = date;

  const payslipBody = document.getElementById('payslipBody');
  payslipBody.innerHTML = `
    <tr>
      <td>${empId}</td>
      <td>${empName}</td>
      <td>₹ ${basicSalary}</td>
      <td>₹ ${totalSalary}</td>
      <td>₹ ${additions}</td>
      <td>₹ ${deductions}</td>
    </tr>
  `;

  const totalEarnings = Number(totalSalary) + Number(additions) - Number(deductions);
  document.getElementById('totalEarnings').textContent = totalEarnings.toFixed(2);
});


window.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('payrollData'));
  if (!data) return;

  document.getElementById('empName').textContent = data.employeeName || '';
  document.getElementById('empId').textContent = data.employeeId || '';
  document.getElementById('empRole').textContent = data.employeeRole || '';
  document.getElementById('date').textContent = data.date || '';

  const payslipBody = document.getElementById('payslipBody');
  payslipBody.innerHTML = `
    <tr>
      <td>${data.employeeId}</td>
      <td>${data.employeeName}</td>
      <td>₹ ${data.basicSalary}</td>
      <td>₹ ${data.totalSalary}</td>
      <td>₹ ${data.additions}</td>
      <td>₹ ${data.deductions}</td>
    </tr>
  `;

  const totalEarnings = Number(data.totalSalary) + Number(data.additions) - Number(data.deductions);
  document.getElementById('totalEarnings').textContent = totalEarnings.toFixed(2);
});


document.getElementById('downloadBtn').addEventListener('click', () => {
  const payslipElement = document.querySelector('.payslip-card');

  html2canvas(payslipElement, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'pt', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();


    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pdfWidth * 0.9;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

 
    const x = (pdfWidth - imgWidth) / 2;
    const y = 20;
    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);

    pdf.save('Payslip.pdf');
  });
});