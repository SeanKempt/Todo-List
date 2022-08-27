/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
const createProject = (projectName, projectDescription) => {
  let todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };
  const getTodo = () => {
    return todos;
  };
  return { projectName, projectDescription, getTodo, addTodo };
};




/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
let id = 0;
const createTodo = (title, description, dueDate, priority, notes) => {
  id++;
  let complete = false;
  return { title, description, dueDate, priority, notes, id, complete };
};




/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "addToProjectListStorage": () => (/* binding */ addToProjectListStorage),
/* harmony export */   "addToTodoListStorage": () => (/* binding */ addToTodoListStorage),
/* harmony export */   "clearLocalStorage": () => (/* binding */ clearLocalStorage)
/* harmony export */ });
const addToLocalStorage = (key, thing) => {
  if (thing !== String) {
    window.localStorage.setItem(key, JSON.stringify(thing));
  } else {
    window.localStorage.setItem(key, thing);
  }
};

const addToTodoListStorage = function (todo) {
  let todoListStorageEntries = JSON.parse(localStorage.getItem("todoList"));
  if (todoListStorageEntries == null) todoListStorageEntries = [];
  todoListStorageEntries.push(todo);
  window.localStorage.setItem(
    "todoList",
    JSON.stringify(todoListStorageEntries)
  );
};

const addToProjectListStorage = function (project) {
  let projectListStorageEntries = JSON.parse(
    localStorage.getItem("projectList")
  );
  if (projectListStorageEntries == null) projectListStorageEntries = [];
  projectListStorageEntries.push(project);
  window.localStorage.setItem(
    "projectList",
    JSON.stringify(projectListStorageEntries)
  );
};

const clearLocalStorage = function () {
  window.localStorage.clear();
};



// const projectListStorage = [];
// window.localStorage.setItem("projectList", JSON.stringify(projectListStorage));

// const todoListStorage = [];
// window.localStorage.setItem("todoList", JSON.stringify(todoListStorage));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createTodo */ "./src/modules/createTodo.js");
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createProject */ "./src/modules/createProject.js");
/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localStorage */ "./src/modules/localStorage.js");




(0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__.clearLocalStorage)();
(0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__.addToProjectListStorage)((0,_modules_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)("default", "none"));
(0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__.addToProjectListStorage)((0,_modules_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)("Hello", "friends that say hello"));
(0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__.addToTodoListStorage)(
  (0,_modules_createTodo__WEBPACK_IMPORTED_MODULE_0__.createTodo)(
    "HelloWorld",
    `this is a hello world statement`,
    `08/25/2022`,
    `High`,
    `This is dumb.`
  )
);

const codingLogic = (0,_modules_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)(
  `codeLogic`,
  `project to hold the application logic`
);

