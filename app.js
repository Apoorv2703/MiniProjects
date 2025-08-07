let form = document.querySelector('form');
let input = document.querySelector('input');
let ul = document.querySelector('ul');



let addTodo = (e) =>{
    e.preventDefault();
    let li = document.createElement("li");
    li.innerText = input.value;
    li.className = "list-group-items";
    ul.appendChild(li);
    form.reset()
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerText = "Delete";
    li.appendChild(deleteBtn);


    
}


form.addEventListener("submit" , addTodo)


let removeTodo = (e) =>{
    if(e.target.className === "delete"){
        ul.removeChild(e.target.parentElement)
    }
}

ul.addEventListener("click" , removeTodo)