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

export { createProject };
