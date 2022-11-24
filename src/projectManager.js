import { DomStuff } from "./dom";

const ProjectManager = (() => {
  const projectArray = [];
  const projectId = 0;
  const toDoId = 0;

  const showAllProjects = () => {
    DomStuff.displayAllProjects(projectArray);
  };

  return { showAllProjects, projectArray, projectId };
})();

export { ProjectManager };
