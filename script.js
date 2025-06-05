const taskbutton= document.querySelector(".TaskButton");
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