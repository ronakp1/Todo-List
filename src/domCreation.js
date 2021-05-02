const createOwnElement = (type, className, content) => {
    const element = document.createElement(type);
    if (className !== null) element.classList.add(className);
    if (content !== null) element.innerHTML = content;
    return element;
}

const projectList = document.querySelector('.project-list');
//const taskList = document.querySelector('.task-list');
const toDoContainer = document.querySelector('.todo');

const renderProject = (defaultProjects) => {
    const projectH1 = createOwnElement('h1', null, 'Projects');
    projectList.appendChild(projectH1);
    const project = createOwnElement('button', 'project', `${defaultProjects.projectName}`);
    projectList.appendChild(project);
}

const renderTask = (task1) => {
    const taskContainer = createOwnElement('div', 'taskContainer', null);
    toDoContainer.appendChild(taskContainer);
    const tasksH1 = createOwnElement('h1', null, 'Tasks');
    taskContainer.appendChild(tasksH1);
    //toDoContainer.insertBefore(taskContainer, taskList);
    //const taskHolder = createOwnElement('div', 'taskHolder', null);
    //taskList.appendChild(taskHolder);
    const taskList = createOwnElement('div', 'taskList', null);
    taskContainer.appendChild(taskList);
    const taskItem = createOwnElement('div', 'task-item', null);
    taskList.appendChild(taskItem);

    const taskName = createOwnElement('div', 'task-name', `${task1.taskName} - `);
    taskItem.appendChild(taskName);

    const taskDescription = createOwnElement('div', 'task-description', task1.description);
    taskItem.appendChild(taskDescription);
    
    const taskDate = createOwnElement('div', 'task-date', task1.date);
    taskItem.appendChild(taskDate);
}


export { renderProject, renderTask, createOwnElement }