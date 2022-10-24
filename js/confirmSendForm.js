const form = document.getElementById('sectionForm');
const btnForm = document.getElementById('btnForm');

const btnSendForm = document.getElementById('btnSendForm');
const sendForm = document.getElementById('sendForm');



btnForm.addEventListener( 'click', (event) => {
    event.preventDefault();
    form.classList.toggle('display');
    sendForm.classList.toggle('display');
});

btnSendForm.addEventListener( 'click', () => {
    location.reload();
    sendForm.classList.toggle('display');
    form.classList.toggle('display');
});
