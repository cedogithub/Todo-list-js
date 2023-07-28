// render.js
export const renderProjects = (projects) => {
    const projectListContainer = document.querySelector('.project-list');
    projectListContainer.innerHTML = ''; // Clear existing list to avoid duplicates
  
    projects.forEach((project, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = project.name; // Set the text content of the list item to the project name
      listItem.dataset.projectIndex = index; // Add a custom 'data-project-index' attribute to the list item
      projectListContainer.appendChild(listItem); // Append the list item to the project list container
    });
  };
  
export const renderTodos = (todos, selectedProject) => {
    const todoListContainer = document.querySelector('.todo-list');
    todoListContainer.innerHTML = ''; // Clear existing list to avoid duplicates
  
    // Create a div to display the project name
    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-title');
    projectInfo.textContent = selectedProject.name;
    todoListContainer.appendChild(projectInfo); // Append the project info div to the todo list container
  
    todos.forEach((todo) => {
      const listItem = document.createElement('li');
      const todoInfo = document.createElement('div');
  
      // Display the todo details for each task
      todoInfo.textContent = `Title: ${todo.title}, Description: ${todo.description}, Due Date: ${todo.dueDate}, Priority: ${todo.priority}`;
      listItem.appendChild(todoInfo);
      todoListContainer.appendChild(listItem);
    });
  };
  
      