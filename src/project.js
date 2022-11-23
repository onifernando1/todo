import { DomStuff } from "./dom";

const Project = (title) => {
  const toDoArray = [];

  const showToDos = () => {
    toDoArray.forEach((toDo) => {
      DomStuff.displaytoDo(toDo);
    });
  };

  return { title, toDoArray, showToDos };
};

export { Project };
