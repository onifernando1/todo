import { DOM } from "./dom.js";

const project = function (title) {
  const toDoArray = [];

  const showToDos = () => {
    toDoArray.forEach((toDo) => {
      DomStuff.displaytoDo(toDo);
    });
  };

  return { title, toDoArray };
};

export { Project, showToDos };
