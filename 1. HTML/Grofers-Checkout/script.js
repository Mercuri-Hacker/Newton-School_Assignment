let b = document.getElementsByTagName('table')[0];
let b1 = document.createElement('tr');
let b2 = document.createElement('td');
let b3 = document.createElement('td');
let b4 = document.createElement('td');

b4.setAttribute("data-ns-test", "grandTotal");

let h = document.querySelectorAll("[data-ns-test='price']");

let sum = 0;
for(let i=0; i<h.length;i++){
  sum += parseInt(h[i].innerHTML);
}

b2.innerHTML = 5;
b3.innerHTML = "Grand Total";
b4.innerHTML = sum;
b1.appendChild(b2);
b1.appendChild(b3);
b1.appendChild(b4);
b.appendChild(b1);