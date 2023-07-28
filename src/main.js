import { createProject } from "./project";
import { createTodo } from "./todo";
import { renderProjects, renderTodos } from "./render";

// Sample data for initial rendering
const defaultProject = createProject("Default Project");
const projects = [defaultProject];

const todo1 = createTodo(
  "Finish Project",
  "Finish the todo list project",
  "2023-07-31",
  "High"
);
const todo2 = createTodo(
  "Study JavaScript",
  "Study for at least 1 hour",
  "2023-07-25",
  "Medium"
);
defaultProject.todos.push(todo1, todo2);

// Get references to DOM elements for the project form
const addProjectBtn = document.querySelector("#add-project-btn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal .close");
const modalForm = document.querySelector(".modal form");

// Get references to DOM elements for the todo form
const addTodoBtn = document.querySelector("#add-todo-btn");
const todoModal = document.querySelector(".todos .modal");
const todoCloseButton = document.querySelector(".todos .modal .close");
const todoModalForm = document.querySelector(".todos .modal form");

// Declare a variable to keep track of the selected project
let selectedProject = defaultProject;

// Function to handle the click event on project list items
const handleProjectClick = (event) => {
  // Check if the clicked element is a project list item
  if (event.target.tagName === 'LI') {
    const projectIndex = event.target.dataset.projectIndex;
    selectedProject = projects[projectIndex]; // Set the selected project

    // Render the todos for the selected project
    renderTodos(selectedProject.todos, selectedProject);
  }
};

// Add event listener to the project list container
const projectListContainer = document.querySelector('.project-list');
projectListContainer.addEventListener('click', handleProjectClick);

// Event listener to open the modal form when "Add Project" button is clicked
addProjectBtn.addEventListener("click", () => {
  console.log("Add Project button clicked");
  modal.style.display = "block";
});

// Event listener to close the modal form when the close button is clicked
closeButton.addEventListener("click", () => {
  console.log("Close button clicked");
  modal.style.display = "none";
});

// Event listener to close the modal form when the user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    console.log("Clicked outside modal content");
    modal.style.display = "none";
  }
});

// Event listener to handle form submission when the user adds a new project
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Project form submitted");

  // Get values from the form inputs
  const title = document.querySelector("#project-title").value;

  // Create a new project using the createProject function from './project'
  const newProject = createProject(title);

  // Add the new project to the projects array
  projects.push(newProject);

  console.log("Updated projects array:", projects);

  // Render the updated list of projects in the DOM
  renderProjects(projects);

  // Close the modal form after adding the project
  modal.style.display = "none";
});

// Event listener to open the todo modal form when "Add Todo" button is clicked
addTodoBtn.addEventListener("click", () => {
  console.log("Add Todo button clicked");
  todoModal.style.display = "block";
});

// Event listener to close the todo modal form when the close button is clicked
todoCloseButton.addEventListener("click", () => {
  console.log("Todo modal close button clicked");
  todoModal.style.display = "none";
});

// Event listener to close the todo modal form when the user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === todoModal) {
    console.log("Clicked outside todo modal content");
    todoModal.style.display = "none";
  }
});

// Event listener to handle form submission when the user adds a new todo to the selected project
todoModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Todo form submitted");

  // Get values from the todo form inputs
  const title = document.querySelector("#todo-title").value;
  const description = document.querySelector("#todo-description").value;
  const dueDate = document.querySelector("#todo-dueDate").value;
  const priority = document.querySelector("#todo-priority").value;

  // Create a new todo using the createTodo function from './todo'
  const newTodo = createTodo(title, description, dueDate, priority);

  // Add the new todo to the selected project instead of the default project
  selectedProject.todos.push(newTodo);

  console.log("Updated todos array:", selectedProject.todos);

  // Render the updated list of todos for the selected project in the DOM
  renderTodos(selectedProject.todos, selectedProject);

  // Close the todo modal form after adding the todo
  todoModal.style.display = "none";
});

// Initial rendering of projects and todos
renderProjects(projects);
renderTodos(defaultProject.todos, defaultProject);
