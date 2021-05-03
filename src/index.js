import  { taskFactory } from './task';
import  { projectFactory} from './project';
import {renderDom, renderProject, renderTask} from './domCreation';
import {renderHeader} from './header';

renderHeader();
renderDom();
const defaultProject = projectFactory("first project");
const firstTask = taskFactory("Make toast", "put into the toaster", "20/03/2014", "high");
const secondTask = taskFactory("rshgrshrs", "put into the toaster", "20/03/2014", "high");


const secondProject = projectFactory("second project");
console.log(defaultProject)
console.log(firstTask);
defaultProject.addTask(firstTask)
renderProject(defaultProject);
renderProject(secondProject);
defaultProject.addTask(secondTask)
console.log(defaultProject)
console.log(firstTask);
renderTask(firstTask);
renderTask(secondTask);