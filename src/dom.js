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

  const displayProject = (project) => {
    // const projectsContainer = document.getElementById("projects-container");
    // const createProjectsDiv = document.createElement("div");
    // createProjectsDiv.className = "inner-projects-container";
  };

  const removeAllProjects = () => {
    const projectsContainer = document.getElementById("projects-container");
  };

  const createProjectContainer = () => {
    const projectsContainer = document.getElementById("projects-container");
    const createProjectsDiv = document.createElement("div");
    createProjectsDiv.className = "inner-projects-container";
    projectsContainer.appendChild(createProjectsDiv);
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

  return { displaytoDo };
})();

export { DomStuff };
