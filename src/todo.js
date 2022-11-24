import { ProjectManager } from "./projectManager";
import { ViewProject } from "./view";

const ToDo = function (title, description, dueDate, priority) {
  const toDoStatus = "incomplete";
  let toDoid = 0;
  const projectId = "";

  const create = (title, description, dueDate, priority) => {
    newToDo = toDo(title, description, dueDate, priority);
  };

  const change = (elementToChange, newValue) => {
    this[elementToChange] = newValue;
  };

  const changeTDS = () => {
    toDostatus = completet;
  };

  const createTodo = function () {
    const todoTitle = document.getElementById("title").value;
    const todoDescription = document.getElementById("description").value;
    const todoDueDate = document.getElementById("dueDate").value;
    const todoPriority = document.getElementById("priority").value;
    const todoProjectId = document.getElementById("projectId").value;
    const newTodo = ToDo(todoTitle, todoDescription, todoDueDate, todoPriority);
    newTodo.projectId = todoProjectId;
    newTodo.id = toDoid;
    let parentProject = findProject(todoProjectId);
    parentProject.toDoArray.push(newTodo);
    console.log(parentProject);
    ViewProject.viewToDos(parentProject);
  };

  const findProject = function (todoProjectId) {
    let foundProject = "";
    ProjectManager.projectArray.forEach((project) => {
      if (project.id == todoProjectId) {
        foundProject = project;
      }
    });
    return foundProject;
  };

  const todoListener = function () {
    const todoForm = document.getElementById("new-todo-form");
    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      createTodo();
    });
  };

  const increaseToDoId = function () {
    toDoid += 1;
  };

  increaseToDoId();

  return {
    title,
    description,
    dueDate,
    priority,
    toDoStatus,
    create,
    change,
    toDoStatus,
    toDoid,
    projectId,
    todoListener,
  };
};

export { ToDo };
