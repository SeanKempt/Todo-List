import { createTodo } from "./createTodo.js";
import { addToTodoListStorage } from "./localStorage.js";
//WARNING: Could be a single point of failure - Am I breaking the loosely coupled principal? maybe?
let modal = document.getElementById("todo-modal");
let close = document.getElementsByClassName("close")[0];
let projectClose = document.getElementsByClassName("close")[1];
let createtodo = document.getElementById("new-todo-btn");
let createProject = document.getElementById("new-project-btn");
let projectModal = document.getElementById("project-modal");

//loads the event listeners for the modal
const modalEvents = function () {
  createProject.addEventListener("click", () => {
    projectModal.style.display = "block";
  });

  createtodo.addEventListener("click", () => {
    modal.style.display = "block";
  });

  projectClose.addEventListener("click", () => {
    projectModal.style.display = "none";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal || event.target == projectModal) {
      modal.style.display = "none";
      projectModal.style.display = "none";
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
