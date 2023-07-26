import { createProject } from "./project";
import { createTodo } from "./todo";
import { renderProjects, renderTodos } from "./render";

// Get references to DOM elements
const addProjectBtn = document.querySelector("#add-project-btn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");
const modalForm = document.querySelector(".modal form");
const projectList = document.querySelector(".project-list");

// Event listener to open the modal form when "Add Project" button is clicked
addProjectBtn.addEventListener("click", (e) => {
  modal.style.display = "block";
});

// Event listener to close the modal form when the close button is clicked
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Event listener to close the modal form when the user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Event listener to handle form submission when the user adds a new project
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get values from the form inputs
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const dueDate = document.querySelector("#dueDate").value;
  const priority = document.querySelector("#priority").value;

  // Create a new project using the createProject function from './project'
  const newProject = createProject(title, description, dueDate, priority);

  // Add the new project to the projects array
  projects.push(newProject);

  console.log("Updated projects array:", projects);

  // Render the updated list of projects in the DOM
  renderProjects(projects);

  // Close the modal form after adding the project
  modal.style.display = "none";
});

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

// Initial rendering of projects and todos
renderProjects(projects);
renderTodos(defaultProject.todos);