console.log(codingLogic);
console.log(localStorage);
console.log(codingLogic.getTodo());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7QUNYekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHRCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDTTtBQUt4QjtBQUNoQztBQUNBLHdFQUFpQjtBQUNqQiw4RUFBdUIsQ0FBQyxxRUFBYTtBQUNyQyw4RUFBdUIsQ0FBQyxxRUFBYTtBQUNyQywyRUFBb0I7QUFDcEIsRUFBRSwrREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUVBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSA9PiB7XHJcbiAgbGV0IHRvZG9zID0gW107XHJcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0VG9kbyA9ICgpID0+IHtcclxuICAgIHJldHVybiB0b2RvcztcclxuICB9O1xyXG4gIHJldHVybiB7IHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIGdldFRvZG8sIGFkZFRvZG8gfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTtcclxuIiwibGV0IGlkID0gMDtcclxuY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xyXG4gIGlkKys7XHJcbiAgbGV0IGNvbXBsZXRlID0gZmFsc2U7XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlkLCBjb21wbGV0ZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlVG9kbyB9O1xyXG4iLCJjb25zdCBhZGRUb0xvY2FsU3RvcmFnZSA9IChrZXksIHRoaW5nKSA9PiB7XHJcbiAgaWYgKHRoaW5nICE9PSBTdHJpbmcpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHRoaW5nKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHRoaW5nKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb1RvZG9MaXN0U3RvcmFnZSA9IGZ1bmN0aW9uICh0b2RvKSB7XHJcbiAgbGV0IHRvZG9MaXN0U3RvcmFnZUVudHJpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xyXG4gIGlmICh0b2RvTGlzdFN0b3JhZ2VFbnRyaWVzID09IG51bGwpIHRvZG9MaXN0U3RvcmFnZUVudHJpZXMgPSBbXTtcclxuICB0b2RvTGlzdFN0b3JhZ2VFbnRyaWVzLnB1c2godG9kbyk7XHJcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgXCJ0b2RvTGlzdFwiLFxyXG4gICAgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3RTdG9yYWdlRW50cmllcylcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVG9Qcm9qZWN0TGlzdFN0b3JhZ2UgPSBmdW5jdGlvbiAocHJvamVjdCkge1xyXG4gIGxldCBwcm9qZWN0TGlzdFN0b3JhZ2VFbnRyaWVzID0gSlNPTi5wYXJzZShcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIilcclxuICApO1xyXG4gIGlmIChwcm9qZWN0TGlzdFN0b3JhZ2VFbnRyaWVzID09IG51bGwpIHByb2plY3RMaXN0U3RvcmFnZUVudHJpZXMgPSBbXTtcclxuICBwcm9qZWN0TGlzdFN0b3JhZ2VFbnRyaWVzLnB1c2gocHJvamVjdCk7XHJcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgXCJwcm9qZWN0TGlzdFwiLFxyXG4gICAgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3RTdG9yYWdlRW50cmllcylcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgY2xlYXJMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBhZGRUb0xvY2FsU3RvcmFnZSxcclxuICBhZGRUb1RvZG9MaXN0U3RvcmFnZSxcclxuICBhZGRUb1Byb2plY3RMaXN0U3RvcmFnZSxcclxuICBjbGVhckxvY2FsU3RvcmFnZSxcclxufTtcclxuXHJcbi8vIGNvbnN0IHByb2plY3RMaXN0U3RvcmFnZSA9IFtdO1xyXG4vLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdFN0b3JhZ2UpKTtcclxuXHJcbi8vIGNvbnN0IHRvZG9MaXN0U3RvcmFnZSA9IFtdO1xyXG4vLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdFN0b3JhZ2UpKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGVUb2RvXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZVByb2plY3RcIjtcclxuaW1wb3J0IHtcclxuICBhZGRUb1RvZG9MaXN0U3RvcmFnZSxcclxuICBhZGRUb1Byb2plY3RMaXN0U3RvcmFnZSxcclxuICBjbGVhckxvY2FsU3RvcmFnZSxcclxufSBmcm9tIFwiLi9tb2R1bGVzL2xvY2FsU3RvcmFnZVwiO1xyXG5cclxuY2xlYXJMb2NhbFN0b3JhZ2UoKTtcclxuYWRkVG9Qcm9qZWN0TGlzdFN0b3JhZ2UoY3JlYXRlUHJvamVjdChcImRlZmF1bHRcIiwgXCJub25lXCIpKTtcclxuYWRkVG9Qcm9qZWN0TGlzdFN0b3JhZ2UoY3JlYXRlUHJvamVjdChcIkhlbGxvXCIsIFwiZnJpZW5kcyB0aGF0IHNheSBoZWxsb1wiKSk7XHJcbmFkZFRvVG9kb0xpc3RTdG9yYWdlKFxyXG4gIGNyZWF0ZVRvZG8oXHJcbiAgICBcIkhlbGxvV29ybGRcIixcclxuICAgIGB0aGlzIGlzIGEgaGVsbG8gd29ybGQgc3RhdGVtZW50YCxcclxuICAgIGAwOC8yNS8yMDIyYCxcclxuICAgIGBIaWdoYCxcclxuICAgIGBUaGlzIGlzIGR1bWIuYFxyXG4gIClcclxuKTtcclxuXHJcbmNvbnN0IGNvZGluZ0xvZ2ljID0gY3JlYXRlUHJvamVjdChcclxuICBgY29kZUxvZ2ljYCxcclxuICBgcHJvamVjdCB0byBob2xkIHRoZSBhcHBsaWNhdGlvbiBsb2dpY2BcclxuKTtcclxuXHJcbmNvbnNvbGUubG9nKGNvZGluZ0xvZ2ljKTtcclxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxuY29uc29sZS5sb2coY29kaW5nTG9naWMuZ2V0VG9kbygpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9