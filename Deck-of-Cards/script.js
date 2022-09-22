// cardsNames
const cardNames = [
    '2C', '2D', '2H', '2S', 
    '3C', '3D', '3H', '3S', 
    '4C', '4D', '4H', '4S', 
    '5C', '5D', '5H', '5S', 
    '6C', '6D', '6H', '6S', 
    '7C', '7D', '7H', '7S', 
    '8C', '8D', '8H', '8S', 
    '9C', '9D', '9H', '9S', 
    '10C', '10D', '10H', '10S',
    'AC', 'AD', 'AH', 'AS',
    'JC', 'JD', 'JH', 'JS', 
    'KC', 'KD', 'KH', 'KS',
    'QC', 'QD', 'QH', 'QS'];

var dumped = [];
var cardNumbers = [];

for (let i = 0; i < 52; i++) {
cardNumbers.push(i);
dumped.push(false);
}

function shuffle(array) {
var currentIndex = array.length,
temporaryValue,
randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {
// Pick a remaining element...
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex -= 1;

// And swap it with the current element.
temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];
array[randomIndex] = temporaryValue;
}
return array;
}

cardNumbers = shuffle(cardNumbers);

// select the board and append all 52 cards
for (let i = 0; i < cardNames.length; i++) {
let eDivEle = document.createElement("div");
eDivEle.className += " empty";
if (!dumped[i]) {
let fDivEle = document.createElement("div");
fDivEle.className += " fill";
fDivEle.id = `${cardNumbers[i]}`;
fDivEle.setAttribute("pos", `${i}`);
fDivEle.setAttribute("draggable", "true");
fDivEle.style.backgroundImage = `url('https://raw.githubusercontent.com/Newton-School/Deck_of_Cards/main/JPEG/${
cardNames[cardNumbers[i]]
}.jpg')`;
eDivEle.appendChild(fDivEle);
}
var node = document.querySelector(".cards");
node.appendChild(eDivEle);
}

let fill = document.querySelectorAll(".fill");
const empties = document.querySelectorAll(".empty");

// Fill listners
for (let i = 0; i < fill.length; i++) {
fill[i].addEventListener("dragstart", dragStart);
fill[i].addEventListener("dragend", dragEnd);
}

// Loop through empties and call drag events
for (const empty of empties) {
empty.addEventListener("dragover", dragOver);
empty.addEventListener("dragenter", dragEnter);
empty.addEventListener("dragleave", dragLeave);
empty.addEventListener("drop", dragDrop);
}
var counter = 0;
var cardNo = 0;
var idNo = 0;
// Drag functions
function dragStart() {
this.className += " hold";
cardNo = parseInt(this.getAttribute("pos"));
idNo = parseInt(this.id);
setTimeout(() => {
this.className = "invisible";
}, 0);
}

function dragEnd() {
this.className = "fill";
}
function dragOver(e) {
e.preventDefault();
}
function dragEnter(e) {
e.preventDefault();
this.className += " hovered";
}
function dragLeave() {
this.className = "empty";
}

const finalMessage = document.querySelector(".final-message");

const restartButton = document.querySelector("#restart-button");

// add an event-listner
restartButton.addEventListener("click", () => {
finalMessage.style.display = "none";
dumped.forEach((el, i) => {
dumped[i] = false;
});
cardNumbers = shuffle(cardNumbers);
const allCards = document.querySelector(".cards");
allCards.innerHTML = "";
for (let i = 0; i < cardNames.length; i++) {
let eDivEle = document.createElement("div");
eDivEle.className += " empty";
if (!dumped[i]) {
let fDivEle = document.createElement("div");
fDivEle.className += " fill";
fDivEle.id = `${cardNumbers[i]}`;
fDivEle.setAttribute("pos", `${i}`);
fDivEle.setAttribute("draggable", "true");
fDivEle.style.backgroundImage = `url('https://raw.githubusercontent.com/Newton-School/Deck_of_Cards/main/JPEG/${
cardNames[cardNumbers[i]]
}.jpg')`;
eDivEle.appendChild(fDivEle);
}
var node = document.querySelector(".cards");
node.appendChild(eDivEle);
}
fill = document.querySelectorAll(".fill");
// Fill listners
for (let i = 0; i < fill.length; i++) {
fill[i].addEventListener("dragstart", dragStart);
fill[i].addEventListener("dragend", dragEnd);
}
counter = 0;
cardNo = 0;
idNo = 0;
});

function dragDrop() {
this.className = "empty";
if (idNo % 4 == parseInt(this.id) % 100) {
fill[cardNo].remove();
dumped[cardNo] = true;
counter++;
if (counter == 52) {
finalMessage.style.display = "block";
}
}
}