var data = 0;

document.getElementById("counter").innerText = data;
  

function increment() {
    data = data + 1;
    document.getElementById("counter").innerText = data;
}

function decrement() {
    data = data - 1;
    if(data <= 0){
        data = 0;
    }
    document.getElementById("counter").innerText = data;
}