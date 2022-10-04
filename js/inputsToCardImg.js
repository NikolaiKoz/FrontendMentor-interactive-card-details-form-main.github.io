var text = document.getElementById('name');
text.addEventListener( 'keyup', (event) => {

    var inputName = event.path[0].value;

    document.querySelector('.main__cardAndBackground__frontCard__data__name').innerHTML = inputName;

});

//SEPARAR NUMEROS CADA 4 DIGITOS UN ESPACIO

var cardNumber = document.getElementById('inputCardNumber');

let cardNum = ['1234567895555555'];

cardNumber.addEventListener( 'keyup', (event) => {



    var inputCardNumber = event.path[0].value;

    var resul = JSON.parse( "["+ inputCardNumber + "]" );

    console.log(event);





        document.querySelector(".main__cardAndBackground__frontCard__data__cardNumber").innerHTML = inputCardNumber;

});
