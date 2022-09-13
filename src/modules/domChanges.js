import { createTodo } from "./createTodo.js";
import { createProject } from "./createProject.js";
import {
  addToTodoListStorage,
  addToProjectListStorage,
} from "./localStorage.js";
//WARNING: Could be a single point of failure - Am I breaking the loosely coupled principal? maybe?
let modal = document.getElementById("todo-modal");
let close = document.getElementsByClassName("close")[0];
let projectClose = document.getElementsByClassName("close")[1];
let createtodo = document.getElementById("new-todo-btn");
let createProjectBtn = document.getElementById("new-project-btn");
let projectModal = document.getElementById("project-modal");

//loads the event listeners for the modal
const modalEvents = function () {
  createProjectBtn.addEventListener("click", () => {
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
    const createTodoDom = function () {
      const main = document.getElementById("main-content");
      const div = document.createElement("div");
      const todoTitleElement = document.createElement("p");
      const todoDescriptionElement = document.createElement("p");
      const todoDueDateElement = document.createElement("p");
      const todoPriorityElement = document.createElement("p");
      const todoNotesElement = document.createElement("p");
      main.appendChild(div);
      div.appendChild(todoTitleElement);
      div.appendChild(todoDescriptionElement);
      div.appendChild(todoDueDateElement);
      div.appendChild(todoPriorityElement);
      div.appendChild(todoNotesElement);
      todoTitleElement.textContent = `Title: ${todoTitle}`;
      todoDescriptionElement.textContent = `Description: ${todoDescription}`;
      todoDueDateElement.textContent = `Due-Date: ${todoDueDate}`;
      todoPriorityElement.textContent = `Priority: ${todoPriority}`;
      todoNotesElement.textContent = `Notes: ${todoNotes}`;
      return main;
    };
    addToTodoListStorage(
      createTodo(
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        todoNotes
      )
    );
    createTodoDom();
    modal.style.display = "none";
  });
};

//adds event listener to the submit button for the modal when creating a new project. After creating the object it stores it within the local storage.
const projectSubmit = document.getElementById("project-submit");
const projectModalSubmitEvent = function () {
  projectSubmit.addEventListener("click", () => {
    const projectTitle = document.getElementById("project-title").value;
    const projectDescription = document.getElementById(
      "project-description"
    ).value;
    let createProjectDom = function () {
      const sidebar = document.getElementById("projects-container");
      const div = document.createElement("div");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      sidebar.appendChild(div);
      div.appendChild(title);
      div.appendChild(description);
      title.textContent = `${projectTitle}`;
      description.textContent = `${projectDescription}`;
      return sidebar;
    };
    addToProjectListStorage(createProject(projectTitle, projectDescription));
    createProjectDom();
    projectModal.style.display = "none";
  });
};

export { modalEvents, todoModalSubmitEvent, projectModalSubmitEvent };
