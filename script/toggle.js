document.getElementById('cash-out-section').style.display = 'none';
// Add mony btn
document.getElementById('add-money-card').addEventListener( 'click', function(){
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = 'none';
} );


// Cash out btn
document.getElementById('Cash-out-card').addEventListener( 'click', function(){
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'block';
} );

