function displayRandomNumber(min=-20, max=20){
    document.getElementById("num").innerHTML = Math.floor(Math.random() * (max - min) + min);
}