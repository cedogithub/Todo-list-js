export const renderProjects = (projects) => {
    const projectListContainer = document.querySelector('.project-list');
    projectListContainer.innerHTML = ''; // Clear existing list to avoid duplicates
  
    projects.forEach((project) => {
      const listItem = document.createElement('li');
      listItem.textContent = project.name; // Set the text content of the list item to the project name
      projectListContainer.appendChild(listItem); // Append the list item to the project list container
    });
  };
  
  export const renderTodos = (todos) => {
    const todoListContainer = document.querySelector('.todo-list');
    todoListContainer.innerHTML = ''; // Clear existing list to avoid duplicates
  
    todos.forEach((todo) => {
      const listItem = document.createElement('li');
      const todoInfo = document.createElement('div');
      todoInfo.textContent = `Title: ${todo.title}, Description: ${todo.description}, Due Date: ${todo.dueDate}, Priority: ${todo.priority}`;
      listItem.appendChild(todoInfo); // Append todo info to the list item
      todoListContainer.appendChild(listItem); // Append the list item to the todo list container
    });
  };
  