document.getElementById('admin-register-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var password = document.getElementById('admin-password').value;
    var passwordCriteriaPopup = document.getElementById('password-criteria-popup');
  
    if (!validatePassword(password)) {
      passwordCriteriaPopup.classList.remove('hidden');
    } else {
      passwordCriteriaPopup.classList.add('hidden');
      // Perform registration logic here
    }
  });
  
  function validatePassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{12,}$/;
    return passwordRegex.test(password);
  }