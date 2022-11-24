import { DomStuff } from "./dom";

const ViewProject = ((project) => {
  const viewTitle = function (project) {
    DomStuff.viewProject(project);
  };

  const viewToDos = function () {};

  return { viewTitle };
})();

export { ViewProject };
