const addToLocalStorage = (key, thing) => {
  if (thing !== String) {
    window.localStorage.setItem(key, JSON.stringify(thing));
  } else {
    window.localStorage.setItem(key, thing);
  }
};

const todoListStorage = [];
window.localStorage.setItem("todoList", JSON.stringify(todoListStorage));

const addTodoListStorage = function (todo) {
  let todoListStorageEntries = JSON.parse(localStorage.getItem("todoList"));
  if (todoListStorageEntries == null) todoListStorageEntries = [];
  todoListStorageEntries.push(todo);
  window.localStorage.setItem(
    "todoList",
    JSON.stringify(todoListStorageEntries)
  );
};

export { addToLocalStorage, addTodoListStorage };
