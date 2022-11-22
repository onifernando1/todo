const toDo = function (title, description, dueDate, priority) {

    toDoStatus = incomplete

    create(title, description, dueDate, priority){
        newToDo = toDo(title, description, dueDate, priority)
    }


    change(elementToChange, newValue){
        this[elementToChange] = newValue
    }






  return { title, description, dueDate, priority, toDoStatus };
};
