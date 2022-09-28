import { intialProject } from "./createProject";
import { renderExistingProjects, renderTodoFromArray } from "./domChanges";

const addToLocalStorage = (key, thing) => {
  if (thing !== String) {
    window.localStorage.setItem(key, JSON.stringify(thing));
  } else {
    window.localStorage.setItem(key, thing);
  }
};

//function that adds a given todo to the todo list storage array.
const addToTodoListStorage = function (todo) {
  let todoListStorageEntries = JSON.parse(localStorage.getItem("todoList"));
  if (todoListStorageEntries == null) todoListStorageEntries = [];
  todoListStorageEntries.push(todo);
  window.localStorage.setItem(
    "todoList",
    JSON.stringify(todoListStorageEntries)
  );
};

//Adds given project to the projectList in local storage
const addToProjectListStorage = function (project) {
  let projectListStorageEntries = JSON.parse(
    localStorage.getItem("projectList")
  );
  if (projectListStorageEntries == null) projectListStorageEntries = [];
  projectListStorageEntries.push(project);
  window.localStorage.setItem(
    "projectList",
    JSON.stringify(projectListStorageEntries)
  );
};

const getTodoList = function () {
  return JSON.parse(localStorage.getItem("todoList"));
};

const getProjectList = function () {
  return JSON.parse(localStorage.getItem("projectList"));
};

//using to clear the local storage before loading the page for development
const clearLocalStorage = function () {
  window.localStorage.clear();
};

//todo is the title element from the todoCards
const editTodoInLocalStorage = function (todo, property, newvalue) {
  const todoList = getTodoList();
  const todoId = todo.parentElement.dataset.id;
  const findObj = (obj) => obj.id == todoId;
  const objIndex = todoList.findIndex(findObj);
  todoList[objIndex][property] = newvalue;
  const newTodoList = todoList;
  window.localStorage.setItem("todoList", JSON.stringify(newTodoList));
  console.log(todoList);
};

const removeItemLocalStorage = function (item) {
  window.localStorage.removeItem(item);
};

//checks if there is any data in the todo list array; If there is then it renders the todo cards like normal
const checkIfDataExists = function () {
  if (getTodoList() === null || getTodoList().length === 0) {
    clearLocalStorage();
    intialProject();
    console.log("hello new user!");
  } else {
    renderTodoFromArray();
    renderExistingProjects();
    console.log(`loaded up the todolist!`);
  }
};

export {
  addToLocalStorage,
  addToTodoListStorage,
  addToProjectListStorage,
  clearLocalStorage,
  getTodoList,
  editTodoInLocalStorage,
  checkIfDataExists,
  removeItemLocalStorage,
  getProjectList,
};

// const projectListStorage = [];
// window.localStorage.setItem("projectList", JSON.stringify(projectListStorage));

// const todoListStorage = [];
// window.localStorage.setItem("todoList", JSON.stringify(todoListStorage));
