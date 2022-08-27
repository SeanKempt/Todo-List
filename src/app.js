import { createTodo } from "./modules/createTodo";
import { createProject } from "./modules/createProject";
import {
  addToLocalStorage,
  addTodoListStorage,
} from "./modules/localStorage.js";

const helloWorld = createTodo(
  "HelloWorld",
  `this is a hello world statement`,
  `08/25/2022`,
  `High`,
  `This is dumb.`
);

const welloWorld = createTodo(
  "welloWorld",
  `this is a hello world statement`,
  `08/25/2022`,
  `High`,
  `This is dumb.`
);

const codingLogic = createProject(
  `codeLogic`,
  `project to hold the application logic`
);

console.log(helloWorld);
console.log(codingLogic);
console.log(localStorage);

codingLogic.addTodo(helloWorld);

console.log(codingLogic.getTodo());

addTodoListStorage(helloWorld);
addTodoListStorage(welloWorld);
