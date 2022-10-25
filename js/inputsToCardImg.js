const data = {
    cardName: /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/,
    cardNumber: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/,
    expMm: /0[1-9]|1[012]/,
    expYy: /[2-3][0-9]/,
    cvc: /^[0-9]{1,3}$/
}

const forms = document.getElementById('sectionForm');
const inputs = document.querySelectorAll('#sectionForm input');
