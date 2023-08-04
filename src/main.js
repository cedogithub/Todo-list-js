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
const projectForm = document.querySelector("#project-form");
const projectTitleInput = document.querySelector("#project-title");
const projectCancelBtn = document.querySelector("#project-cancel");

// Get references to DOM elements for the todo form
const addTodoBtn = document.querySelector("#add-todo-btn");
const todoForm = document.querySelector("#todo-form");
const todoTitleInput = document.querySelector("#todo-title");
const todoDescriptionInput = document.querySelector("#todo-description");
const todoDueDateInput = document.querySelector("#todo-dueDate");
const todoPriorityInput = document.querySelector("#todo-priority");

// Declare a variable to keep track of the selected project
let selectedProject = defaultProject;

// Function to handle toggling the visibility of a form
const toggleForm = (formId) => {
  const form = document.querySelector(formId);
  form.classList.toggle("hidden");
};

// Event listener to open the project form when "Add Project" button is clicked
addProjectBtn.addEventListener("click", () => {
  console.log("Add Project button clicked");
  addProjectBtn.classList.toggle("hidden");
  toggleForm("#project-form");
});

// Event listener to handle form submission when the user adds a new project
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
  });
  
// Event listener for "Cancel" button in the project form
projectCancelBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  console.log("Cancel button clicked");
  // Hide the project form
  toggleForm("#project-form");
  addProjectBtn.classList.toggle("hidden");
});

// Event listener to open the todo form when "Add Todo" button is clicked
addTodoBtn.addEventListener("click", () => {
  console.log("Add Todo button clicked");
  toggleForm("#todo-form");
});

// Event listener to handle form submission when the user adds a new todo to the selected project
todoForm.addEventListener("submit", (e) => {
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

  // Hide the todo form
  toggleForm("#todo-form");
});

// Initial rendering of projects and todos
renderProjects(projects);
renderTodos(defaultProject.todos, defaultProject);
