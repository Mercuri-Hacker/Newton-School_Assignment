window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip(){
    var bill = document.querySelector('#billamt').value;
    var tipPercentage = document.querySelector('#serviceQual').value;
    var person = document.querySelector('#peopleamt').value;
    if(bill === '' || tipPercentage === 'Select' || person === ''){
        alert("Please Enter Bill Amount");
        return;
    }
    if(person === '1'){
        document.querySelector('#each').style.display = 'none';
    } else {
        document.querySelector('#each').style.display = 'block';
    }
    var tip = (bill * tipPercentage) / person;
    tip = tip.toFixed(2);
    document.getElementById('total').innerHTML = tip;
}