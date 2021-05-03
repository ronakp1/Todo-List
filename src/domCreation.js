import {renderOverlay,renderPopUP} from './addProjectPopUp';
import {listeners} from './addEventListeners';

const createOwnElement = (type, className, content) => {
    const element = document.createElement(type);
    if (className !== null) element.classList.add(className);
    if (content !== null) element.innerHTML = content;
    return element;
}

const projectList = document.querySelector('.project-list');
//const taskList = document.querySelector('.task-list');
const toDoContainer = document.querySelector('.todo');
const projects = document.querySelector('.projects');


const renderDom = () => {
    const taskContainer = createOwnElement('div', 'taskContainer', null);
    toDoContainer.appendChild(taskContainer);
    const tasksH1 = createOwnElement('h1', null, 'Tasks');
    taskContainer.appendChild(tasksH1);
    //const taskContainer = document.querySelector('.taskContainer');
    const taskList = createOwnElement('div', 'taskList', null);
    taskContainer.appendChild(taskList);

    const projectH1 = createOwnElement('h1', null, 'Projects');
    projectList.appendChild(projectH1);
    
    const addProjectContainer = createOwnElement('div', 'add-project-container', null);
    projects.appendChild(addProjectContainer);
    const addProject = createOwnElement('div', 'add-project', '+ Add Project');
    addProjectContainer.appendChild(addProject);

    const addTask = createOwnElement('div', 'add-task', '+ Add Task');
    taskContainer.appendChild(addTask);
    
    renderOverlay();
    renderPopUP();
    listeners();
}

const renderProject = (defaultProjects) => {
   // const projectH1 = createOwnElement('h1', null, 'Projects');
   // projectList.appendChild(projectH1);
    const project = createOwnElement('div', 'project', `${defaultProjects.projectName}`);
    projectList.appendChild(project);

    


    //const addProject = createOwnElement('div', 'add-project', '+ Add Project');
    //projectList.appendChild(addProject);
}

const renderTask = (task1) => {
    /*const taskContainer = createOwnElement('div', 'taskContainer', null);
    toDoContainer.appendChild(taskContainer);
    const tasksH1 = createOwnElement('h1', null, 'Tasks');
    taskContainer.appendChild(tasksH1);*/
    //toDoContainer.insertBefore(taskContainer, taskList);
    //const taskHolder = createOwnElement('div', 'taskHolder', null);
    //taskList.appendChild(taskHolder);

    //const taskContainer = document.querySelector('.taskContainer');
   // const taskList = createOwnElement('div', 'taskList', null);
   // taskContainer.appendChild(taskList);

   const taskList = document.querySelector('.taskList');
    const taskItem = createOwnElement('div', 'task-item', null);
    taskList.appendChild(taskItem);

    const taskCheckBox = createOwnElement('div', 'checkbox', null);
    taskItem.appendChild(taskCheckBox);

    const taskName = createOwnElement('div', 'task-name', `${task1.taskName} - `);
    taskItem.appendChild(taskName);

    const taskDescription = createOwnElement('div', 'task-description', task1.description);
    taskItem.appendChild(taskDescription);
    
    const taskDate = createOwnElement('div', 'task-date', task1.date);
    taskItem.appendChild(taskDate);

    const editTask =createOwnElement('div', 'edit-task', 'Edit');
    taskItem.appendChild(editTask);

    const deleteTask =createOwnElement('div', 'delete-task', 'Delete');
    taskItem.appendChild(deleteTask);

}


export { renderDom, renderProject, renderTask, createOwnElement }