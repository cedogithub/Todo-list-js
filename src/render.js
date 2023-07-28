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
      // Create a list item to hold todo information
      const listItem = document.createElement('li');
      const todoInfo = document.createElement('div');
      todoInfo.textContent = `Title: ${todo.title}, Description: ${todo.description}, Due Date: ${todo.dueDate}, Priority: ${todo.priority}`;
      listItem.appendChild(todoInfo);
  
      // Create a button for deleting the todo
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', () => handleTodoDelete(todo));
      listItem.appendChild(deleteButton);
  
      // Create a button for editing the todo
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-button');
      editButton.addEventListener('click', () => handleTodoEdit(todo));
      listItem.appendChild(editButton);
  
      // Append the todo item with buttons to the todo list container
      todoListContainer.appendChild(listItem);
  
      // Function to handle todo deletion
      const handleTodoDelete = (todo) => {
        console.log(`Deleting todo: ${todo.title}`);
        // Use the filter method to remove the todo from the todos array
        const updatedTodos = todos.filter((item) => item !== todo);
        // Re-render the todos to reflect the updated array
        renderTodos(updatedTodos, selectedProject);
      };
  
      // Function to handle todo editing (currently does not contain implementation)
      const handleTodoEdit = (todo) => {
        console.log(`Editing todo: ${todo.title}`);
        // Implement the logic to edit the todo here
      };
    });
  };
  