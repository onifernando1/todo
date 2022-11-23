import { DomStuff } from "./dom";
import { ProjectManager } from "./projectManager";

const Project = (title) => {
  const toDoArray = [];

  const showToDos = () => {
    toDoArray.forEach((toDo) => {
      DomStuff.displaytoDo(toDo);
    });
  };

  const createNewProject = function () {
    const newProjecTitle = document.getElementById("title").value;
    const newProject = Project(newProjecTitle);
    return newProject;
  };

  const createFormListener = function () {
    const newProjectForm = document.getElementById("new-project-form");
    newProjectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newProject = createNewProject();
      ProjectManager.projectArray.push(newProject);
    });
  };

  return { title, toDoArray, showToDos, createFormListener };
};

export { Project };
