const addToLocalStorage = (key, thing) => {
  if (thing !== String) {
    window.localStorage.setItem(key, JSON.stringify(thing));
  } else {
    window.localStorage.setItem(key, thing);
  }
};

const addToTodoListStorage = function (todo) {
  let todoListStorageEntries = JSON.parse(localStorage.getItem("todoList"));
  if (todoListStorageEntries == null) todoListStorageEntries = [];
  todoListStorageEntries.push(todo);
  window.localStorage.setItem(
    "todoList",
    JSON.stringify(todoListStorageEntries)
  );
};

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

const clearLocalStorage = function () {
  window.localStorage.clear();
};

export {
  addToLocalStorage,
  addToTodoListStorage,
  addToProjectListStorage,
  clearLocalStorage,
};

// const projectListStorage = [];
// window.localStorage.setItem("projectList", JSON.stringify(projectListStorage));

// const todoListStorage = [];
// window.localStorage.setItem("todoList", JSON.stringify(todoListStorage));