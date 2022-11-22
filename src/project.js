const project = function (title) {
  toDoArray = [];

  showToDos(){
      toDoArray.forEach(toDo =>{
        DOM.display(toDo)
      })
  }

  return { title, toDoArray };
};

export { project };
