

const addButton = document.querySelector('.add');
const input = document.querySelector('.input');
const ul = document.querySelector('.list');
const edit = document.getElementsByClassName('fa-edit');
const del = document.getElementsByClassName('fa-trash-alt');

addButton.addEventListener('click', function (){
    if (input.value === '') {
        alert('write something!')
    } else {
        let items = JSON.parse(window.localStorage.getItem("todos"));

        items.push({
            task: input.value
        })

        window.localStorage.setItem("todos", JSON.stringify(items));

        window.location.reload();
    }
});

del.addEventListener('click', function(){
    newList.remove();
})

function getItems() {
    let items = JSON.parse(window.localStorage.getItem("todos"));

    if (items == null) {
        window.localStorage.setItem("todos", JSON.stringify([]));
        items = JSON.parse(window.localStorage.getItem("todos"));
    }

    items.map(task => {
        console.log("success")
        newList = document.createElement('li');
        newList.innerText = task.task;
        ul.appendChild(newList);
        span = document.createElement('span');
        span.innerHTML = '<i class="far fa-edit"></i> <i class="far fa-trash-alt"></i>';
        newList.appendChild(span);
    })
}