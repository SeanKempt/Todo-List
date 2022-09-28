import {
  modalEvents,
  projectModalSubmitEvent,
  renderProjectsToDropDown,
  todoModalSubmitEvent,
} from "./modules/domChanges";
import { checkIfDataExists } from "./modules/localStorage";
import "../node_modules/normalize.css";

checkIfDataExists();
renderProjectsToDropDown();
modalEvents();
todoModalSubmitEvent();
projectModalSubmitEvent();
console.log(localStorage);
