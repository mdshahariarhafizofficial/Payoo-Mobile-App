// Add Money Feature
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pin = getInputValueById('deposit-pin');
    const accountNumber = document.getElementById('ac-no.').value;
    const mainBalance = getInnerTextById('main-balance');

    if ( accountNumber.length === 11) {
        if ( amount <= 0 ) {
            alert('Please Enter valid amount');
        }
        if ( pin === 1234) {
            const sum = mainBalance+amount;
            setInnerTextByIdAndValue('main-balance', sum);
            
        }
        else{
            alert('Enter valid pin number')
        }
    }else{
        alert('Enter valid account number')
    }

})

// Cash out Money Feature

document.getElementById('withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const cashOutAmount = getInputValueById('cash-out-amount');
    const cashOutPin = getInputValueById('cash-out-pin');
    const mainBalance = getInnerTextById('main-balance');

    if ( agentNumber.length === 11) {
        if (cashOutAmount <= 0) {
            alert('Enter Valid Amount')
        }
        if ( cashOutPin === 1234) {
            if ( cashOutAmount > mainBalance) {
                alert('Enter Valid Amount')
            }
            else{
                const sub = mainBalance-cashOutAmount;
                setInnerTextByIdAndValue('main-balance', sub);
            }
        }else{
            alert('Enter Valid PIN Number') 
        }    
    }else{
        alert('Enter Valid Agent Number')
    }
});


// Toggle Function
document.getElementById('cash-out-section').style.display = 'none';

document.getElementById('add-money-card').addEventListener( 'click', function(){
    toggle('cash-out-section', 'none');
    toggle('add-money-section', 'block');
} );

document.getElementById('Cash-out-card').addEventListener('click', function () {
    toggle('cash-out-section', 'block');
    toggle('add-money-section', 'none');
} );