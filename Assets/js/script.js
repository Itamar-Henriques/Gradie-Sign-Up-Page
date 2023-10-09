document.getElementById('sign-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form from being sent
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');
    var successMessage = document.getElementById('success-message');
    
    // Validate the email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format!';
        successMessage.textContent = ''; // Clears the success message
        return;
    } else {
        emailError.textContent = '';
    }

    // Validate password (minimum 8 characters)
    if (password.length < 8) {
        passwordError.textContent = 'The password must be at least 8 characters long!';
        successMessage.textContent = ''; // Clears the success message
        return;
    } else {
        passwordError.textContent = '';
    }

    // Display the “registration successful” message
    successMessage.textContent = 'Successful registration!';
});
