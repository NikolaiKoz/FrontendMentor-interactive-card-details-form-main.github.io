const regExp = {
    nameExp: /^[A-Z a-z]+$/,
    numberExp: /[^\d]/g,
    numberExpInp: /\d{1,4}/g,
    month: /^(0[0-9]|1[1-2]){2}$/,
    year: /^[0-9][0-2]{4}$/,
    cvc: /^[0-9]{3}$/,
};

function name (){
    const nameCard = document.getElementById("card_name").nodeValue;
    console.log(nameCard );
};

name();



/*
function inputName(){
    nameOnCard.innerHTML = cardholder.value;
    thankYou.innerHTML = `Thank you ${cardholder.value}`;
    if(cardholder.value == ""){
        nameOnCard.innerHTML = cardholder.placeholder;
    }
}

  function validateName() {
      let cardholderExp = /^[A-Z a-z]+$/;
      let errorMsg = document.getElementById("errorMsg");
      if (cardholder.value.match(cardholderExp)) {
        errorMsg.textContent = "";
      } else {
        errorMsg.innerHTML = "Please enter cardholder name!";
      }
    }


*/