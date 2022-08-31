let id = 0;
const createTodo = (title, description, dueDate, priority, notes) => {
  id++;
  let complete = false;
  return { title, description, dueDate, priority, notes, id, complete };
};

const createTodoDom = () => {
  const main = document.getElementById("main-content");
  const div = document.createElement("div");
};

export { createTodo };
