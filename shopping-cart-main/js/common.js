// common function for subtotal
function getTextElementValueById(elementId){
    const currentTotalElement =document.getElementById(elementId);
    const currentTotalElementString = currentTotalElement.innerText;
    const currentTotalValue = parseInt(currentTotalElementString);
    return currentTotalValue;
}

// common function for final-total
function setElementValueById(elementId, value){
    const subTotalAmount = document.getElementById(elementId);
    subTotalAmount.innerText = value;
    
}

// common function of calculate sub-total
function calculateSubTotal(){
    const currentPhoneTotal =getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setElementValueById('final-total', finalAmount);
}