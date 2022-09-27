import { createProjectDom } from "./domChanges";
import { addToProjectListStorage } from "./localStorage";

const createProject = (projectName) => {
  let todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };
  const getTodo = () => {
    return todos;
  };

  return {
    projectName,
    getTodo,
    addTodo,
  };
};

const intialProject = function () {
  createProjectDom("Default");
  return addToProjectListStorage(createProject("Default"));
};

export { createProject, intialProject };
