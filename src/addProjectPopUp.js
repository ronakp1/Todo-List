import { createOwnElement } from './domCreation';


const renderPopUP = () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hide');
    const taskWindow = createOwnElement('div', 'task-window', null);
    overlay.appendChild(taskWindow);
    taskWindow.classList.add('hide');

    const taskNameInputLabel = createOwnElement('label', null, 'Task Name');
    taskNameInputLabel.setAttribute('for', 'task-name-input');
    taskWindow.appendChild(taskNameInputLabel);

    const taskNameInput = createOwnElement('input', null, null);
    taskNameInput.id = 'task-name-input';
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('placeholder', 'Enter Task Name');
    taskWindow.appendChild(taskNameInput);

    const taskDescriptionInputLabel = createOwnElement('label', null, 'Task Description');
    taskDescriptionInputLabel.setAttribute('for', 'task-description-input');
    taskWindow.appendChild(taskDescriptionInputLabel);

    const taskDescriptionInput = createOwnElement('input', null, null);
    taskDescriptionInput.id = 'task-description-input';
    taskDescriptionInput.setAttribute('type', 'text');
    taskDescriptionInput.setAttribute('placeholder', 'Enter Task Description');
    taskWindow.appendChild(taskDescriptionInput);

    const taskDateInputLabel = createOwnElement('label', null, 'Task Date');
    taskDateInputLabel.setAttribute('for', 'task-date-input');
    taskWindow.appendChild(taskDateInputLabel);

    const taskDateInput = createOwnElement('input', null, null);
    taskDateInput.id = 'task-date-input';
    taskDateInput.setAttribute('type', 'date');
    taskDateInput.setAttribute('placeholder', 'Enter Date Description');
    taskWindow.appendChild(taskDateInput);

    const submitBtn = createOwnElement('button', null, 'Add Task');
    taskWindow.appendChild(submitBtn);
}


const renderOverlay = () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hide');
    const projectWindow = createOwnElement('div', 'project-window', null);
    projectWindow.classList.add('hide');
    overlay.appendChild(projectWindow);


    const projectNameInputLabel = createOwnElement('label', 'name-input', 'Project Name');
    projectNameInputLabel.setAttribute('for', 'name-input');
    projectWindow.appendChild(projectNameInputLabel);
    const projectNameInput = createOwnElement('input', 'name-input', null);

    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('placeholder', 'Enter Project Name');
    projectWindow.appendChild(projectNameInput);

    const buttonContainer = createOwnElement('div', 'button-container', null);
    projectWindow.appendChild(buttonContainer);
    const addProjectBtn = createOwnElement('button', 'add-project-btn', 'Add Project');
    buttonContainer.appendChild(addProjectBtn);
    const cancelBtn = createOwnElement('button', null, 'Cancel');
    buttonContainer.appendChild(cancelBtn);

}

export { renderOverlay, renderPopUP }