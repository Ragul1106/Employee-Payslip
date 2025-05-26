document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const password = passwordInput.value;

        // Password validation regex
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (!name) {
            alert('Please enter your name.');
            return;
        }

        if (!password) {
            alert('Please enter your password.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        if (!uppercaseRegex.test(password)) {
            alert('Password must contain at least one uppercase letter.');
            return;
        }

        if (!numberRegex.test(password)) {
            alert('Password must contain at least one number.');
            return;
        }

        if (!specialCharRegex.test(password)) {
            alert('Password must contain at least one special character.');
            return;
        }

        alert('Login successful! Redirecting to dashboard.');
        window.location.href = 'Dashboard.html';
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
