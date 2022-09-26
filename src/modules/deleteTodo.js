import { addToTodoListStorage, getTodoList } from "./localStorage";

const removeTodo = function (index) {
  const array = getTodoList();
  array.splice(index, 1);
  window.localStorage.setItem("todoList", JSON.stringify(array));
};

export { removeTodo };
