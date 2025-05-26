document.getElementById('payrollForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  let isValid = true;
  const missingFields = [];

  // Check for empty required fields
  for (const [name, value] of formData.entries()) {
    if (!value.trim()) {
      isValid = false;
      missingFields.push(name);
    }
  }

  // Validate Employee Name (letters and spaces only)
  const employeeName = formData.get('employeeName');
  if (!/^[a-zA-Z\s]+$/.test(employeeName)) {
    alert('Employee Name must contain only letters and spaces.');
    return;
  }

  if (!isValid) {
    alert(`Please fill in all required fields:\n${missingFields.join(', ')}`);
    return;
  }

 
  const basic = parseFloat(formData.get('basicSalary')) || 0;
  const additions = parseFloat(formData.get('additions')) || 0;
  const deductions = parseFloat(formData.get('deductions')) || 0;

  const totalSalary = basic + additions; 
  const totalEarnings = totalSalary - deductions; 

 
  formData.set('totalSalary', totalSalary.toFixed(2));
  formData.set('totalEarnings', totalEarnings.toFixed(2));

 
  const dataObj = Object.fromEntries(formData.entries());
  localStorage.setItem('payrollData', JSON.stringify(dataObj));

 
  window.location.href = 'PaySlip.html';
});


const basicSalaryInput = document.querySelector('input[name="basicSalary"]');
const additionsInput = document.querySelector('input[name="additions"]');
const totalSalaryInput = document.querySelector('input[name="totalSalary"]');

totalSalaryInput.readOnly = true;

function updateTotalSalary() {
  const basic = parseFloat(basicSalaryInput.value) || 0;
  const add = parseFloat(additionsInput.value) || 0;
  const total = basic + add;
  totalSalaryInput.value = total.toFixed(2);
}

[basicSalaryInput, additionsInput].forEach(input => {
  input.addEventListener('input', updateTotalSalary);
});
