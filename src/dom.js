import { create } from "file-entry-cache";

const DomStuff = (() => {
  const _displayTitle = (toDo, newToDoDiv) => {
    const newToDoTitle = document.createElement("div");
    newToDoTitle.innerHTML = toDo.title;
    newToDoTitle.className = "todo-title";
    newToDoDiv.appendChild(newToDoTitle);
  };

  const _displayDescription = (toDo, newToDoDiv) => {
    const newToDoDescription = document.createElement("div");
    newToDoDescription.innerHTML = toDo.description;
    newToDoDescription.className = "todo-description";
    newToDoDiv.appendChild(newToDoDescription);
  };

  const _displayDueDate = (toDo, newToDoDiv) => {
    const newToDoDueDate = document.createElement("div");
    newToDoDueDate.innerHTML = toDo.dueDate;
    newToDoDueDate.className = "todo-duedate";
    newToDoDiv.appendChild(newToDoDueDate);
  };

  const _displayPriority = (toDo, newToDoDiv) => {
    const newToDoPriority = document.createElement("div");
    newToDoPriority.innerHTML = toDo.priority;
    newToDoPriority.className = "todo-priority";
    newToDoDiv.appendChild(newToDoPriority);
  };

  const _displayIndividualProject = (project) => {
    project.forEach((project) => {
      const projectsContainer = document.getElementById("projects-container");
      const newProjectContainer = document.createElement("div");
      newProjectContainer.className = "individual-project-container";
      newProjectContainer.innerHTML = project.title;
      projectsContainer.appendChild(newProjectContainer);
    });
  };

  const _removeAllProjects = () => {
    const projectsContainer = document.getElementById("projects-container");
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.lastChild);
    }
  };

  const _createProjectContainer = () => {
    const projectsContainer = document.getElementById("projects-container");
    const createProjectsDiv = document.createElement("div");
    createProjectsDiv.className = "inner-projects-container";
    projectsContainer.appendChild(createProjectsDiv);
  };

  const displayAllProjects = () => {
    _removeAllProjects();
    _createProjectContainer();
    _displayIndividualProject();
  };

  const displaytoDo = (toDo) => {
    const content = document.getElementById("content");
    const newToDoDiv = document.createElement("div");

    content.appendChild(newToDoDiv);

    _displayTitle(toDo, newToDoDiv);

    _displayDescription(toDo, newToDoDiv);

    _displayDueDate(toDo, newToDoDiv);

    _displayPriority(toDo, newToDoDiv);
  };

  return { displaytoDo, displayAllProjects };
})();

export { DomStuff };
