document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', () => {
        const name = nameInput.value;
        const password = passwordInput.value;
        if (name && password) {
            alert('Login successful! Redirecting to dashboard.');
            window.location.href = 'Dashboard.html'; 
        } else {
            alert('Please enter your name and password.');
        }
    });
});

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("passwordInput");
  const toggleIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.src = "assets/show.jpeg"; 
    toggleIcon.alt = "show";
  } else {
    passwordInput.type = "password";
    toggleIcon.src = "assets/hide.png"; 
    toggleIcon.alt = "hide";
  }
}
