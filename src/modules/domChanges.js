import { createTodo } from "./createTodo.js";
import { createProject } from "./createProject.js";
import {
  addToTodoListStorage,
  addToProjectListStorage,
  getTodoList,
} from "./localStorage.js";
import { markTodoComplete } from "./setTodoComplete.js";
import { removeTodo } from "./deleteTodo.js";
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
  const deleteBtn = document.createElement("div");
  const checkboxDiv = document.createElement("div");
  const detailsDiv = document.createElement("div");
  const todoTitleElement = document.createElement("p");
  const checkbox = document.createElement("input");
  const rightChev = `<i class="fa-solid fa-chevron-right"></i>`;
  const trash = `<i class="fa-solid fa-trash-can"></i>`;
  todoTitleElement.classList.add("todo-title");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkboxes");
  detailsDiv.classList.add("todo-details");
  detailsBtn.classList.add("btn-icon");
  deleteBtn.classList.add("btn-icon");
  div.classList.add("todo-cards");
  main.appendChild(div);
  div.appendChild(checkboxDiv);
  checkboxDiv.appendChild(checkbox);
  div.appendChild(todoTitleElement);
  div.appendChild(deleteBtn);
  div.appendChild(detailsBtn);
  main.appendChild(detailsDiv);
  deleteBtn.innerHTML = trash;
  deleteBtn.setAttribute("id", "delete-btn");
  detailsBtn.setAttribute("id", "details-btn");
  detailsBtn.innerHTML = rightChev;
  div.dataset.details = "false";
  div.dataset.id = `${todoItem.id}`;
  todoTitleElement.textContent = `${todoItem.title}`;
  //details btn is the drop down; details div is the div with the description etc.; div is the card container.
  todoCardEventListener(detailsBtn, detailsDiv, div);
  checkboxEventListener(checkbox, todoTitleElement);
  deleteTodoEventListener(deleteBtn, todoTitleElement);
  return main;
};

const checkboxEventListener = (element, title) => {
  element.addEventListener("change", () => {
    if (element.checked == true) {
      markTodoComplete(title);
      title.classList.add("todo-complete");
    } else {
      title.classList.remove("todo-complete");
      markTodoComplete(title);
    }
  });
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

const deleteTodoEventListener = function (btn, todo) {
  btn.addEventListener("click", () => {
    const todoList = getTodoList();
    const todoId = todo.parentElement.dataset.id;
    const todoElement = todo.parentElement;
    const findObj = (obj) => obj.id == todoId;
    const objIndex = todoList.findIndex(findObj);
    removeTodo(objIndex);
    deleteTodoCard(todoElement);
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
    addToProjectListStorage(newProjectItem);
    createProjectDom(projectTitle);
    projectModal.style.display = "none";
  });
};

//creates Dom element for project list
const createProjectDom = function (name) {
  const sidebar = document.getElementById("projects-container");
  const div = document.createElement("div");
  const title = document.createElement("p");
  sidebar.appendChild(div);
  div.appendChild(title);
  title.textContent = `${name}`;
  return sidebar;
};

//simply goes through the array and renders the todo items from the array.
const renderTodoFromArray = function () {
  const todoArray = getTodoList();
  for (let i = 0; i < todoArray.length; i++) {
    renderTodo(todoArray[i]);
  }
};

//removes the HTML element from the document object
const deleteTodoCard = function (todo) {
  todo.remove();
};

export {
  modalEvents,
  todoModalSubmitEvent,
  projectModalSubmitEvent,
  renderTodoFromArray,
  createProjectDom,
};
