const body = document.getElementById("body");
const check = document.querySelector('#checkbox');
const label = document.getElementById("label");

check.addEventListener('change', function(){
    body.classList.toggle('dark');
    console.log(label);
})