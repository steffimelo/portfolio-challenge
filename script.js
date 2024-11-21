document.querySelectorAll('.navegacao__elemento a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 

        targetSection.scrollIntoView({
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contato__formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Captura os campos do formulário
        const nome = document.querySelector('.contato__campo[type="text"]');
        const email = document.querySelector('.contato__campo[type="email"]');
        const mensagem = document.querySelector('.contato__campo--textarea');

        // Mensagem de erro
        let erros = [];

        // Validação do campo Nome
        if (!nome.value.trim()) {
            erros.push('O campo Nome é obrigatório.');
        }

        // Validação do campo Email
        if (!email.value.trim()) {
            erros.push('O campo E-mail é obrigatório.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            erros.push('Por favor, insira um e-mail válido.');
        }

        // Validação do campo Mensagem
        if (!mensagem.value.trim()) {
            erros.push('O campo Mensagem é obrigatório.');
        }

        // Exibir erros ou enviar o formulário
        if (erros.length > 0) {
            alert(erros.join('\n'));
        } else {
            alert('Formulário enviado com sucesso!');
            form.reset(); // Limpa o formulário
        }
    });
});

