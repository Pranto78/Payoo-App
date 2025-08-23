
document.getElementById('add-money-btn')
.addEventListener('click',function(e){

    e.preventDefault();

    const pinValid = 1234;

    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('add-bankID').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = parseInt(document.getElementById('add-pin').value);


    // console.log(bank,accountNumber,amount,pinNumber);

    const balance =parseInt(document.getElementById('available-balance').innerText);

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
    document.getElementById('cashout-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "block";
});

document.getElementById('cashOut-btn').addEventListener('click',function (){
    document.getElementById('cashout-parent').style.display = "block";
    document.getElementById('add-money-parent').style.display = "none";
});


// cash out

document.getElementById('withdraw-btn').addEventListener('click',function(e){

    e.preventDefault();
    const cashOutAmount = parseInt(document.getElementById('cash-amount').value);

    const availableAmount = parseInt(document.getElementById('available-balance').innerText);

    const amountAfterCashOut = availableAmount - cashOutAmount;

    document.getElementById('available-balance').innerText = amountAfterCashOut;


});

