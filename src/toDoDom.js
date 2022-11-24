const ToDoDom = (() => {
  const newToDoForm = function () {
    const container = document.getElementsByClassName(
      "view-project-container"
    )[0];

    const newTodoFormContainer = document.createElement("div");
    newTodoFormContainer.className = "new-todo-form-container";
    container.appendChild(newTodoFormContainer);

    // //create form and id

    const todoForm = document.createElement("form");
    todoForm.id = "new-todo-form";

    const todoTitleLabel = document.createElement("label");
    todoTitleLabel.htmlFor = "title";
    todoTitleLabel.innerText = "Title";

    const todoTitle = document.createElement("input");
    todoTitle.type = "text";
    todoTitle.id = "title";
    todoTitle.name = "title";

    const todoDescriptionLabel = document.createElement("label");
    todoDescriptionLabel.htmlFor = "description";
    todoDescriptionLabel.innerText = "Description";

    const todoDescription = document.createElement("input");
    todoDescription.type = "text";
    todoDescription.id = "description";
    todoDescription.name = "description";

    const todoDueDateLabel = document.createElement("label");
    todoDueDateLabel.htmlFor = "dueDate";
    todoDueDateLabel.innerText = "Due Date";

    const todoDueDate = document.createElement("input");
    todoDueDate.type = "text";
    todoDueDate.id = "dueDate";
    todoDueDate.name = "dueDate";

    const todoPriorityLabel = document.createElement("label");
    todoPriorityLabel.htmlFor = "priority";
    todoPriorityLabel.innerText = "Priority";

    const todoPriority = document.createElement("input");
    todoPriority.type = "text";
    todoPriority.id = "priority";
    todoPriority.name = "priority";

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.id = "submit";
    submit.name = "submit";

    todoForm.appendChild(todoTitleLabel);
    todoForm.appendChild(todoTitle);

    todoForm.appendChild(todoDescriptionLabel);
    todoForm.appendChild(todoDescription);

    todoForm.appendChild(todoDueDateLabel);
    todoForm.appendChild(todoDueDate);

    todoForm.appendChild(todoPriorityLabel);
    todoForm.appendChild(todoPriority);

    todoForm.appendChild(submit);

    newTodoFormContainer.appendChild(todoForm);
  };

  const assignProjectId = function (projectId) {
    const todoForm = document.getElementById("new-todo-form");
    const hiddenProjectId = document.createElement("input");
    hiddenProjectId.type = "hidden";
    hiddenProjectId.id = "projectId";
    hiddenProjectId.name = "projectId";
    hiddenProjectId.value = projectId;
    todoForm.appendChild(hiddenProjectId);
  };

  return { newToDoForm, assignProjectId };
})();

export { ToDoDom };
