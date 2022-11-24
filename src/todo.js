const ToDo = function (title, description, dueDate, priority) {
  const toDoStatus = "incomplete";
  const toDoid = "";

  const create = (title, description, dueDate, priority) => {
    newToDo = toDo(title, description, dueDate, priority);
  };

  const change = (elementToChange, newValue) => {
    this[elementToChange] = newValue;
  };

  const changeTDS = () => {
    toDostatus = completet;
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
    toDoid,
  };
};

export { ToDo };
