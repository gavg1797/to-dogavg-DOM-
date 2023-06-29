const btn = document.querySelector("[data-form-btn]")


const createTask = (evento) => {
evento.preventDefault();
const input = document.querySelector("[data-form-input]") 
console.log(input.value);
}; 

console.log(btn);

// Arrow Functions o Funciones flecha o funciones anonimas.
btn.addEventListener("click",createTask);
    



