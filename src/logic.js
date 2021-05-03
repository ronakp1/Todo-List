import  { taskFactory } from './task';
import  { projectFactory} from './project';
import {renderDom, renderProject, renderTask} from './domCreation';

const createProject = (nameValue) => {
    const project = projectFactory(nameValue);
    renderProject(project);
}

export {createProject}