import {
  modalEvents,
  projectModalSubmitEvent,
  todoModalSubmitEvent,
} from "./modules/domChanges";
import { clearLocalStorage } from "./modules/localStorage";
import "../node_modules/normalize.css";

clearLocalStorage();
modalEvents();
todoModalSubmitEvent();
projectModalSubmitEvent();
console.log(localStorage);
