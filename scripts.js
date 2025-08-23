
document.getElementById('button').addEventListener('click', function(e){

    e.preventDefault();

    const mobileNumber = 123456789;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('number-field').value;
    const mobileNumberConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-field').value;
    const pinNumberConverted = parseInt(pinNumberValue);

    if(mobileNumberConverted === mobileNumber && pinNumberConverted === pinNumber){
        window.location.href = "./home.html" 
        
    }

    else{
        alert("Invalid pin and number.")
    }

} );

