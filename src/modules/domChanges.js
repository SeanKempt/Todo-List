import { createTodo } from "./createTodo.js";
import { addToTodoListStorage } from "./localStorage.js";
//WARNING: Could be a single point of failure - Am I breaking the loosely coupled principal? maybe?
let modal = document.getElementById("todo-modal");
let close = document.getElementsByClassName("close")[0];
let createtodo = document.getElementById("new-todo-btn");

//loads the event listeners for the modal
const modalEvents = function () {
  createtodo.addEventListener("click", () => {
    modal.style.display = "block";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

//adds event listener to the submit button for the modal when creating a new task and then creates the object and stores it within the local storage.
const todoSubmit = document.getElementById("todo-submit");
const todoModalSubmitEvent = function () {
  todoSubmit.addEventListener("click", () => {
    const todoTitle = document.getElementById("title").value;
    const todoDescription = document.getElementById("description").value;
    const todoDueDate = document.getElementById("duedate").value;
    const todoNotes = document.getElementById("notes").value;
    const todoPriority = document.getElementById("priority").value;
    addToTodoListStorage(
      createTodo(
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        todoNotes
      ).createTodoDom()
    );
    modal.style.display = "none";
  });
};

export { modalEvents, todoModalSubmitEvent };
