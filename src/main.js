// Import necessary modules
import { createProject } from "./project";
import { createTodo } from "./todo";
import { renderProjects, renderTodos } from "./render";

// Sample data for initial rendering
const savedProjects = localStorage.getItem("projects"); // Get saved projects from local storage

// Create a default project if no saved projects are available
const defaultProject = createProject("Default Project");
const projects = savedProjects ? JSON.parse(savedProjects) : [defaultProject];

// Function to save todos for the selected project to local storage
export const saveTodosToLocalStorage = (project) => {
  // Get the current list of projects from local storage
  const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

  // Find the index of the selected project in the list
  const projectIndex = savedProjects.findIndex((p) => p.name === project.name);

  // Update the todos for the selected project
  if (projectIndex !== -1) {
    savedProjects[projectIndex].todos = project.todos;
  }

  // Save the updated list of projects back to local storage
  localStorage.setItem("projects", JSON.stringify(savedProjects));
};

// Get the container for the list of projects
const projectListContainer = document.querySelector(".project-list");

// Add a click event listener to the project list container
projectListContainer.addEventListener("click", (event) => {
  // Find the nearest <li> (list item) element to the clicked element
  const clickedProjectListItem = event.target.closest("li");

  // Check if a valid list item was clicked
  if (clickedProjectListItem) {
    // Get the project index from the clicked list item's data attribute
    const clickedProjectIndex = clickedProjectListItem.dataset.projectIndex;

    // Update the selected project based on the clicked index
    selectedProject = projects[clickedProjectIndex];

    // Render the todos for the selected project
    renderTodos(selectedProject.todos, selectedProject);
  }
});

// Create sample todos
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

// Add the sample todos to the default project
defaultProject.todos.push(todo1, todo2);

// Get references to DOM elements for the project form
const addProjectBtn = document.querySelector("#add-project-btn");
const projectForm = document.querySelector("#project-form");
const projectTitleInput = document.querySelector("#project-title");
const projectCancelBtn = document.querySelector("#project-cancel");

// Get references to DOM elements for the todo form
const addTodoBtn = document.querySelector("#add-todo-btn");
const todoModal = document.querySelector(".todo-modal");
const todoCloseButton = document.querySelector(".todo-modal .close");
const todoModalForm = document.querySelector("#todo-form");
const todoTitleInput = document.querySelector("#todo-title");
const todoDescriptionInput = document.querySelector("#todo-description");
const todoDueDateInput = document.querySelector("#todo-dueDate");
const todoPriorityInput = document.querySelector("#todo-priority");
const overlay = document.querySelector(".overlay"); // Reference to the overlay element

// Declare a variable to keep track of the selected project
let selectedProject = defaultProject;

// Function to handle toggling the visibility of a form
const toggleForm = (formId) => {
  const form = document.querySelector(formId);
  form.classList.toggle("hidden");
};

// Event listener to open the project form
addProjectBtn.addEventListener("click", () => {
  console.log("Add Project button clicked");
  addProjectBtn.classList.toggle("hidden");
  toggleForm("#project-form");
});

// Event listener to handle form submission when adding a new project
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Project form submitted");

  // Get value from the form input
  const title = projectTitleInput.value;

  // Create a new project using the createProject function from './project'
  const newProject = createProject(title);

  // Add the new project to the projects array
  projects.push(newProject);

  console.log("Updated projects array:", projects);

  // Render the updated list of projects in the DOM
  renderProjects(projects);

  // Clear the form input
  projectTitleInput.value = "";

  // Hide the project form
  toggleForm("#project-form");
  addProjectBtn.classList.toggle("hidden");

  // Save updated projects array to local storage
  localStorage.setItem("projects", JSON.stringify(projects));
});

// Event listener for "Cancel" button in the project form
projectCancelBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  console.log("Cancel button clicked");
  // Hide the project form
  toggleForm("#project-form");
  addProjectBtn.classList.toggle("hidden");
});

// Event listener to open the todo modal form
addTodoBtn.addEventListener("click", () => {
  console.log("Add Todo button clicked");
  todoModal.style.display = "block";
  overlay.style.display = "block";
});

// Event listener to close the todo modal form
todoCloseButton.addEventListener("click", () => {
  console.log("Todo modal close button clicked");
  todoModal.style.display = "none";
  overlay.style.display = "none";
});

// Event listener to close the todo modal form when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === todoModal) {
    console.log("Clicked outside todo modal content");
    todoModal.style.display = "none";
    overlay.style.display = "none";
  }
});

// Event listener to handle form submission when adding a new todo to the selected project
todoModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Todo form submitted");

  // Get values from the todo form inputs
  const title = todoTitleInput.value;
  const description = todoDescriptionInput.value;
  const dueDate = todoDueDateInput.value;
  const priority = todoPriorityInput.value;

  // Create a new todo using the createTodo function from './todo'
  const newTodo = createTodo(title, description, dueDate, priority);

  // Add the new todo to the selected project instead of the default project
  selectedProject.todos.push(newTodo);

  console.log("Updated todos array:", selectedProject.todos);

  // Render the updated list of todos for the selected project in the DOM
  renderTodos(selectedProject.todos, selectedProject);

  // Clear the form inputs
  todoTitleInput.value = "";
  todoDescriptionInput.value = "";
  todoDueDateInput.value = "";
  todoPriorityInput.value = "high";

  // Hide the todo modal form
  todoModal.style.display = "none";
  overlay.style.display = "none";

  // Save updated todos array for the selected project to local storage
  saveTodosToLocalStorage(selectedProject);
});

// Event listener for "Cancel" button in the todo form
const todoCancelBtn = document.querySelector("#todo-cancel");
todoCancelBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  console.log("Todo form canceled");
  // Hide the todo modal form
  todoModal.style.display = "none";
  overlay.style.display = "none";
});

// Initial rendering of projects and todos
renderProjects(projects);
renderTodos(defaultProject.todos, defaultProject);
