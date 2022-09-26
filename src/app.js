import {
  modalEvents,
  projectModalSubmitEvent,
  todoModalSubmitEvent,
} from "./modules/domChanges";
import { checkIfDataExists, clearLocalStorage } from "./modules/localStorage";
import "../node_modules/normalize.css";

clearLocalStorage();
checkIfDataExists();
modalEvents();
todoModalSubmitEvent();
projectModalSubmitEvent();
console.log(localStorage);
