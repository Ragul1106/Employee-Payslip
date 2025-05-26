document.getElementById('payrollForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  let isValid = true;
  let missingFields = [];

  for (const [name, value] of formData.entries()) {
    if (!value.trim()) {
      isValid = false;
      missingFields.push(name);
    }
  }

  if (!isValid) {
    alert(`Please fill in all required fields:\n${missingFields.join(', ')}`);
    return;
  }

  const dataObj = Object.fromEntries(formData.entries());
  localStorage.setItem('payrollData', JSON.stringify(dataObj));
  window.location.href = 'PaySlip.html';
});