let id = 0;
const createTodo = (title, description, dueDate, priority, notes) => {
  id++;
  let complete = false;

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    id,
    complete,
  };
};

export { createTodo };
