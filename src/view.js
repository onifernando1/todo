import { DomStuff } from "./dom";
import { ToDoDom } from "./toDoDom";

const ViewProject = (() => {
  const viewTitle = function (project) {
    DomStuff.viewProject(project);
  };

  const viewToDos = function (project) {
    let array = project.toDoArray;
    console.log("vtd outer called");
    console.log(array);
    if (array != undefined) {
      ToDoDom.showAllTodos(array);
      console.log("tododom called");
    }
  };

  return { viewTitle, viewToDos };
})();

export { ViewProject };
