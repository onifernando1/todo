import { ToDo } from "./todo"; // todelete
import { Project } from "./project";
import { ProjectManager } from "./projectManager";
import { DomStuff } from "./dom";

const project = Project("ABC");
const toDo = ToDo("abc", "abc", "abc", "abc");
DomStuff.createProjectsContainer();

project.toDoArray.push(toDo);
project.showToDos();
ProjectManager.showAllProjects();
project.createFormListener();
