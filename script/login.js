
// Login
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const number = document.getElementById('number').value;    
    const pinValue = document.getElementById('pin').value;    
    const pin = parseInt(pinValue);
    
    if ( number.length === 11 ) {
        if ( pin === 1234) {
          window.location.href = 'dashboard.html'  
        }
        else{
            alert('Enter valid pin number');
        }
    }
    else{
        alert('Enter valid mobile number');     
    }

})
