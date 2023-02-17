// set digit random number who want i
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin is not 4 digit', pin);
        return getPin;
    }
}

// random pin generate
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin
    const displayPinElement = document.getElementById('display-pin');
    displayPinElement.value = pin;
})

// calculator number button function
 document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const displayTypeNumbers = document.getElementById('display-type-numbers');
    const previousTypeNumbers = displayTypeNumbers.value;
     
    if(isNaN(number)){
        if(number === 'C'){
            displayTypeNumbers.value = '';
        }
        else if(number === '<'){
            const digit = previousTypeNumbers.split('');
            digit.pop();
            const remainingDigit = digit.join('');
            displayTypeNumbers.value = remainingDigit;
        }
    }
    else{        
        const newTypeNumbers = previousTypeNumbers + number;
        displayTypeNumbers.value = newTypeNumbers;
    }

 })

//  submit verify pin number
document.getElementById('btn-submit').addEventListener('click', function(){
    const displayPinElement = document.getElementById('display-pin');
    const newDisplayPinField = displayPinElement.value;
    
    const displayTypeNumbers = document.getElementById('display-type-numbers');
    const newTypeNumbersFiled = displayTypeNumbers.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(newDisplayPinField === newTypeNumbersFiled){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})

