const pass = 'demerval23';
const user = 'Demerval';
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formUser = document.querySelector('#user').value;
    const formPassword = document.querySelector('#password').value;

    if((pass === formPassword) && (user === formUser)){
        window.location.href = '../pages/dados.html';
    } else {
        alert('Você precisa de uma permissão para acessar a página')
        document.querySelector('#password').focus();
    }
    
})