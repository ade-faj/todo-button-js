

const addButton = document.querySelector('.add_todo');
const editButton = document.querySelector('.edit_todo');
const delButton = document.querySelector('.del_todo');
const todoInput = document.querySelector('#todo_input');
const todoList = document.querySelector('.todo_list');


addButton.onclick = function () {
    var todoText = todoInput.value;
    if (todoInput === '') {
        alert('type something!');
    } else {
        newList = document.createElement('li');
        newList.innerHTML = todoText;
        todoList.insertBefore(newList, todoList.childNodes[0]);
        todoInput.value = '';
    }

    
}

editButton.onclick = function () {

}

delButton.onclick = function () {
    var todoText = todoInput.value;
    todoList.style.display = 'none';
}

