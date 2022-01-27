
const form = document.querySelector('.main_container');
const editButton = document.querySelector('.edit_todo');
const delButton = document.querySelector('.del_todo');
const todoInput = document.querySelector('#todo_input');
const todoList = document.querySelector('.todo_list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    taskList();
});

function taskList () {
    let todoText = todoInput.value;
    newList = document.createElement('li');
    newList.innerHTML = todoText;
    todoList.appendChild(newList);
    todoInput.value = '';
    const editButton = document.createElement('div');
    editButton.innerHTML = `<button class="edit_todo">edit</button>`;
    newList.appendChild(editButton);
    const delButton = document.createElement('div');
    delButton.innerHTML = `<button class="del_todo">delete</button>`;
    newList.appendChild(delButton);
}


delButton.onclick = function () {
    var todoText = todoInput.value;
    todoList.style.display = 'none';
}

