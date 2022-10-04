const form = document.getElementById('form');
const btnForm = document.getElementById('btnForm');

const btnSendForm = document.getElementById('btnSendForm');
const sendForm = document.getElementById('sendForm');



btnForm.addEventListener( 'click', () => {
    form.classList.toggle('display');
    sendForm.classList.toggle('display');
});

btnSendForm.addEventListener( 'click', () => {
    sendForm.classList.toggle('display');
    form.classList.toggle('display');
});
