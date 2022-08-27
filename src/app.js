import { createTodo } from "./modules/createTodo";
import { createProject } from "./modules/createProject";
import {
  addToTodoListStorage,
  addToProjectListStorage,
  clearLocalStorage,
} from "./modules/localStorage";

clearLocalStorage();
addToProjectListStorage(createProject("default", "none"));
addToProjectListStorage(createProject("Hello", "friends that say hello"));
addToTodoListStorage(
  createTodo(
    "HelloWorld",
    `this is a hello world statement`,
    `08/25/2022`,
    `High`,
    `This is dumb.`
  )
);

const codingLogic = createProject(
  `codeLogic`,
  `project to hold the application logic`
);

console.log(codingLogic);
console.log(localStorage);
console.log(codingLogic.getTodo());
