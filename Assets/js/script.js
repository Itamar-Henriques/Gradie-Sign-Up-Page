document.getElementById('sign-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');
    var successMessage = document.getElementById('success-message');
    
    // Validar o formato do email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Formato de e-mail inválido!';
        successMessage.textContent = ''; // Limpa a mensagem de sucesso
        return;
    } else {
        emailError.textContent = '';
    }

    // Validar a senha (mínimo 8 caracteres)
    if (password.length < 8) {
        passwordError.textContent = 'A senha deve ter pelo menos 8 caracteres!';
        successMessage.textContent = ''; // Limpa a mensagem de sucesso
        return;
    } else {
        passwordError.textContent = '';
    }

    // Exibir a mensagem de sucesso
    successMessage.textContent = 'Cadastro bem sucedido!';
});
