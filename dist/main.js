(()=>{"use strict";const e=e=>{const t=document.getElementById("content"),n=document.createElement("div");t.appendChild(n),((e,t)=>{const n=document.createElement("div");n.innerHTML=e.title,n.className="todo-title",t.appendChild(n)})(e,n),((e,t)=>{const n=document.createElement("div");n.innerHTML=e.description,n.className="todo-description",t.appendChild(n)})(e,n),((e,t)=>{const n=document.createElement("div");n.innerHTML=e.dueDate,n.className="todo-duedate",t.appendChild(n)})(e,n),((e,t)=>{const n=document.createElement("div");n.innerHTML=e.priority,n.className="todo-priority",t.appendChild(n)})(e,n)},t=e=>{(()=>{const e=document.getElementById("projects-container");for(;e.firstChild;)e.removeChild(e.lastChild)})(),(()=>{const e=document.getElementById("projects-container"),t=document.createElement("div");t.className="inner-projects-container",e.appendChild(t)})(),(e=>{e.forEach((e=>{const t=document.getElementById("projects-container"),n=document.createElement("div");n.className="individual-project-container",n.innerHTML=e.title,t.appendChild(n)}))})(e)},n=(()=>{const e=[];return{showAllProjects:()=>{t(e)},projectArray:e}})(),o=t=>{const c=[];return{title:t,toDoArray:c,showToDos:()=>{c.forEach((t=>{e(t)}))},createFormListener:function(){document.getElementById("new-project-form").addEventListener("submit",(e=>{e.preventDefault(),function(){const e=document.getElementById("title").value,t=o(e);console.log(n.projectArray),n.projectArray.push(t),n.showAllProjects()}()}))}}},c=o("ABC"),r=function(e,t,n,o){const c="incomplete";return{title:"abc",description:"abc",dueDate:"abc",priority:"abc",toDoStatus:c,create:(e,t,n,o)=>{newToDo=toDo(e,t,n,o)},change:(e,t)=>{this[e]=t},toDoStatus:c}}();c.toDoArray.push(r),c.showToDos(),n.showAllProjects(),c.createFormListener()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsRUFBaUJDLEtBQy9CQyxLQUFLRixHQUFtQkMsQ0FBUSxFQWVoQ0wsYUFFSixDSXBCYU8sR0FDYjFCLEVBQVFNLFVBQVVXLEtBQUssR0FDdkJqQixFQUFRTyxZQUNSSixFQUFlQyxrQkFDZkosRUFBUVEsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb0RvID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgdG9Eb1N0YXR1cyA9IFwiaW5jb21wbGV0ZVwiO1xuXG4gIGNvbnN0IGNyZWF0ZSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbmV3VG9EbyA9IHRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlID0gKGVsZW1lbnRUb0NoYW5nZSwgbmV3VmFsdWUpID0+IHtcbiAgICB0aGlzW2VsZW1lbnRUb0NoYW5nZV0gPSBuZXdWYWx1ZTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VURFMgPSAoKSA9PiB7XG4gICAgdG9Eb3N0YXR1cyA9IGNvbXBsZXRldDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgdG9Eb1N0YXR1cyxcbiAgICBjcmVhdGUsXG4gICAgY2hhbmdlLFxuICAgIHRvRG9TdGF0dXMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBUb0RvIH07XG4iLCJjb25zdCBEb21TdHVmZiA9ICgoKSA9PiB7XG4gIGNvbnN0IF9kaXNwbGF5VGl0bGUgPSAodG9EbywgbmV3VG9Eb0RpdikgPT4ge1xuICAgIGNvbnN0IG5ld1RvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9Eb1RpdGxlLmlubmVySFRNTCA9IHRvRG8udGl0bGU7XG4gICAgbmV3VG9Eb1RpdGxlLmNsYXNzTmFtZSA9IFwidG9kby10aXRsZVwiO1xuICAgIG5ld1RvRG9EaXYuYXBwZW5kQ2hpbGQobmV3VG9Eb1RpdGxlKTtcbiAgfTtcblxuICBjb25zdCBfZGlzcGxheURlc2NyaXB0aW9uID0gKHRvRG8sIG5ld1RvRG9EaXYpID0+IHtcbiAgICBjb25zdCBuZXdUb0RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvRG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0b0RvLmRlc2NyaXB0aW9uO1xuICAgIG5ld1RvRG9EZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInRvZG8tZGVzY3JpcHRpb25cIjtcbiAgICBuZXdUb0RvRGl2LmFwcGVuZENoaWxkKG5ld1RvRG9EZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgY29uc3QgX2Rpc3BsYXlEdWVEYXRlID0gKHRvRG8sIG5ld1RvRG9EaXYpID0+IHtcbiAgICBjb25zdCBuZXdUb0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9Eb0R1ZURhdGUuaW5uZXJIVE1MID0gdG9Eby5kdWVEYXRlO1xuICAgIG5ld1RvRG9EdWVEYXRlLmNsYXNzTmFtZSA9IFwidG9kby1kdWVkYXRlXCI7XG4gICAgbmV3VG9Eb0Rpdi5hcHBlbmRDaGlsZChuZXdUb0RvRHVlRGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgX2Rpc3BsYXlQcmlvcml0eSA9ICh0b0RvLCBuZXdUb0RvRGl2KSA9PiB7XG4gICAgY29uc3QgbmV3VG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb0RvUHJpb3JpdHkuaW5uZXJIVE1MID0gdG9Eby5wcmlvcml0eTtcbiAgICBuZXdUb0RvUHJpb3JpdHkuY2xhc3NOYW1lID0gXCJ0b2RvLXByaW9yaXR5XCI7XG4gICAgbmV3VG9Eb0Rpdi5hcHBlbmRDaGlsZChuZXdUb0RvUHJpb3JpdHkpO1xuICB9O1xuXG4gIGNvbnN0IF9kaXNwbGF5SW5kaXZpZHVhbFByb2plY3QgPSAocHJvamVjdEFycmF5KSA9PiB7XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbmRpdmlkdWFsLXByb2plY3QtY29udGFpbmVyXCI7XG4gICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBfcmVtb3ZlQWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICB3aGlsZSAocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdHNDb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX2NyZWF0ZVByb2plY3RDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3JlYXRlUHJvamVjdHNEaXYuY2xhc3NOYW1lID0gXCJpbm5lci1wcm9qZWN0cy1jb250YWluZXJcIjtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0c0Rpdik7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUFsbFByb2plY3RzID0gKHByb2plY3RBcnJheSkgPT4ge1xuICAgIF9yZW1vdmVBbGxQcm9qZWN0cygpO1xuICAgIF9jcmVhdGVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgX2Rpc3BsYXlJbmRpdmlkdWFsUHJvamVjdChwcm9qZWN0QXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXl0b0RvID0gKHRvRG8pID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IG5ld1RvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdUb0RvRGl2KTtcblxuICAgIF9kaXNwbGF5VGl0bGUodG9EbywgbmV3VG9Eb0Rpdik7XG5cbiAgICBfZGlzcGxheURlc2NyaXB0aW9uKHRvRG8sIG5ld1RvRG9EaXYpO1xuXG4gICAgX2Rpc3BsYXlEdWVEYXRlKHRvRG8sIG5ld1RvRG9EaXYpO1xuXG4gICAgX2Rpc3BsYXlQcmlvcml0eSh0b0RvLCBuZXdUb0RvRGl2KTtcbiAgfTtcblxuICByZXR1cm4geyBkaXNwbGF5dG9EbywgZGlzcGxheUFsbFByb2plY3RzIH07XG59KSgpO1xuXG5leHBvcnQgeyBEb21TdHVmZiB9O1xuIiwiaW1wb3J0IHsgRG9tU3R1ZmYgfSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgUHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICBjb25zdCBzaG93QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgRG9tU3R1ZmYuZGlzcGxheUFsbFByb2plY3RzKHByb2plY3RBcnJheSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2hvd0FsbFByb2plY3RzLCBwcm9qZWN0QXJyYXkgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFByb2plY3RNYW5hZ2VyIH07XG4iLCJpbXBvcnQgeyBEb21TdHVmZiB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgUHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuXG4gIGNvbnN0IHNob3dUb0RvcyA9ICgpID0+IHtcbiAgICB0b0RvQXJyYXkuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgRG9tU3R1ZmYuZGlzcGxheXRvRG8odG9Ebyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWNUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QobmV3UHJvamVjVGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKFByb2plY3RNYW5hZ2VyLnByb2plY3RBcnJheSk7XG4gICAgUHJvamVjdE1hbmFnZXIucHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgUHJvamVjdE1hbmFnZXIuc2hvd0FsbFByb2plY3RzKCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRm9ybUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHRpdGxlLCB0b0RvQXJyYXksIHNob3dUb0RvcywgY3JlYXRlRm9ybUxpc3RlbmVyIH07XG59O1xuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9kb1wiOyAvLyB0b2RlbGV0ZVxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcblxuY29uc3QgcHJvamVjdCA9IFByb2plY3QoXCJBQkNcIik7XG5jb25zdCB0b0RvID0gVG9EbyhcImFiY1wiLCBcImFiY1wiLCBcImFiY1wiLCBcImFiY1wiKTtcbnByb2plY3QudG9Eb0FycmF5LnB1c2godG9Ebyk7XG5wcm9qZWN0LnNob3dUb0RvcygpO1xuUHJvamVjdE1hbmFnZXIuc2hvd0FsbFByb2plY3RzKCk7XG5wcm9qZWN0LmNyZWF0ZUZvcm1MaXN0ZW5lcigpO1xuIl0sIm5hbWVzIjpbIkRvbVN0dWZmIiwidG9EbyIsImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV3VG9Eb0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm5ld1RvRG9UaXRsZSIsImlubmVySFRNTCIsInRpdGxlIiwiY2xhc3NOYW1lIiwiX2Rpc3BsYXlUaXRsZSIsIm5ld1RvRG9EZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiX2Rpc3BsYXlEZXNjcmlwdGlvbiIsIm5ld1RvRG9EdWVEYXRlIiwiZHVlRGF0ZSIsIl9kaXNwbGF5RHVlRGF0ZSIsIm5ld1RvRG9Qcmlvcml0eSIsInByaW9yaXR5IiwiX2Rpc3BsYXlQcmlvcml0eSIsInByb2plY3RBcnJheSIsInByb2plY3RzQ29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiX3JlbW92ZUFsbFByb2plY3RzIiwiY3JlYXRlUHJvamVjdHNEaXYiLCJfY3JlYXRlUHJvamVjdENvbnRhaW5lciIsImZvckVhY2giLCJwcm9qZWN0IiwibmV3UHJvamVjdENvbnRhaW5lciIsIl9kaXNwbGF5SW5kaXZpZHVhbFByb2plY3QiLCJQcm9qZWN0TWFuYWdlciIsInNob3dBbGxQcm9qZWN0cyIsIlByb2plY3QiLCJ0b0RvQXJyYXkiLCJzaG93VG9Eb3MiLCJjcmVhdGVGb3JtTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1Byb2plY1RpdGxlIiwidmFsdWUiLCJuZXdQcm9qZWN0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJjcmVhdGVOZXdQcm9qZWN0IiwidG9Eb1N0YXR1cyIsImNyZWF0ZSIsIm5ld1RvRG8iLCJjaGFuZ2UiLCJlbGVtZW50VG9DaGFuZ2UiLCJuZXdWYWx1ZSIsInRoaXMiLCJUb0RvIl0sInNvdXJjZVJvb3QiOiIifQ==