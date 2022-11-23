import { DomStuff } from "./dom";

const ProjectManager = (() => {
  const projectArray = [];

  const showAllProjects = () => {
    DomStuff.displayAllProjects(projectArray);
  };

  return { showAllProjects, projectArray };
})();

export { ProjectManager };
