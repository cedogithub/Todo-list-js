import { createProject } from './project';
import { createTodo } from './todo';
import { renderProjects, renderTodos } from './render';

const addProjectBtn = document.querySelector('#add-project-btn');

addProjectBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('click')

})

const defaultProject = createProject('Default Project');
const projects = [defaultProject];

const todo1 = createTodo('Finish Project', 'Finish the todo list project', '2023-07-31', 'High');
const todo2 = createTodo('Study JavaScript', 'Study for at least 1 hour', '2023-07-25', 'Medium');
defaultProject.todos.push(todo1, todo2);

renderProjects(projects);
renderTodos(defaultProject.todos);
