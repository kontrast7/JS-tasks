// КЛАД
document.getElementById('picture').onclick = function (e) {
    if (e.offsetX > 233 && e.offsetX < 253 && e.offsetY > 147 && e.offsetY < 167) {
        console.log('Ты нашел клад!');
    } else if (e.offsetX < 232) {
        console.log('Правее');
    } else if (e.offsetX > 254) {
        console.log('Левее');
    } else if (e.offsetY < 146) {
        console.log('Ниже');
    } else if (e.offsetY > 168) {
        console.log('Выше');
    }
};


// TODO
const todoItems = document.getElementById('todo-items');
const btnTodo = document.getElementById('todo-submit');
const inputTodo = document.getElementById('todo-input');

let todos;

function toLocal() {
    todos = todoItems.innerHTML;
    localStorage.setItem('todos', todos);
}

if (localStorage.getItem('todos')) {
    todoItems.innerHTML = localStorage.getItem('todos');
}

function add(e) {
    const div = document.createElement('div');
    const closeDiv = document.createElement('button');
    closeDiv.classList.add('closeVisible');
    div.classList.add('item');
    closeDiv.innerHTML = 'Delete';

    const count = document.querySelectorAll('.item').length;
    div.innerHTML = e.target.value;

    div.id = `id${count}`;
    closeDiv.id = `close${count}`

    todoItems.append(div);
    div.append(closeDiv);

    for (let i = 0; i <= count; i++) {
        let els = document.querySelectorAll(".item")[i];
        let els2 = document.querySelectorAll(".closeVisible")[i];
        els2.addEventListener('click', () => {
            els.remove();
            toLocal();
        })
    }
    toLocal();
};

inputTodo.addEventListener('change', add);

btnTodo.addEventListener('click', (e) => {
    e.preventDefault();
    inputTodo.value = '';
})