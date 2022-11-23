import { DomStuff } from "./dom";

const ProjectManager = function () {
  const projectArray = [];

  const showAllProjects = function () {
    DomStuff.removeAllProjects;
    DomStuff.displayAllProjects(projectArray);
  };

  const create = function () {};
};

export { ProjectManager, showAllProjects };
