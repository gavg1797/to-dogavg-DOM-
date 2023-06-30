import checkComplete from "./components/checkcomplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]")

const createTask = (evento) => {
evento.preventDefault();
const input = document.querySelector("[data-form-input]"); 
const value = input.value;
const list = document.querySelector("[data-list]");
const task = document.createElement('li');
task.classList.add("card");
input.value = ''
// backticks (comillas invertidas)
const taskContent = document.createElement("div")

const titleTask = document.createElement("span")
titleTask.classList.add("task")
titleTask.innerText = value;
taskContent.appendChild(checkComplete());
taskContent.appendChild(titleTask);
const content = `
    <span class="task">${value}</span>

    <i class="fas fa-trash-alt trashIcon icon"></i></li>`

// task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
}; 


// Arrow Functions o Funciones flecha o funciones anonimas.
btn.addEventListener("click",createTask);


   




