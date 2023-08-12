import { format } from "date-fns";
import { saveTodosToLocalStorage } from "./main"; // Update the path if needed

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
  localStorage.setItem("projects", JSON.stringify(projects));
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

    // Apply priority classes to the todo item based on the priority value
    switch (todo.priority.toLowerCase()) {
      case "high":
        listItem.classList.add("high-priority");
        break;
      case "medium":
        listItem.classList.add("medium-priority");
        break;
      case "low":
        listItem.classList.add("low-priority");
        break;
      default:
        // No specific class for other priority values
        break;
    }

    // Create a container div for the title and info sections
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    // Create a div for the title
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("todo-title");
    titleDiv.textContent = todo.title;
    todoContainer.appendChild(titleDiv);

    // Create a div for the rest of the information
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("todo-info");

    // Create a paragraph element for the description
    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = `Description: ${todo.description}`;
    infoDiv.appendChild(descriptionPara);

    // Create a paragraph element for the due date and use the format function
    const dueDatePara = document.createElement("p");
    const formattedDueDate = format(new Date(todo.dueDate), "MMM d, yyyy");
    dueDatePara.textContent = `Due Date: ${formattedDueDate}`;
    infoDiv.appendChild(dueDatePara);

    // Create a paragraph element for the priority
    const priorityPara = document.createElement("p");
    priorityPara.innerHTML = `Priority: <span class="priority">${todo.priority}</span>`;
    infoDiv.appendChild(priorityPara);

    // Append the infoDiv to the todoContainer
    todoContainer.appendChild(infoDiv);

    // Append the todoContainer to the list item
    listItem.appendChild(todoContainer);

    // Create a Font Awesome icon for the garbage can and adding the delete logic to it
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt", "fa-1x"); // Font Awesome classes for the trash icon
    deleteIcon.addEventListener("click", () => handleTodoDelete(todo));
    listItem.appendChild(deleteIcon);

    // // Create a Font Awesome icon for the edit (pencil) icon and adding editing logic to it
    // const editIcon = document.createElement("i");
    // editIcon.classList.add('fa-solid', 'fa-pen-to-square','fa-1x'); // Font Awesome classes for the pen-to-square icon
    // editIcon.addEventListener("click", () => handleTodoEdit(todo));
    // listItem.appendChild(editIcon);

    // Append the todo item with buttons to the todo list container
    todoListContainer.appendChild(listItem);

    // Function to handle todo deletion
    const handleTodoDelete = (todo) => {
      console.log(`Deleting todo: ${todo.title}`);

      // Use the filter method to remove the todo from the todos array
      const updatedTodos = todos.filter((item) => item !== todo);

      // Update the selected project's todos
      selectedProject.todos = updatedTodos;

      // Re-render the todos to reflect the updated array
      renderTodos(updatedTodos, selectedProject);

      // Save the updated todos array for the selected project to local storage
      saveTodosToLocalStorage(selectedProject);
    };

    // // Function to handle todo editing (currently does not contain implementation)
    // const handleTodoEdit = (todo) => {
    //   console.log(`Editing todo: ${todo.title}`);
    //   // Implement the logic to edit the todo here

    // };
  });
};
