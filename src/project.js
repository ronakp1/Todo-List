
const projectFactory = (projectName) => {
    const taskList = [];

    const addTask = (task) => {
        taskList.push(task);
    }

    const deleteTask = (task) => {
        console.log(task)
        let indexOfTask = taskList.indexOf(task);
        taskList.splice(indexOfTask,1)
        //taskList.filter(prop => prop.taskName !== taskName);
       // return newArray;
    }
    return { projectName, taskList, addTask, deleteTask }
}


export { projectFactory }
