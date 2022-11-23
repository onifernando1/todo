import { DomStuff } from "./dom";

const ProjectManager = function () {
  const projectArray = [];

  const showAllProjects = function () {
    projectArray.forEach((project) => {
      DomStuff.removeAllProjects;
      DomStuff.createProjectContainer;
      DomStuff.displayProject(project);
    });
  };
};

export { ProjectManager };
