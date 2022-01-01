const todoForm = document.querySelector('.todo-form')

const todoInput = document.querySelector('.todo-input')

const todoList = document.querySelector('.todo-list')
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (todoInput.value.trim()) {
        addTodo(e)
    }
})

todoInput.focus();

function addTodo(e) {


    const todoText = todoInput.value;
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')

    //div
    const todo = document.createElement('div')
    todo.classList.add('todo')

    todo.innerHTML = `<span class="todo-tet">${todoText}</span>`

    // button
    const checkButton = document.createElement('button')
    checkButton.classList.add('todo-done')
    checkButton.innerHTML = `<i class="fas fa-check"></i>`


    const trashButton = document.createElement('button')
    trashButton.classList.add('todo-trash')
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`


    // adding

    todo.appendChild(checkButton)
    todo.appendChild(trashButton)

    newTodo.appendChild(todo)
    todoList.appendChild(newTodo)
    todoInput.value = '';
}


document.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'todo-trash') {
        const item = e.target.parentElement;
        item.parentElement.remove();

    };
})


document.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'todo-done') {
        const item = e.target.parentElement;
        item.parentElement.classList.toggle('checked');

    };
})