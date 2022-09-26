function onAddEventHandler(event) {
    console.log(event);
    event.preventDefault();

    let input = document.querySelector(".todo-input");



    let globalElement = document.querySelector(".todo-list");

    let createElementDiv = document.createElement("div"); //<div></div>
    let createElementList = document.createElement("li"); //<li></li>
    let createNodeList = document.createTextNode(input.value); // todolist
    createElementList.classList.add("todo-item"); // <li class="todo-item"></li>
    createElementList.appendChild(createNodeList); //<li class="todo-item">togoList</li>
    createElementDiv.appendChild(createElementList);//<div><li class="todo-item">togoList</li></div>


    let createElementAddButton = document.createElement("button");
    let createNodeAddButton = document.createTextNode("Completed");
    createElementAddButton.classList.add("complete-btn");
    createElementAddButton.appendChild(createNodeAddButton);
    createElementDiv.appendChild(createElementAddButton);
    createElementAddButton.addEventListener('click', onCompleteEventListener);


    let createElementRemoveButton = document.createElement("button");
    let createNodeRemoveButton = document.createTextNode("Delete");
    createElementRemoveButton.classList.add("trash-btn");
    createElementRemoveButton.appendChild(createNodeRemoveButton);
    createElementDiv.appendChild(createElementRemoveButton);
    createElementRemoveButton.addEventListener('click', onDeleteHandler);


    input.value = "";
    globalElement.appendChild(createElementDiv);//<ul><div><li class="todo-item">togoList</li></div></ul>
}

function onCompleteEventListener(event) {
    event.target.parentElement.firstChild.classList.toggle("complete");
}

function onDeleteHandler(event) {
    event.target.parentElement.remove();

}