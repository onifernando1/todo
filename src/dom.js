const DomStuff = (() => {
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
    _removeAllProjects();
    _createProjectContainer();
    _displayIndividualProject(projectArray);
  };

  const createProjectForm = function () {
    //create form  container
    const content = document.getElementById("content");
    const newProjectFormContainer = document.createElement("div");
    newProjectFormContainer.className = "new-project-form-container";
    content.appendChild(newProjectFormContainer);

    //create form and id
    const projectForm = document.createElement("form");
    projectForm.id = "new-project-form";
    const projectTitle = document.createElement("input");
    projectTitle.type = "text";
    projectTitle.id = "title";
    projectTitle.name = "title";

    const projectTitleLabel = document.createElement("label");
    projectTitleLabel.htmlFor = "title";
    projectTitleLabel.innerText = "New Project Title";

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.id = "submit";
    submit.name = "submit";
    // submit.innerText = "Create Project";

    projectForm.appendChild(projectTitleLabel);
    projectForm.appendChild(projectTitle);
    projectForm.appendChild(submit);

    newProjectFormContainer.appendChild(projectForm);
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
    // displaytoDo,
    displayAllProjects,
    viewProject,
    createProjectsContainer,
    createProjectForm,
  };
})();

export { DomStuff };
