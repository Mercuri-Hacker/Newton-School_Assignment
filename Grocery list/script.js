var time = 0;
function calcTotal() {
    let table = document.querySelector('tbody');
    if(time > 0){
        table.removeChild(table.children[table.children.length - 1])
    }
    let lastRow = document.createElement('tr');
    let prices = document.querySelectorAll('[data-ns-test = price]');
    let sum = 0;
    for(let i=0; i<prices.length; i++){
        sum += parseInt(prices[i].textContent);
    }
    let child0 = document.createElement("td");
    let child = document.createElement("td");
    child0.textContent = "Grand Total"
    child.setAttribute('data-ns-test', 'grandTotal');
    child.textContent = sum;
    lastRow.appendChild(child0)
    lastRow.appendChild(child)
    table.appendChild(lastRow);
    time++;
}