import { ToDo } from "./todo"; // todelete
import { Project } from "./project";

const project = Project("ABC");
const toDo = ToDo("abc", "abc", "abc", "abc");
project.toDoArray.push(toDo);
project.showToDos();
project.createFormListener();
