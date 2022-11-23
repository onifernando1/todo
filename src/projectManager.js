import { DomStuff } from "./dom";

const ProjectManager = (() => {
  const projectArray = [];

  const showAllProjects = () => {
    DomStuff.removeAllProjects();
    DomStuff.displayAllProjects(projectArray);
  };

  return { showAllProjects, projectArray };
})();

export { ProjectManager };
