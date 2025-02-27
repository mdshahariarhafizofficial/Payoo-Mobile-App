// Add Money Feature
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pin = getInputValueById('deposit-pin');
    const accountNumber = document.getElementById('ac-no.').value;
    const mainBalance = getInnerTextById('main-balance');
    const bank = document.getElementById('select-bank').value;

    if (bank === 'Select bank') {
        alert('Please select a bank')
        return;
    }
    if ( accountNumber.length === 11) {
        if ( amount <= 0 ) {
            alert('Please Enter valid amount');
            return;
        }
        else if( isNaN(amount) ){
            alert('Please Enter Your amount');
            return;
        }
        if ( pin === 1234) {
            const sum = mainBalance+amount;
            setInnerTextByIdAndValue('main-balance', sum);
            
            const container = document.getElementById('transaction-container');
            const div = document.createElement('div');
            div.innerHTML = `
                        <div class="flex justify-between items-center border border-gray-300 bg-white p-3 mb-4 rounded-md">
                            <div class="flex gap-4 items-center">
                                <div>
                                    <img src="asset/wallet 1.png" alt="">
                                </div>
                                <div>
                                    <p class="text-sm font-extrabold text-blue-500">${bank}</p>
                                    <h2 class="text-2xl font-extrabold">$ ${amount}</h2>
                                </div>
                            </div>
                            <p class="text-sm font-medium text-center">Add money</p>
                            <p class="text-xl font-extrabold text-blue-500">AC: ${accountNumber}</p>
                        </div>
            `
            container.appendChild(div);

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
            alert('Enter Valid Amount');
            return;
        }
        else if( isNaN(cashOutAmount) ){
            alert('Please Enter Your amount');
            return;
        }
        if ( cashOutPin === 1234) {
            if ( cashOutAmount > mainBalance) {
                alert('Enter Valid Amount')
            }
            else{
                const sub = mainBalance-cashOutAmount;
                setInnerTextByIdAndValue('main-balance', sub);

                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.innerHTML = `
                            <div class="flex justify-between items-center border border-gray-300 bg-white p-3 mb-4 rounded-md">
                                <div class="flex gap-4 items-center">
                                    <div>
                                        <img src="asset/wallet 1.png" alt="">
                                    </div>
                                    <div>
                                        <p class="text-sm font-extrabold text-blue-500"></p>
                                        <h2 class="text-2xl font-extrabold">$ ${cashOutAmount}</h2>
                                    </div>
                                </div>
                                <p class="text-sm font-medium text-center">Cash Out</p>
                                <p class="text-xl font-extrabold text-blue-500">AC: ${agentNumber}</p>
                            </div>
                `
                container.appendChild(div);
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
document.getElementById('transaction-section').style.display = 'none';

document.getElementById('add-money-card').addEventListener( 'click', function(){
    toggle('cash-out-section', 'none');
    toggle('add-money-section', 'block');
    toggle('transaction-section', 'none');
} );

document.getElementById('Cash-out-card').addEventListener('click', function () {
    toggle('cash-out-section', 'block');
    toggle('add-money-section', 'none');
    toggle('transaction-section', 'none');
} );

document.getElementById('transaction-card').addEventListener('click', function () {
    toggle('cash-out-section', 'none');
    toggle('add-money-section', 'none');
    toggle('transaction-section', 'block');
} );