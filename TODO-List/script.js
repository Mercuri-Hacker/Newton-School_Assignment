function onAddEventHandler(event){
    // console.log(event);
    event.preventDefault();
    let input = document.querySelector(".todo-input").value;
    console.log(input);
    let globalElement = document.querySelector(".todo-list");document.getElementsByClassName("todo-button")[0].addEventListener("click",Addfunc);

function Addfunc(e)
{
e.preventDefault();

const inputValue=document.getElementsByClassName("todo-input")[0].value;

const toDoElement=document.createElement("li");
toDoElement.innerText=inputValue;
toDoElement.className="todo-item";

const completeBtn=document.createElement("button");
completeBtn.innerText="Complete";
completeBtn.className="complete-btn";

const deleteBtn=document.createElement("button");
deleteBtn.innerText="Delete";
deleteBtn.className="trash-btn";

const divElement=document.createElement("div");
divElement.appendChild(toDoElement);
divElement.appendChild(completeBtn);
divElement.appendChild(deleteBtn);

document.getElementsByClassName("todo-list")[0].appendChild(divElement);

}
document.addEventListener('click',function(event){
if(event.target.className === "trash-btn"){
// console.log(event.target);
const removeItem = event.target.parentNode ;
// console.log(removeItem);
removeItem.remove();
}
else if(event.target.className === "complete-btn")
{
const removeItem = event.target.parentNode.childNodes[0] ;
if(removeItem.classList.contains('strike'))
{
    removeItem.classList.remove('strike');
}
else
{
    removeItem.classList.add('strike');
}
}
})
    let createElementDiv = document.createElement("div"); //<div></div>
    let createElementList = document.createElement("li"); //<li></li>
    let createNodeList = document.createTextNode(input); // todolist
    createElementList.classList.add("todo-item"); // <li class="todo-item"></li>
    createElementList.appendChild(createNodeList); //<li class="todo-item">togoList</li>
    createElementDiv.appendChild(createElementList);//<div><li class="todo-item">togoList</li></div>
    let createElementAddButton = document.createElement("button");
    let createNodeAddButton = document.createTextNode("Completed");
    createElementAddButton.classList.add("complete-btn");
    createElementAddButton.appendChild(createNodeAddButton);
    createElementDiv.appendChild(createElementAddButton);
    createElementAddButton.addEventListener('click',onCompleteEventListener);
    let createElementRemoveButton = document.createElement("button");
    let createNodeRemoveButton = document.createTextNode("Delete");
    createElementRemoveButton.classList.add("trash-btn");
    createElementRemoveButton.appendChild(createNodeRemoveButton);
    createElementDiv.appendChild(createElementRemoveButton);
    createElementRemoveButton.addEventListener('click',onDeleteHandler);
    globalElement.appendChild(createElementDiv);//<ul><div><li class="todo-item">togoList</li></div></ul>
}
function onCompleteEventListener(event){
    event.target.parentElement.firstChild.classList.toggle("complete");
}
function onDeleteHandler(event){
    event.target.parentElement.remove();
}