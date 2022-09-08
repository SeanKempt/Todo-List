let id = 0;
const createTodo = (title, description, dueDate, priority, notes) => {
  id++;
  let complete = false;
  let createTodoDom = function () {
    const main = document.getElementById("main-content");
    const div = document.createElement("div");
    const todoTitle = document.createElement("p");
    const todoDescription = document.createElement("p");
    const todoDueDate = document.createElement("p");
    const todoPriority = document.createElement("p");
    const todoNotes = document.createElement("p");
    main.appendChild(div);
    div.appendChild(todoTitle);
    div.appendChild(todoDescription);
    div.appendChild(todoDueDate);
    div.appendChild(todoPriority);
    div.appendChild(todoNotes);
    todoTitle.textContent = this.title;
    todoDescription.textContent = this.textContent;
    todoDueDate.textContent = this.dueDate;
    todoPriority.textContent = this.priority;
    todoNotes.textContent = this.notes;
    return main;
  };
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    id,
    complete,
    createTodoDom,
  };
};

export { createTodo };
