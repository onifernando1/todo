import { DomStuff } from "./dom";
import { ProjectManager } from "./projectManager";

const Project = (title) => {
  const toDoArray = [];
  const id = "";

  const showToDos = () => {
    toDoArray.forEach((toDo) => {
      DomStuff.displaytoDo(toDo);
    });
  };

  const createNewProject = function () {
    const newProjecTitle = document.getElementById("title").value;
    const newProject = Project(newProjecTitle);
    newProject.id = ProjectManager.projectId;
    ProjectManager.projectArray.push(newProject);
    ProjectManager.showAllProjects();
  };

  const createFormListener = function () {
    const newProjectForm = document.getElementById("new-project-form");
    newProjectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      createNewProject();
    });
  };

  const increaseProjectId = function () {
    ProjectManager.projectId += 1;
  };

  increaseProjectId();

  return { title, toDoArray, showToDos, createFormListener, id };
};

export { Project };
