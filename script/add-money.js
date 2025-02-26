document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('ac-no.').value;
    const amountValue = document.getElementById('amount').value;
    if ( amountValue === '') {
        alert('Please Enter your amount'); 
    }
    const amount = parseFloat(amountValue);
    const pinValue = document.getElementById('deposit-pin').value;
    const pin = parseInt(pinValue);
    const mainBalanceValue = document.getElementById('main-balance').innerText;
    const mainBalance = parseFloat(mainBalanceValue);

             
    if ( accountNumber.length === 11) {
        if ( amount <= 0 ) {
            alert('Please Enter valid amount');
        }
        if ( pin === 1234) {
            const sum = mainBalance+amount;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('Enter valid pin number')
        }
    }else{
        alert('Enter valid account number')
    }


})