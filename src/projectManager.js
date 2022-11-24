import { DomStuff } from "./dom";
import { ViewProject } from "./view";
import { ToDoDom } from "./toDoDom";

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
        ViewProject.viewTitle(project);
        ToDoDom.newToDoForm();
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
