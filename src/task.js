//const taskList = [];


const taskFactory = (taskName, description, date, prority) => {
    // this.taskName = taskName;
    // this.description = description;
   // this.date = date;
    // this.prority = prority;
    //const sayYo = () => {console.log("yo")};
    let myProject = "default first project"
    return { taskName, description, date, prority, myProject}
}


//const firstTask = taskFactory("Make toast", "put into the toaster", "20/03/2014", "high");

/**addTask(firstTask);
deleteTask(firstTask);

const addTask = (task) => {
    taskList.push(task);
}

const deleteTask = ({ taskName }) => {
    const newArray = taskList.map(task => {
        task.filter(prop => prop.taskName !== taskName);
    })
    return newArray;
}
*/
export { taskFactory }