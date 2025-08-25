
// function creation


// input numbers function
function getInputValue (id){
    const inputField =  document.getElementById(id);
    const inputFieldValue = inputField.value;

    const inputFieldNumber = parseInt(inputFieldValue);

    return inputFieldNumber;
}

// string items function
function getInputJust (id){
    const input = document.getElementById(id);
    const inputValue = input.value;
    return inputValue;
}

// innerText function
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

    // hover effect

    const formBtn = document.getElementsByClassName('form-btn');

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");

        btn.classList.add("border-gray-200");
    }


    document.getElementById('money-btn').classList.remove("border-gray-200");
    document.getElementById('money-btn').classList.add("border-[#0874f2]" , "bg-[#0874f20d]");


});

document.getElementById('cashOut-btn').addEventListener('click',function (){

    handleToggle('cashout-parent');


    const formBtn = document.getElementsByClassName('form-btn');

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");

        btn.classList.add("border-gray-200");
    }


    document.getElementById('cashOut-btn').classList.remove("border-gray-200");
    document.getElementById('cashOut-btn').classList.add("border-[#0874f2]" , "bg-[#0874f20d]");
});

document.getElementById('transfer-btn').addEventListener('click',function(){

    handleToggle('transfer-money-parent');

        const formBtn = document.getElementsByClassName('form-btn');

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");

        btn.classList.add("border-gray-200");
    }


    document.getElementById('transfer-btn').classList.remove("border-gray-200");
    document.getElementById('transfer-btn').classList.add("border-[#0874f2]" , "bg-[#0874f20d]");
    
})

document.getElementById('bonus-btn').addEventListener('click',function(){
;
    handleToggle('bonus-money-parent');

    // hover

        const formBtn = document.getElementsByClassName('form-btn');

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");

        btn.classList.add("border-gray-200");
    }


    document.getElementById('bonus-btn').classList.remove("border-gray-200");
    document.getElementById('bonus-btn').classList.add("border-[#0874f2]" , "bg-[#0874f20d]");
})

document.getElementById('pay-btn').addEventListener('click',function(){

    handleToggle('pay-money-parent');
        const formBtn = document.getElementsByClassName('form-btn');

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");

        btn.classList.add("border-gray-200");
    }


    document.getElementById('pay-btn').classList.remove("border-gray-200");
    document.getElementById('pay-btn').classList.add("border-[#0874f2]" , "bg-[#0874f20d]");


    
})
document.getElementById('trans-btn').addEventListener('click',function(){
   handleToggle('trans-money-parent');
       const formBtn = document.getElementsByClassName('form-btn');

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");

        btn.classList.add("border-gray-200");
    }


    document.getElementById('trans-btn').classList.remove("border-gray-200");
    document.getElementById('trans-btn').classList.add("border-[#0874f2]" , "bg-[#0874f20d]");
})


// cash out

document.getElementById('withdraw-btn').addEventListener('click',function(e){

    e.preventDefault();
    const cashOutAmount =getInputValue('cash-amount');

    const availableAmount = parseInt(document.getElementById('available-balance').innerText);

    const amountAfterCashOut = availableAmount - cashOutAmount;

    document.getElementById('available-balance').innerText = amountAfterCashOut;


});




