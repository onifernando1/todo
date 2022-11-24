import { DomStuff } from "./dom";
import { ToDoDom } from "./toDoDom";

const ViewProject = (() => {
  const viewTitle = function (project) {
    DomStuff.viewProject(project);
  };

  const viewToDos = function (project) {
    let array = project.toDoArray;
    if (array != undefined) {
      ToDoDom.showAllTodos(array);
    }
  };

  return { viewTitle, viewToDos };
})();

export { ViewProject };
