export const renderProjects = (projects) => {
  const projectListContainer = document.querySelector(".project-list");
  projectListContainer.innerHTML = ""; // Clear existing list to avoid duplicates

  projects.forEach((project, index) => {
    const listItem = document.createElement("li");
    const listIcon = document.createElement("i");
    listIcon.classList.add("fa-solid", "fa-list-ul", "fa-1x", "list-icon"); // Font Awesome classes for the list-ul icon
    listItem.appendChild(listIcon);
    
    const projectName = document.createElement("span");
    projectName.textContent = project.name; // Set the text content of the list item to the project name
    listItem.appendChild(projectName);

    listItem.dataset.projectIndex = index; // Add a custom 'data-project-index' attribute to the list item
    projectListContainer.appendChild(listItem); // Append the list item to the project list container
  });
};


export const renderTodos = (todos, selectedProject) => {
  const todoListContainer = document.querySelector(".todo-list");
  todoListContainer.innerHTML = ""; // Clear existing list to avoid duplicates

  // Create a div to display the project name
  const projectInfo = document.createElement("div");
  projectInfo.classList.add("project-title");
  projectInfo.textContent = selectedProject.name;
  todoListContainer.appendChild(projectInfo); // Append the project info div to the todo list container

  todos.forEach((todo) => {
    // Create a list item to hold todo information
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    // Create a div for the title
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("todo-title");
    titleDiv.textContent = todo.title;
    listItem.appendChild(titleDiv);

    // Create a div for the rest of the information
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("todo-info");

    // Create a paragraph element for the description
    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = `Description: ${todo.description}`;
    infoDiv.appendChild(descriptionPara);

    // Create a paragraph element for the due date
    const dueDatePara = document.createElement("p");
    dueDatePara.textContent = `Due Date: ${todo.dueDate}`;
    infoDiv.appendChild(dueDatePara);

    // Create a paragraph element for the priority
    const priorityPara = document.createElement("p");
    priorityPara.textContent = `Priority: ${todo.priority}`;
    infoDiv.appendChild(priorityPara);

    listItem.appendChild(infoDiv);

    // Create a Font Awesome icon for the garbage can and adding the delete logic to it
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt",'fa-1x'); // Font Awesome classes for the trash icon
    deleteIcon.addEventListener("click", () => handleTodoDelete(todo));
    listItem.appendChild(deleteIcon);

    // Create a Font Awesome icon for the edit (pencil) icon and adding editing logic to it
    const editIcon = document.createElement("i");
    editIcon.classList.add('fa-solid', 'fa-pen-to-square','fa-1x'); // Font Awesome classes for the pen-to-square icon
    editIcon.addEventListener("click", () => handleTodoEdit(todo));
    listItem.appendChild(editIcon);

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
