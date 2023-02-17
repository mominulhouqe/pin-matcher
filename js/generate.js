

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const generateField = document.getElementById('generate-field');
    generateField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const tyNumberField =document.getElementById('type-number');
    const preiviousTypeNumber = tyNumberField.value;
    if (isNaN(number)) {
        console.log(number);
        if(number == 'C'){
            tyNumberField.value = ''
        }
        else if(number == '<'){
            const digits = preiviousTypeNumber.split('');
            digits.pop();
            const reminigDigits = digits.join('');
            tyNumberField.value = reminigDigits;
        }
    }
    else {

        const newTypeNumber = preiviousTypeNumber + number;
        tyNumberField.value = newTypeNumber;
    }

})

document.getElementById('varyfi-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('generate-field');
    const currentPin = displayPinField.value;

    const tyNumberField = document.getElementById('type-number');
    const tyNumber = tyNumberField.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFailed = document.getElementById('pin-fail');

    if(tyNumber === currentPin){
       
        pinSuccess.style.display = 'block';
        pinFailed.style.display = 'none';
    }
    else{
      
        pinFailed.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})

