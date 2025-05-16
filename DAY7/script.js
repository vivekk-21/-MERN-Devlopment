
  (function(){
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    const submitBtn = document.getElementById('submitBtn');

    const errName = document.getElementById('errName');
    const errEmail = document.getElementById('errEmail');
    const errPassword = document.getElementById('errPassword');
    const errConfirmPassword = document.getElementById('errConfirmPassword');

    function validateName() {
      const name = nameInput.value.trim();
      if (name.length < 2) {
        errName.textContent = 'Name must be at least 2 characters.';
        return false;
      }
      errName.textContent = '';
      return true;
    }

    function validateEmail() {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        errEmail.textContent = 'Email is required.';
        return false;
      } else if (!emailRegex.test(email)) {
        errEmail.textContent = 'Invalid email format.';
        return false;
      }
      errEmail.textContent = '';
      return true;
    }

    function validatePassword() {
      const password = passwordInput.value;
      if (password.length < 8) {
        errPassword.textContent = 'Password must be at least 8 characters.';
        return false;
      }
      errPassword.textContent = '';
      return true;
    }

    function validateConfirmPassword() {
      const password = passwordInput.value;
      const confirm = confirmPasswordInput.value;
      if (confirm !== password) {
        errConfirmPassword.textContent = 'Passwords do not match.';
        return false;
      }
      errConfirmPassword.textContent = '';
      return true;
    }

    function validateForm() {
      const validName = validateName();
      const validEmail = validateEmail();
      const validPassword = validatePassword();
      const validConfirm = validateConfirmPassword();
      submitBtn.disabled = !(validName && validEmail && validPassword && validConfirm);
      return validName && validEmail && validPassword && validConfirm;
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        alert('Thank you for registering, ' + nameInput.value + '!');
        form.reset();
        submitBtn.disabled = true;
      }
    });
  })();

