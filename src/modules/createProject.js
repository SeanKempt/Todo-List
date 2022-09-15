const createProject = (projectName) => {
  let todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };
  const getTodo = () => {
    return todos;
  };

  return {
    projectName,
    getTodo,
    addTodo,
  };
};
export { createProject };
