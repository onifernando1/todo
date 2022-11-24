import { ToDo } from "./todo"; // todelete
import { Project } from "./project";
import { ProjectManager } from "./projectManager";
import { DomStuff } from "./dom";
import { storageAvailable } from "./localStorage";

let project = Project("ABC");
project = localStorage.getItem("parentProject");
project = JSON.parse(project);
const newProject = Project(project.title);
newProject.id = project.id;
newProject.toDoArray = project.toDoArray;
console.log(project);
if (project == undefined) {
  project = Project("ABC");
}
ProjectManager.projectArray.push(newProject);
DomStuff.createProjectsContainer();
DomStuff.createProjectForm();
ProjectManager.showAllProjects();
newProject.createFormListener();
