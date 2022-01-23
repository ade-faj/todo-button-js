
var newList = document.createElement('li');
var addButton = document.querySelector('.add_todo');
var todoInput = document.querySelector('#todo_input');
var todoList = document.querySelector('.todo_list');












addButton.addEventListener('click', function () {
    document.body.append(newList);
    todoList.append(newList);
    newList.append(todoInput.value);
    
});

