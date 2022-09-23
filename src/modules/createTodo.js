let id = 0;
const createTodo = (title, description, dueDate, priority, notes, project) => {
  id++;
  let complete = false;
  project = "Default";

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    id,
    complete,
    project,
  };
};

export { createTodo };
