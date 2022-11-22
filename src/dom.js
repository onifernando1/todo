const DomStuff (() => {


    const displaytoDo(toDo) = function() => {
        let newToDoDiv = document.createElement("div")

        _displayTitle(toDo,newToDoDiv)

        _displayDescription(toDo,newToDoDiv)

        _displayDueDate(toDo,newToDoDiv)

        _displayPriority(toDo,newToDoDiv)

    }

    const _displayTitle = (toDo,newToDoDiv ) => {
        let newToDoTitle = createElement("div")
        newToDoTitle.innerHTML = toDo.title
        newToDoTitle.className = "todo-title"
        newToDoDiv.appendChild(newToDoTitle)
    }

    const _displayDescription = (toDo,newToDoDiv)=> {

        let newToDoDescription = createElement("div")
        newToDoDescription.innerHTML = toDo.description
        newToDoDescription.className = "todo-description"
        newToDoDiv.appendChild(newToDoDescription)
    }
    
    const _displayDueDate = (toDo,newToDoDiv)=> {

        let newToDoDueDate = createElement("div")
        newToDoDueDate.innerHTML = toDo.dueDate
        newToDoDueDate.className = "todo-duedate"
        newToDoDiv.appendChild(newToDoDueDate)

    }

      
    const _displayPriority = (toDo,newToDoDiv)=> {

         
        let newToDoPriority = createElement("div")
        newToDoPriority.innerHTML = toDo.priority
        newToDoPriority.className = "todo-priority"
        newToDoDiv.appendChild(newToDoPriority)
    }

    
    return { displaytoDo }


})()

export { DomStuff }