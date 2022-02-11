

const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todoList');


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delTodo);
todoList.addEventListener('click', checkTodo);






function addTodo(event) {
    event.preventDefault();
    task = todoInput.value;

    if (task === '') {
        alert('enter a task');
    } else {
        var newTask = document.createElement('li');
        var div = document.createElement('div');
        div.classList.add('todo');
        todoList.append(div);
        div.append(newTask);
        newTask.append(task);
        todoInput.value = '';

        var checkButton = document.createElement('div');
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add('checkButton');
        div.append(checkButton);
        todoList.append(div);

        var delButton = document.createElement('div');
        delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        delButton.classList.add('delButton');
        div.append(delButton);
        todoList.append(div);
    }
}

function delTodo(e) {
    const item = e.target;
    if (item.classList[0] === 'delButton'){
    const todo = item.parentElement;
    todo.remove();
    }

}

function checkTodo(e) {
    const item = e.target;
    if (item.classList[0] === 'checkButton'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    }

}

