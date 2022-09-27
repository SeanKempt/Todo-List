import {
  modalEvents,
  projectModalSubmitEvent,
  todoModalSubmitEvent,
} from "./modules/domChanges";
import { checkIfDataExists, clearLocalStorage } from "./modules/localStorage";
import "../node_modules/normalize.css";
import { intialProject } from "./modules/createProject";

checkIfDataExists();
intialProject();
modalEvents();
todoModalSubmitEvent();
projectModalSubmitEvent();
console.log(localStorage);
