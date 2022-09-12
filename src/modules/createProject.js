const createProject = (projectName, projectDescription) => {
  let todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };
  const getTodo = () => {
    return todos;
  };
  let createTodoProject = function () {
    const sidebar = document.getElementById("projects-container");
    const div = document.createElement("div");

    return sidebar;
  };
  return {
    projectName,
    projectDescription,
    getTodo,
    addTodo,
    createTodoProject,
  };
};
export { createProject };
