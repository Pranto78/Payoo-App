
// function creation

function getInputValue (id){
    const inputField =  document.getElementById(id);
    const inputFieldValue = inputField.value;

    const inputFieldNumber = parseInt(inputFieldValue);

    return inputFieldNumber;
}

function getInputJust (id){
    const input = document.getElementById(id);
    const inputValue = input.value;
    return inputValue;
}

function getInnerValue(id){
    const inputInner = document.getElementById(id);
    const inputInnerValue = inputInner.innerText;
    const inputElement = parseInt(inputInnerValue);

    return inputElement;
}


// toggle function

function handleToggle (id){

    const sections =document.getElementsByClassName('sections');

    for(const section of sections){
        section.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}




document.getElementById('add-money-btn')
.addEventListener('click',function(e){

    e.preventDefault();

    const pinValid = 1234;

    const bank = getInputJust('bank');
    const accountNumber = document.getElementById('add-bankID').value;
    const amount = getInputValue('add-amount');
    const pinNumber = getInputValue('add-pin');


    // console.log(bank,accountNumber,amount,pinNumber);

    const balance =getInnerValue('available-balance');

    // console.log(balance);

    if(accountNumber.length <11){
        alert("Please enter 11 digit ACC.. no.");
        return;
    }

    if(pinNumber !== pinValid){
        alert("Invalid Pin number");
        return;
    }

    if(bank === ""){
        alert("choose bank name.");
        return;
    }




    const totalBalance = balance + amount;
    document.getElementById('available-balance').innerText = totalBalance;



    
});


// toggle

document.getElementById('money-btn').addEventListener('click',function (){
  
    handleToggle('add-money-parent');
});

document.getElementById('cashOut-btn').addEventListener('click',function (){

    handleToggle('cashout-parent');
});

document.getElementById('transfer-btn').addEventListener('click',function(){

    handleToggle('transfer-money-parent');
    
})

document.getElementById('bonus-btn').addEventListener('click',function(){
;
    handleToggle('bonus-money-parent');
})

document.getElementById('pay-btn').addEventListener('click',function(){

    handleToggle('pay-money-parent');
    
})
document.getElementById('trans-btn').addEventListener('click',function(){
   handleToggle('trans-money-parent');
})


// cash out

document.getElementById('withdraw-btn').addEventListener('click',function(e){

    e.preventDefault();
    const cashOutAmount =getInputValue('cash-amount');

    const availableAmount = parseInt(document.getElementById('available-balance').innerText);

    const amountAfterCashOut = availableAmount - cashOutAmount;

    document.getElementById('available-balance').innerText = amountAfterCashOut;


});




