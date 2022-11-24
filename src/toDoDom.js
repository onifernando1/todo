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

  const _createTodoContainer = function () {
    const content = document.getElementById("content");
    const todoContainer = document.createElement("div");
    todoContainer.className = "todo-container";
    content.appendChild(todoContainer);
  };

  const _deleteTodoContainer = function () {
    const todoContainer = document.getElementsByClassName("todo-container")[0];
    const content = document.getElementById("content");
    if (todoContainer) {
      content.removeChild(todoContainer);
    }
  };

  const _deleteToDoButton = function (todo) {
    console.log(todo);
    console.log("above");
    const todoContainer = document.getElementsByClassName("todo-container")[0];
    const deleteButton = document.createElement("button");
    deleteButton.className = `${todo.id} delete`;
    deleteButton.innerHTML = "delete";
    todoContainer.appendChild(deleteButton);
  };

  const _showTodos = function (todoArray) {
    const todoContainer = document.getElementsByClassName("todo-container")[0];

    todoArray.forEach((todo) => {
      _displayTitle(todo, todoContainer);

      _displayDescription(todo, todoContainer);

      _displayDueDate(todo, todoContainer);

      _displayPriority(todo, todoContainer);

      _deleteToDoButton(todo);
    });
  };

  const showAllTodos = function (todoArray) {
    _deleteTodoContainer();
    _createTodoContainer();
    _showTodos(todoArray);
  };

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

  // const displaytoDo = (toDo) => {
  //   const content = document.getElementById("content");
  //   const newToDoDiv = document.createElement("div");

  //   content.appendChild(newToDoDiv);

  //   _displayTitle(toDo, newToDoDiv);

  //   _displayDescription(toDo, newToDoDiv);

  //   _displayDueDate(toDo, newToDoDiv);

  //   _displayPriority(toDo, newToDoDiv);
  // };

  const assignProjectId = function (projectId) {
    const todoForm = document.getElementById("new-todo-form");
    const hiddenProjectId = document.createElement("input");
    hiddenProjectId.type = "hidden";
    hiddenProjectId.id = "projectId";
    hiddenProjectId.name = "projectId";
    hiddenProjectId.value = projectId;
    todoForm.appendChild(hiddenProjectId);
  };

  return { newToDoForm, assignProjectId, showAllTodos };
})();

export { ToDoDom };
