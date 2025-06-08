const addtaskimage = document.getElementById("TaskAddImage");
const projectdialog = document.getElementById("ProjectDialogBox");
const projectbutton = document.getElementById("ProjectButton");
const projectclosebutton = document.getElementById("ProjectButtonClose");
const projectname = document.getElementById("ProjectName");


// Opens project dialog window.
addtaskimage.addEventListener("click" ,()=>{
    projectname.value = `Project ${projectLibrary.length +1}`;
    projectdialog.showModal();
});

//stores project list
projectbutton.addEventListener("click", (event)=>{
    event.preventDefault();

    addProject(projectname.value);
    UpdateDisplay();
    projectdialog.close();
});

projectclosebutton.addEventListener("click" ,(event) =>{
    event.preventDefault();
    projectdialog.close();
});







//ALL projects library
const projectLibrary = [];

// Class that creates project.
class Project {
    static id = 0;

    constructor(projectName) {
        this.id = `Project-${++Project.id}`;
        this.projectName = projectName;
        this.tasks = [];
    }
}

//Add project to library
function addProject(projectName){
    if (projectName === "") return null;

    const project = new Project(projectName);
    projectLibrary.push(project);

    return project;
}

//Show project library
const projectlist = document.querySelector("nav ul");

function UpdateDisplay(){
    projectlist.innerHTML="";

    projectLibrary.forEach(project => {
        const li=document.createElement('li');
        li.setAttribute("data-class", project.id)

        const projectDiv = document.createElement("div");
        projectDiv.className = "each-project-div";
        projectDiv.textContent = project.projectName;

        const deletebutton = document.createElement("button");
        deletebutton.className = "delete-project";
        deletebutton.textContent = "×";
        
        li.appendChild(projectDiv);
        li.appendChild(deletebutton);
        projectlist.appendChild(li);
    });
}


//Task section
const taskButton = document.querySelector(".TaskButton");
const taskDialog = document.getElementById("TaskDialogBox");
const addTaskBtn = document.getElementById("AddTaskButton");
const cancelButton= document.getElementById("CancelButton");
const taskName = document.getElementById("TaskName");
const taskDate = document.getElementById("TaskDate");
const taskPriority = document.getElementById("TaskPriority");
const taskDescription = document.getElementById("TaskDescription");


//Open Task dialog box
taskButton.addEventListener("click" ,()=>{
    taskDialog.showModal();
});

addTaskBtn.addEventListener("click" ,(event)=>{
    event.preventDefault();

    addTask(taskName.value);
    UpdateDisplay();
    taskDialog.close();
});

cancelButton.addEventListener("click",(event)=>{
    event.preventDefault();
    taskDialog.close();
});

const taskLibrary =[];

class Task {
    static id=0;

    constructor(TaskName,Date,Description,Priority) {
        this.id = `Task-${++Task.id}`;
        this.TaskName = TaskName;
        this.TaskDate = Date;
        this.Priority = Priority;
        this.Description = Description;
    }
}

function addTask(taskName){
    if (taskName === "") return null;

        const task = new Task (taskName);
        taskLibrary.push(task);

        return task;
}






