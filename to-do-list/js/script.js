const todoForm = document.querySelector ("#todo-form");
const todoInput = document.querySelector ("#todo-input");
const todoList = document.querySelector ("#todo-list");
const editForm = document.querySelector ("#edit-form");
const editInput = document.querySelector ("#edit-input");
const cancelEditBtn = document.querySelector ("#cancel-edit-btn");

const saveTodo = (text) => {

    const todo = document.createElement ("div");
    todo.classList("todo");

    const todoTitle = document.createElement ("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn =
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue)
    }

})