import { createTodo } from "./modules/createTodo";
import { createProject } from "./modules/createProject";

const helloWorld = createTodo(
  "HelloWorld",
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

codingLogic.addTodo(helloWorld);

console.log(codingLogic.getTodo());
