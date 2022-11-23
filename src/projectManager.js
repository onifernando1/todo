import { DomStuff } from "./dom";

const ProjectManager = function () {
  const projectArray = [];

  const showAllProjects = function () {
    DomStuff.removeAllProjects;
    DomStuff.displayAllProjects(projectArray);
  };

  const create = function () {
    const newProjectForm = document.getElementById("new-project-form");
    newProjectForm.addEventListener("submit", (event) => {
      event.preventDefault;
    });
  };
};

export { ProjectManager, showAllProjects };
