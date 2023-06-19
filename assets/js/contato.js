const submitButton = document.querySelector('.enviar-contato');

let isValidationExecuted = false;

function limparCampos(form) {
    const inputElements = form.querySelectorAll('input, textarea');

    inputElements.forEach((input) => {
        input.value = '';
    });
}

function verificarCampos(event) {
    event.preventDefault();

    if (isValidationExecuted) {
        return;
    }

    isValidationExecuted = true;

    const form = event.target.form;
    const inputElements = form.querySelectorAll('input[required], textarea[required]');

    let hasErrors = false;
    for (let i = 0; i < inputElements.length; i++) {
        const input = inputElements[i];
        const errorSpan = input.nextElementSibling;

        if (input.value.trim() === '') {
            if (!errorSpan || !errorSpan.classList.contains('error-message')) {
                const newErrorSpan = document.createElement('span');
                newErrorSpan.className = 'error-message';
                newErrorSpan.textContent = 'Campo obrigatório';
                input.parentNode.insertBefore(newErrorSpan, input.nextElementSibling);
            }
            hasErrors = true;
        } else if (input.name === 'name' && input.value.length > 50) {
            if (!errorSpan || !errorSpan.classList.contains('error-message')) {
                const newErrorSpan = document.createElement('span');
                newErrorSpan.className = 'error-message';
                newErrorSpan.textContent = 'Nome deve ter no máximo 50 caracteres';
                input.parentNode.insertBefore(newErrorSpan, input.nextElementSibling);
            }
            hasErrors = true;
        } else if (input.name === 'subject' && input.value.length > 50) {
            if (!errorSpan || !errorSpan.classList.contains('error-message')) {
                const newErrorSpan = document.createElement('span');
                newErrorSpan.className = 'error-message';
                newErrorSpan.textContent = 'Assunto deve ter no máximo 50 caracteres';
                input.parentNode.insertBefore(newErrorSpan, input.nextElementSibling);
            }
            hasErrors = true;
        } else if (input.name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                if (!errorSpan || !errorSpan.classList.contains('error-message')) {
                    const newErrorSpan = document.createElement('span');
                    newErrorSpan.className = 'error-message';
                    newErrorSpan.textContent = 'Email inválido';
                    input.parentNode.insertBefore(newErrorSpan, input.nextElementSibling);
                }
                hasErrors = true;
            } else if (errorSpan && errorSpan.classList.contains('error-message')) {
                errorSpan.remove();
            }
        } else if (input.name === 'message' && input.value.length > 300) {
            if (!errorSpan || !errorSpan.classList.contains('error-message')) {
                const newErrorSpan = document.createElement('span');
                newErrorSpan.className = 'error-message';
                newErrorSpan.textContent = 'Mensagem deve ter no máximo 300 caracteres';
                input.parentNode.insertBefore(newErrorSpan, input.nextElementSibling);
            }
            hasErrors = true;
        } else if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.remove();
        }
    }

    if (!hasErrors) {
        // Simulando o envio da mensagem (substitua pelo seu código de envio)
        setTimeout(function () {
            alert('Mensagem enviada com sucesso!');
            limparCampos(form);
            submitButton.textContent = 'Enviar mensagem';

            // Redefinindo a validação para permitir envios posteriores
            isValidationExecuted = false;
        }, 1000);

        // Definindo o texto do botão como "Enviando..."
        submitButton.textContent = 'Enviando...';
    }
}

submitButton.addEventListener('click', verificarCampos);

const inputElements = document.querySelectorAll('input[required], textarea[required]');
for (let i = 0; i < inputElements.length; i++) {
    const input = inputElements[i];
    input.addEventListener('input', function () {
        const errorSpan = this.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.remove();
        }
    });
}
