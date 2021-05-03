import {createProject} from './logic';

const listeners = () => {
    const addProject = document.querySelector('.add-project');
    const overlay = document.querySelector('.overlay');
    const projectWindow = document.querySelector('.project-window');

    addProject.addEventListener('click', () => {
        projectWindow.classList.remove('hide');
        overlay.classList.remove('hide');
    })

    const addTask = document.querySelector('.add-task');
    const taskWindow = document.querySelector('.task-window');
    addTask.addEventListener('click', () => {
        taskWindow.classList.remove('hide');
        overlay.classList.remove('hide');
    })

    const addProjectBtn = document.querySelector('.add-project-btn');
    addProjectBtn.addEventListener('click', () => {
        createProject(addProjectBtn.value);
    })
}



export { listeners }