import {
  modalEvents,
  projectModalSubmitEvent,
  renderProjectsToDropDown,
  todoModalSubmitEvent,
} from "./modules/domChanges";
import { checkIfDataExists } from "./modules/localStorage";
import "../node_modules/normalize.css";
import { intialProject } from "./modules/createProject";

checkIfDataExists();
intialProject();
renderProjectsToDropDown();
modalEvents();
todoModalSubmitEvent();
projectModalSubmitEvent();
console.log(localStorage);
