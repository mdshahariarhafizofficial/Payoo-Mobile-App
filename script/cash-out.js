document.getElementById('withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const amountValue = document.getElementById('cash-out-amount').value;
    if (amountValue === '') {
        alert('Enter Cash Out Amount')
    } 
    const cashOutAmount = parseFloat(amountValue);
    const cashOutPinValue = document.getElementById('cash-out-pin').value;
    const cashOutPin = parseInt(cashOutPinValue);
    const mainBalanceValue = document.getElementById('main-balance').innerText;
    const mainBalance = parseFloat(mainBalanceValue);
    
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
                document.getElementById('main-balance').innerText = sub;
            }
        }else{
            alert('Enter Valid PIN Number') 
        }    
    }else{
        alert('Enter Valid Agent Number')
    }

})