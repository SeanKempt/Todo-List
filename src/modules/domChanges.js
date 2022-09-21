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
let createTodoBtn = document.getElementById("new-todo-btn");
let createProjectBtn = document.getElementById("new-project-btn");
let projectModal = document.getElementById("project-modal");

//loads the event listeners for the modal
const modalEvents = function () {
  createProjectBtn.addEventListener("click", () => {
    projectModal.style.display = "block";
  });

  createTodoBtn.addEventListener("click", () => {
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
    const newTodoItem = createTodo(
      todoTitle,
      todoDescription,
      todoDueDate,
      todoPriority,
      todoNotes
    );
    addToTodoListStorage(newTodoItem);
    renderTodo(newTodoItem);
    modal.style.display = "none";
  });
};

const renderTodo = (todoItem) => {
  const main = document.getElementById("main-content");
  const div = document.createElement("div");
  const detailsBtn = document.createElement("div");
  const checkboxDiv = document.createElement("div");
  const detailsDiv = document.createElement("div");
  const todoTitleElement = document.createElement("p");
  const checkbox = document.createElement("input");
  const rightChev = `<i class="fa-solid fa-chevron-right"></i>`;
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkboxes");
  detailsDiv.classList.add("todo-details");
  detailsBtn.classList.add("btn-icon");
  div.classList.add("todo-cards");
  main.appendChild(div);
  div.appendChild(checkboxDiv);
  checkboxDiv.appendChild(checkbox);
  div.appendChild(todoTitleElement);
  div.appendChild(detailsBtn);
  main.appendChild(detailsDiv);
  detailsBtn.setAttribute("id", "details-btn");
  detailsBtn.innerHTML = rightChev;
  div.dataset.details = "false";
  div.dataset.id = `${todoItem.id}`;
  todoTitleElement.textContent = `${todoItem.title}`;
  //details btn is the drop down; details div is the div with the description etc.; div is the card container.
  todoCardEventListener(detailsBtn, detailsDiv, div);
  return main;
};

//Event listener for the todo item cards that when clicked will search the array for the id of the clicked item and return the object with that same Id
const todoCardEventListener = (btn, details, div) => {
  const downChev = `<i class="fa-solid fa-chevron-down"></i>`;
  const rightChev = `<i class="fa-solid fa-chevron-right"></i>`;
  btn.addEventListener("click", () => {
    if (div.dataset.details == "false") {
      renderTodoDetails(div, details);
      btn.innerHTML = downChev;
      div.dataset.details = "true";
    } else {
      //removes the child nodes of the details div but keeps the details div in place for when we re-append the details to the card.
      while (details.hasChildNodes()) {
        details.removeChild(details.firstChild);
      }
      btn.innerHTML = rightChev;
      div.dataset.details = "false";
    }
    //adds the collapsable effect to the todo-details div
    if (details.style.maxHeight) {
      details.style.maxHeight = null;
    } else {
      details.style.maxHeight = details.scrollHeight + "px";
    }
  });
};

//renders details of the filtered/found object on the div that is clicked.
const renderTodoDetails = (card, details) => {
  let todoListStorageEntries = JSON.parse(localStorage.getItem("todoList"));
  const divId = card.dataset.id;
  const result = todoListStorageEntries.filter(
    (obj) => obj.id === Number(divId)
  );
  const todoDescriptionElement = document.createElement("p");
  const todoDueDateElement = document.createElement("p");
  const todoPriorityElement = document.createElement("p");
  const todoNotesElement = document.createElement("p");
  details.appendChild(todoDescriptionElement);
  details.appendChild(todoDueDateElement);
  details.appendChild(todoPriorityElement);
  details.appendChild(todoNotesElement);
  todoDescriptionElement.textContent = `Description: ${result[0].description}`;
  todoDueDateElement.textContent = `Due-Date: ${result[0].dueDate}`;
  todoPriorityElement.textContent = `Priority: ${result[0].priority}`;
  todoNotesElement.textContent = `Notes: ${result[0].notes}`;
};

//adds event listener to the submit button for the modal when creating a new project. After creating the object it stores it within the local storage.
const projectSubmit = document.getElementById("project-submit");
const projectModalSubmitEvent = function () {
  projectSubmit.addEventListener("click", () => {
    const projectTitle = document.getElementById("project-title").value;
    const newProjectItem = createProject(projectTitle);
    let createProjectDom = function () {
      const sidebar = document.getElementById("projects-container");
      const div = document.createElement("div");
      const title = document.createElement("p");
      sidebar.appendChild(div);
      div.appendChild(title);
      title.textContent = `${projectTitle}`;
      return sidebar;
    };
    addToProjectListStorage(newProjectItem);
    createProjectDom();
    projectModal.style.display = "none";
  });
};

export { modalEvents, todoModalSubmitEvent, projectModalSubmitEvent };
