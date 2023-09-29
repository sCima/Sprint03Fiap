let botaoForm = document.querySelector('#btn-formulario');

botaoForm.addEventListener('click', () => {
    botaoForm.textContent = "Enviado!";
    botaoForm.classList.add('transition')
    botaoForm.classList.remove('btn-dark');
    botaoForm.classList.add('btn-success');
});