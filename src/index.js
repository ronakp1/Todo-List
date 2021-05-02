import  { taskFactory } from './task';
import  { projectFactory} from './project';
import {renderProject, renderTask} from './domCreation';
import {renderHeader} from './header';

renderHeader();

const defaultProject = projectFactory("first project");
const firstTask = taskFactory("Make toast", "put into the toaster", "20/03/2014", "high");
const secondTask = taskFactory("rshgrshrs", "put into the toaster", "20/03/2014", "high");

console.log(defaultProject)
console.log(firstTask);
defaultProject.addTask(firstTask)
renderProject(defaultProject);
defaultProject.addTask(secondTask)
//defaultProject.deleteTask(firstTask)
console.log(defaultProject)
console.log(firstTask);
renderTask(firstTask);
/*const second = projectFactory("second project");
const secondTask = taskFactory("Make toast", "put into the toaster", "20/03/2014", "high");

console.log(secondTask)
console.log(second);
second.addTask(secondTask)
second.deleteTask(secondTask)
console.log(second)
console.log(secondTask);*/

//console.log(firstTask);
//addTask(firstTask);
//console.log(firstTask)
//console.log(taskList);
//deleteTask(firstTask);