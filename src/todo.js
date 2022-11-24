import { ProjectManager } from "./projectManager";
import { ViewProject } from "./view";

const ToDo = function (title, description, dueDate, priority) {
  const toDoStatus = "incomplete";
  const projectId = "";
  let id = "";

  const create = (title, description, dueDate, priority) => {
    newToDo = toDo(title, description, dueDate, priority);
  };

  const change = (elementToChange, newValue) => {
    this[elementToChange] = newValue;
  };

  const changeTDS = () => {
    toDostatus = complete;
  };

  const createTodo = function () {
    const todoTitle = document.getElementById("title").value;
    const todoDescription = document.getElementById("description").value;
    const todoDueDate = document.getElementById("dueDate").value;
    const todoPriority = document.getElementById("priority").value;
    const todoProjectId = Number(document.getElementById("projectId").value);
    const newTodo = ToDo(todoTitle, todoDescription, todoDueDate, todoPriority);
    newTodo.projectId = todoProjectId;
    newTodo.id = increaseToDoId();
    // newTodo.id = ProjectManager.toDoid;
    let parentProject = findProject(todoProjectId);
    parentProject.toDoArray.push(newTodo);
    ViewProject.viewToDos(parentProject);
    deleteButtonListener(parentProject);
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

  const deleteTodo = function (id, parentProject) {
    let currentTodo = "";
    parentProject.toDoArray.forEach((todo) => {
      if (todo.id == id) {
        console.log("before length");
        console.log(parentProject.toDoArray.length);
        currentTodo = todo;
        parentProject.toDoArray = parentProject.toDoArray.filter(
          (item) => item !== currentTodo
        );
        console.log("after length ");
        console.log(parentProject.toDoArray.length);
      }
    });
    ViewProject.viewToDos(parentProject);
  };

  const deleteButtonListener = function (parentProject) {
    const deleteButtons = document.getElementsByClassName("delete");

    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", () => {
        let buttonclass = deleteButtons[i].className;
        buttonclass = buttonclass.split("");
        id = buttonclass[0];
        deleteTodo(id, parentProject);
      });
    }
  };

  const todoListener = function () {
    const todoForm = document.getElementById("new-todo-form");
    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      createTodo();
    });
  };

  const increaseToDoId = function () {
    ProjectManager.toDoId += 1;
    id = ProjectManager.toDoId;
    return id;
  };

  return {
    title,
    description,
    dueDate,
    priority,
    toDoStatus,
    create,
    change,
    toDoStatus,
    projectId,
    todoListener,
    id,
  };
};

export { ToDo };
