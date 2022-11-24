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

  const _displayIndividualProject = (projectArray) => {
    projectArray.forEach((project) => {
      const innerProjectsContainer = document.getElementById(
        "inner-projects-container"
      );
      const newProjectContainer = document.createElement("div");
      newProjectContainer.className = "individual-project-container";
      const projectTitle = document.createElement("div");
      projectTitle.className = "project-title";
      projectTitle.innerText = project.title;

      // add view project button
      const viewProject = document.createElement("button");
      viewProject.className = `view-project-${project.id}`;
      viewProject.textContent = "View project";
      newProjectContainer.appendChild(viewProject);
      newProjectContainer.appendChild(projectTitle);
      innerProjectsContainer.appendChild(newProjectContainer);
    });
  };

  const _removeAllProjects = () => {
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer != null) {
      while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.lastChild);
      }
    }
  };

  const _createProjectContainer = () => {
    // const content = document.getElementById("content");
    const projectsContainer = document.getElementById("projects-container");
    const createProjectsDiv = document.createElement("div");
    createProjectsDiv.id = "inner-projects-container";
    projectsContainer.appendChild(createProjectsDiv);
    // content.appendChild(projectsContainer);
  };

  const _removeAllContent = function () {
    const content = document.getElementById("content");
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
  };

  const createProjectsContainer = function () {
    const content = document.getElementById("content");
    const projectsContainer = document.createElement("div");
    projectsContainer.id = "projects-container";
    content.appendChild(projectsContainer);
  };

  const displayAllProjects = (projectArray) => {
    const projectsContainer = document.createElement("div");
    console.log(projectsContainer);
    _removeAllProjects();
    _createProjectContainer();
    _displayIndividualProject(projectArray);
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

  const viewProject = function (project) {
    _removeAllContent();

    // generate viewprojectcontainer
    const viewProjectContainer = document.createElement("div");
    viewProjectContainer.className = "view-project-container";
    content.appendChild(viewProjectContainer);

    // add project title

    const title = document.createElement("div");
    title.className = "view-project-title";
    title.innerText = project.title;
    viewProjectContainer.appendChild(title);
  };

  return {
    displaytoDo,
    displayAllProjects,
    viewProject,
    createProjectsContainer,
  };
})();

export { DomStuff };
