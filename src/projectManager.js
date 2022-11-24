import { DomStuff } from "./dom";
import { ViewProject } from "./view";

const ProjectManager = (() => {
  const projectArray = [];
  const projectId = 0;
  const toDoId = 0;

  const showAllProjects = () => {
    DomStuff.displayAllProjects(projectArray);
    ProjectManager.viewProjectListener();
  };

  const viewProjectListener = function () {
    projectArray.forEach((project) => {
      const viewButton = document.getElementsByClassName(
        `view-project-${project.id}`
      )[0];
      viewButton.addEventListener("click", () => {
        console.log("calledclick");
        ViewProject.view(project);
        console.log("clicked");
      });
    });
  };

  return {
    showAllProjects,
    projectArray,
    projectId,
    toDoId,
    viewProjectListener,
  };
})();

export { ProjectManager };
