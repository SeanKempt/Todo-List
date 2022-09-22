import { editTodoInLocalStorage, getTodoList } from "./localStorage";

//if i hit the checkbox on a todo item, strike through the text on the todo item that is displayed and change the object property complete to true

//pulls the object from the todolist array from local storage
//Adds todo complete class to the title of the todo item and gives it the strikethrough effect.
const markTodoComplete = function (todo) {
  const todoList = getTodoList();
  const todoId = todo.parentElement.dataset.id;
  const findObj = (obj) => obj.id == todoId;
  const object = todoList.find(findObj);
  if (object.complete === false) {
    todo.classList.add("todo-complete");
    editTodoInLocalStorage(todo, "complete", true);
  } else if (object.complete === true) {
    todo.classList.remove("todo-complete");
    editTodoInLocalStorage(todo, "complete", false);
  }
};

export { markTodoComplete };
