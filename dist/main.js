(()=>{"use strict";const e=e=>{const t=document.getElementById("content"),n=document.createElement("div");t.appendChild(n),((e,t)=>{const n=document.createElement("div");n.innerHTML=e.title,n.className="todo-title",t.appendChild(n)})(e,n),((e,t)=>{const n=document.createElement("div");n.innerHTML=e.description,n.className="todo-description",t.appendChild(n)})(e,n),((e,t)=>{const n=document.createElement("div");n.innerHTML=e.dueDate,n.className="todo-duedate",t.appendChild(n)})(e,n),((e,t)=>{const n=document.createElement("div");n.innerHTML=e.priority,n.className="todo-priority",t.appendChild(n)})(e,n)},t=e=>{const t=document.createElement("div");console.log(t),(()=>{const e=document.getElementById("projects-container");if(null!=e)for(;e.firstChild;)e.removeChild(e.lastChild)})(),(()=>{const e=document.getElementById("projects-container"),t=document.createElement("div");t.id="inner-projects-container",e.appendChild(t)})(),(e=>{e.forEach((e=>{const t=document.getElementById("inner-projects-container"),n=document.createElement("div");n.className="individual-project-container";const o=document.createElement("div");o.className="project-title",o.innerText=e.title;const c=document.createElement("button");c.className=`view-project-${e.id}`,c.textContent="View project",n.appendChild(c),n.appendChild(o),t.appendChild(n)}))})(e)},n=function(e){!function(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.lastChild)}();const t=document.createElement("div");t.className="view-project-container",content.appendChild(t);const n=document.createElement("div");n.className="view-project-title",n.innerText=e.title,t.appendChild(n)},o=function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="projects-container",e.appendChild(t)},c=function(){const e=document.getElementById("content"),t=document.createElement("div");t.className="new-project-form-container",e.appendChild(t);const n=document.createElement("form");n.id="new-project-form";const o=document.createElement("input");o.type="text",o.id="title",o.name="title";const c=document.createElement("label");c.htmlFor="title",c.innerText="New Project Title";const d=document.createElement("input");d.type="submit",d.id="submit",d.name="submit",n.appendChild(c),n.appendChild(o),n.appendChild(d),t.appendChild(n)},d=function(e){n(e)},i=function(){const e=document.getElementsByClassName("view-project-container")[0],t=document.createElement("div");t.className="new-todo-form-container",e.appendChild(t);const n=document.createElement("form");n.id="new-todo-form";const o=document.createElement("label");o.htmlFor="title",o.innerText="Title";const c=document.createElement("input");c.type="text",c.id="title",c.name="title";const d=document.createElement("label");d.htmlFor="description",d.innerText="Description";const i=document.createElement("input");i.type="text",i.id="description",i.name="description";const r=document.createElement("label");r.htmlFor="dueDate",r.innerText="Due Date";const l=document.createElement("input");l.type="text",l.id="dueDate",l.name="dueDate";const a=document.createElement("label");a.htmlFor="priority",a.innerText="Priority";const m=document.createElement("input");m.type="text",m.id="priority",m.name="priority";const s=document.createElement("input");s.type="submit",s.id="submit",s.name="submit",n.appendChild(o),n.appendChild(c),n.appendChild(d),n.appendChild(i),n.appendChild(r),n.appendChild(l),n.appendChild(a),n.appendChild(m),n.appendChild(s),t.appendChild(n)},r=function(e){const t=document.getElementById("new-todo-form"),n=document.createElement("input");n.type="hidden",n.id="projectId",n.name="projectId",n.value=e,t.appendChild(n)},l=(()=>{const e=[];return{showAllProjects:()=>{t(e),l.viewProjectListener()},projectArray:e,projectId:0,toDoId:0,viewProjectListener:function(){e.forEach((e=>{document.getElementsByClassName(`view-project-${e.id}`)[0].addEventListener("click",(()=>{d(e),i(),r(e.id),a().todoListener()}))}))}}})(),a=function(e,t,n,o){const c="incomplete";return{title:e,description:t,dueDate:n,priority:o,toDoStatus:c,create:(e,t,n,o)=>{newToDo=toDo(e,t,n,o)},change:(e,t)=>{this[e]=t},toDoStatus:c,toDoid:"",projectId:"",todoListener:function(){document.getElementById("new-todo-form").addEventListener("submit",(e=>{e.preventDefault(),function(){const e=document.getElementById("title").value,t=document.getElementById("description").value,n=document.getElementById("dueDate").value,o=document.getElementById("priority").value,c=document.getElementById("projectId").value,d=a(e,t,n,o);d.projectId=c;const i=function(e){let t="";return l.projectArray.forEach((n=>{n.id==e&&(t=n)})),t}(c);i.toDoArray.push(d),console.log(i),console.log(d),console.log(i.toDoArray)}()}))}}},m=t=>{const n=[];return l.projectId+=1,{title:t,toDoArray:n,showToDos:()=>{n.forEach((t=>{e(t)}))},createFormListener:function(){document.getElementById("new-project-form").addEventListener("submit",(e=>{e.preventDefault(),function(){const e=document.getElementById("title").value,t=m(e);t.id=l.projectId,l.projectArray.push(t),l.showAllProjects()}()}))},id:""}},s=m("ABC"),p=a("abc","abc","abc","abc");o(),c(),s.toDoArray.push(p),s.showToDos(),l.showAllProjects(),s.createFormListener()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVFyQixVQUFZb0IsRUFDcEIsTUFBTUUsRUFPWSxTQUFVRixHQUM1QixJQUFJRyxFQUFlLEdBTW5CLE9BTEFwQixFQUFlOUMsYUFBYVcsU0FBU0MsSUFDL0JBLEVBQVFILElBQU1zRCxJQUNoQkcsRUFBZXRELEVBQ2pCLElBRUtzRCxDQUNULENBZndCQyxDQUFZSixHQUNsQ0UsRUFBY0csVUFBVUMsS0FBS0wsR0FDN0I5RCxRQUFRQyxJQUFJOEQsR0FDWi9ELFFBQVFDLElBQUk2RCxHQUNaOUQsUUFBUUMsSUFBSThELEVBQWNHLFVBQzVCLENBZ0JJRSxFQUFZLEdBRWhCLEVBaUJGLEVDaEVNQyxFQUFXbkYsSUFDZixNQUFNZ0YsRUFBWSxHQW1DbEIsT0FMRXRCLEVBQWVILFdBQWEsRUFLdkIsQ0FBRXZELFFBQU9nRixZQUFXSSxVQWhDVCxLQUNoQkosRUFBVXpELFNBQVNoQyxJQUNqQkQsRUFBcUJDLEVBQUssR0FDMUIsRUE2QmtDOEYsbUJBZFgsV0FDRjVGLFNBQVNDLGVBQWUsb0JBQ2hDb0UsaUJBQWlCLFVBQVdXLElBQ3pDQSxFQUFNQyxpQkFmZSxXQUN2QixNQUFNWSxFQUFpQjdGLFNBQVNDLGVBQWUsU0FBUytELE1BQ2xEOEIsRUFBYUosRUFBUUcsR0FDM0JDLEVBQVdsRSxHQUFLcUMsRUFBZUgsVUFDL0JHLEVBQWU5QyxhQUFhcUUsS0FBS00sR0FDakM3QixFQUFlQyxpQkFDakIsQ0FVSTZCLEVBQWtCLEdBRXRCLEVBUTBEbkUsR0FsQy9DLEdBa0NtRCxFQ2xDMURHLEVBQVUyRCxFQUFRLE9BQ2xCLEVBQU9wQixFQUFLLE1BQU8sTUFBTyxNQUFPLE9BQ3ZDekUsSUFDQUEsSUFDQWtDLEVBQVF3RCxVQUFVQyxLQUFLLEdBQ3ZCekQsRUFBUTRELFlBQ1IxQixFQUFlQyxrQkFDZm5DLEVBQVE2RCxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvRG9Eb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRG9tU3R1ZmYgPSAoKCkgPT4ge1xuICBjb25zdCBfZGlzcGxheVRpdGxlID0gKHRvRG8sIG5ld1RvRG9EaXYpID0+IHtcbiAgICBjb25zdCBuZXdUb0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvRG9UaXRsZS5pbm5lckhUTUwgPSB0b0RvLnRpdGxlO1xuICAgIG5ld1RvRG9UaXRsZS5jbGFzc05hbWUgPSBcInRvZG8tdGl0bGVcIjtcbiAgICBuZXdUb0RvRGl2LmFwcGVuZENoaWxkKG5ld1RvRG9UaXRsZSk7XG4gIH07XG5cbiAgY29uc3QgX2Rpc3BsYXlEZXNjcmlwdGlvbiA9ICh0b0RvLCBuZXdUb0RvRGl2KSA9PiB7XG4gICAgY29uc3QgbmV3VG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb0RvRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdG9Eby5kZXNjcmlwdGlvbjtcbiAgICBuZXdUb0RvRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJ0b2RvLWRlc2NyaXB0aW9uXCI7XG4gICAgbmV3VG9Eb0Rpdi5hcHBlbmRDaGlsZChuZXdUb0RvRGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIGNvbnN0IF9kaXNwbGF5RHVlRGF0ZSA9ICh0b0RvLCBuZXdUb0RvRGl2KSA9PiB7XG4gICAgY29uc3QgbmV3VG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvRG9EdWVEYXRlLmlubmVySFRNTCA9IHRvRG8uZHVlRGF0ZTtcbiAgICBuZXdUb0RvRHVlRGF0ZS5jbGFzc05hbWUgPSBcInRvZG8tZHVlZGF0ZVwiO1xuICAgIG5ld1RvRG9EaXYuYXBwZW5kQ2hpbGQobmV3VG9Eb0R1ZURhdGUpO1xuICB9O1xuXG4gIGNvbnN0IF9kaXNwbGF5UHJpb3JpdHkgPSAodG9EbywgbmV3VG9Eb0RpdikgPT4ge1xuICAgIGNvbnN0IG5ld1RvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9Eb1ByaW9yaXR5LmlubmVySFRNTCA9IHRvRG8ucHJpb3JpdHk7XG4gICAgbmV3VG9Eb1ByaW9yaXR5LmNsYXNzTmFtZSA9IFwidG9kby1wcmlvcml0eVwiO1xuICAgIG5ld1RvRG9EaXYuYXBwZW5kQ2hpbGQobmV3VG9Eb1ByaW9yaXR5KTtcbiAgfTtcblxuICBjb25zdCBfZGlzcGxheUluZGl2aWR1YWxQcm9qZWN0ID0gKHByb2plY3RBcnJheSkgPT4ge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbm5lclByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwiaW5uZXItcHJvamVjdHMtY29udGFpbmVyXCJcbiAgICAgICk7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbmRpdmlkdWFsLXByb2plY3QtY29udGFpbmVyXCI7XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9IFwicHJvamVjdC10aXRsZVwiO1xuICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgIC8vIGFkZCB2aWV3IHByb2plY3QgYnV0dG9uXG4gICAgICBjb25zdCB2aWV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB2aWV3UHJvamVjdC5jbGFzc05hbWUgPSBgdmlldy1wcm9qZWN0LSR7cHJvamVjdC5pZH1gO1xuICAgICAgdmlld1Byb2plY3QudGV4dENvbnRlbnQgPSBcIlZpZXcgcHJvamVjdFwiO1xuICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3UHJvamVjdCk7XG4gICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICBpbm5lclByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IF9yZW1vdmVBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgIGlmIChwcm9qZWN0c0NvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICB3aGlsZSAocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBfY3JlYXRlUHJvamVjdENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNyZWF0ZVByb2plY3RzRGl2LmlkID0gXCJpbm5lci1wcm9qZWN0cy1jb250YWluZXJcIjtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0c0Rpdik7XG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG4gIH07XG5cbiAgY29uc3QgX3JlbW92ZUFsbENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdHNDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNDb250YWluZXIuaWQgPSBcInByb2plY3RzLWNvbnRhaW5lclwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlBbGxQcm9qZWN0cyA9IChwcm9qZWN0QXJyYXkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNDb250YWluZXIpO1xuICAgIF9yZW1vdmVBbGxQcm9qZWN0cygpO1xuICAgIF9jcmVhdGVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgX2Rpc3BsYXlJbmRpdmlkdWFsUHJvamVjdChwcm9qZWN0QXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIC8vY3JlYXRlIGZvcm0gIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3QtZm9ybS1jb250YWluZXJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtQ29udGFpbmVyKTtcblxuICAgIC8vY3JlYXRlIGZvcm0gYW5kIGlkXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBwcm9qZWN0Rm9ybS5pZCA9IFwibmV3LXByb2plY3QtZm9ybVwiO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIHByb2plY3RUaXRsZS5pZCA9IFwidGl0bGVcIjtcbiAgICBwcm9qZWN0VGl0bGUubmFtZSA9IFwidGl0bGVcIjtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2plY3RUaXRsZUxhYmVsLmh0bWxGb3IgPSBcInRpdGxlXCI7XG4gICAgcHJvamVjdFRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXQuaWQgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdC5uYW1lID0gXCJzdWJtaXRcIjtcbiAgICAvLyBzdWJtaXQuaW5uZXJUZXh0ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlTGFiZWwpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIG5ld1Byb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5dG9EbyA9ICh0b0RvKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBuZXdUb0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VG9Eb0Rpdik7XG5cbiAgICBfZGlzcGxheVRpdGxlKHRvRG8sIG5ld1RvRG9EaXYpO1xuXG4gICAgX2Rpc3BsYXlEZXNjcmlwdGlvbih0b0RvLCBuZXdUb0RvRGl2KTtcblxuICAgIF9kaXNwbGF5RHVlRGF0ZSh0b0RvLCBuZXdUb0RvRGl2KTtcblxuICAgIF9kaXNwbGF5UHJpb3JpdHkodG9EbywgbmV3VG9Eb0Rpdik7XG4gIH07XG5cbiAgY29uc3Qgdmlld1Byb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIF9yZW1vdmVBbGxDb250ZW50KCk7XG5cbiAgICAvLyBnZW5lcmF0ZSB2aWV3cHJvamVjdGNvbnRhaW5lclxuICAgIGNvbnN0IHZpZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2aWV3UHJvamVjdENvbnRhaW5lci5jbGFzc05hbWUgPSBcInZpZXctcHJvamVjdC1jb250YWluZXJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHZpZXdQcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIC8vIGFkZCBwcm9qZWN0IHRpdGxlXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJ2aWV3LXByb2plY3QtdGl0bGVcIjtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHZpZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXl0b0RvLFxuICAgIGRpc3BsYXlBbGxQcm9qZWN0cyxcbiAgICB2aWV3UHJvamVjdCxcbiAgICBjcmVhdGVQcm9qZWN0c0NvbnRhaW5lcixcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IERvbVN0dWZmIH07XG4iLCJpbXBvcnQgeyBEb21TdHVmZiB9IGZyb20gXCIuL2RvbVwiO1xuXG5jb25zdCBWaWV3UHJvamVjdCA9ICgocHJvamVjdCkgPT4ge1xuICBjb25zdCB2aWV3VGl0bGUgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIERvbVN0dWZmLnZpZXdQcm9qZWN0KHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHZpZXdUb0RvcyA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gIHJldHVybiB7IHZpZXdUaXRsZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgVmlld1Byb2plY3QgfTtcbiIsImNvbnN0IFRvRG9Eb20gPSAoKCkgPT4ge1xuICBjb25zdCBuZXdUb0RvRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgXCJ2aWV3LXByb2plY3QtY29udGFpbmVyXCJcbiAgICApWzBdO1xuXG4gICAgY29uc3QgbmV3VG9kb0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvZG9Gb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibmV3LXRvZG8tZm9ybS1jb250YWluZXJcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0Zvcm1Db250YWluZXIpO1xuXG4gICAgLy8gLy9jcmVhdGUgZm9ybSBhbmQgaWRcblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgdG9kb0Zvcm0uaWQgPSBcIm5ldy10b2RvLWZvcm1cIjtcblxuICAgIGNvbnN0IHRvZG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvZG9UaXRsZUxhYmVsLmh0bWxGb3IgPSBcInRpdGxlXCI7XG4gICAgdG9kb1RpdGxlTGFiZWwuaW5uZXJUZXh0ID0gXCJUaXRsZVwiO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRvZG9UaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdG9kb1RpdGxlLmlkID0gXCJ0aXRsZVwiO1xuICAgIHRvZG9UaXRsZS5uYW1lID0gXCJ0aXRsZVwiO1xuXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9kb0Rlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICB0b2RvRGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIjtcbiAgICB0b2RvRGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG5cbiAgICBjb25zdCB0b2RvRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvZG9EdWVEYXRlTGFiZWwuaHRtbEZvciA9IFwiZHVlRGF0ZVwiO1xuICAgIHRvZG9EdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZVwiO1xuXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9kb0R1ZURhdGUudHlwZSA9IFwidGV4dFwiO1xuICAgIHRvZG9EdWVEYXRlLmlkID0gXCJkdWVEYXRlXCI7XG4gICAgdG9kb0R1ZURhdGUubmFtZSA9IFwiZHVlRGF0ZVwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9kb1ByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwicHJpb3JpdHlcIjtcbiAgICB0b2RvUHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSBcIlByaW9yaXR5XCI7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9kb1ByaW9yaXR5LnR5cGUgPSBcInRleHRcIjtcbiAgICB0b2RvUHJpb3JpdHkuaWQgPSBcInByaW9yaXR5XCI7XG4gICAgdG9kb1ByaW9yaXR5Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdC5pZCA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0Lm5hbWUgPSBcInN1Ym1pdFwiO1xuXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlTGFiZWwpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25MYWJlbCk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlTGFiZWwpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eUxhYmVsKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIG5ld1RvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgfTtcblxuICBjb25zdCBhc3NpZ25Qcm9qZWN0SWQgPSBmdW5jdGlvbiAocHJvamVjdElkKSB7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvLWZvcm1cIik7XG4gICAgY29uc3QgaGlkZGVuUHJvamVjdElkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGhpZGRlblByb2plY3RJZC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICBoaWRkZW5Qcm9qZWN0SWQuaWQgPSBcInByb2plY3RJZFwiO1xuICAgIGhpZGRlblByb2plY3RJZC5uYW1lID0gXCJwcm9qZWN0SWRcIjtcbiAgICBoaWRkZW5Qcm9qZWN0SWQudmFsdWUgPSBwcm9qZWN0SWQ7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuUHJvamVjdElkKTtcbiAgfTtcblxuICByZXR1cm4geyBuZXdUb0RvRm9ybSwgYXNzaWduUHJvamVjdElkIH07XG59KSgpO1xuXG5leHBvcnQgeyBUb0RvRG9tIH07XG4iLCJpbXBvcnQgeyBEb21TdHVmZiB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgVmlld1Byb2plY3QgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBUb0RvRG9tIH0gZnJvbSBcIi4vdG9Eb0RvbVwiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgUHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgY29uc3QgcHJvamVjdElkID0gMDtcbiAgY29uc3QgdG9Eb0lkID0gMDtcblxuICBjb25zdCBzaG93QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgRG9tU3R1ZmYuZGlzcGxheUFsbFByb2plY3RzKHByb2plY3RBcnJheSk7XG4gICAgUHJvamVjdE1hbmFnZXIudmlld1Byb2plY3RMaXN0ZW5lcigpO1xuICB9O1xuXG4gIGNvbnN0IHZpZXdQcm9qZWN0TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHZpZXdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICBgdmlldy1wcm9qZWN0LSR7cHJvamVjdC5pZH1gXG4gICAgICApWzBdO1xuICAgICAgdmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBWaWV3UHJvamVjdC52aWV3VGl0bGUocHJvamVjdCk7XG4gICAgICAgIFRvRG9Eb20ubmV3VG9Eb0Zvcm0oKTtcbiAgICAgICAgVG9Eb0RvbS5hc3NpZ25Qcm9qZWN0SWQocHJvamVjdC5pZCk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBUb0RvKCk7XG4gICAgICAgIHRvZG8udG9kb0xpc3RlbmVyKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNob3dBbGxQcm9qZWN0cyxcbiAgICBwcm9qZWN0QXJyYXksXG4gICAgcHJvamVjdElkLFxuICAgIHRvRG9JZCxcbiAgICB2aWV3UHJvamVjdExpc3RlbmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgUHJvamVjdE1hbmFnZXIgfTtcbiIsImltcG9ydCB7IFByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcblxuY29uc3QgVG9EbyA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IHRvRG9TdGF0dXMgPSBcImluY29tcGxldGVcIjtcbiAgY29uc3QgdG9Eb2lkID0gXCJcIjtcbiAgY29uc3QgcHJvamVjdElkID0gXCJcIjtcblxuICBjb25zdCBjcmVhdGUgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIG5ld1RvRG8gPSB0b0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZSA9IChlbGVtZW50VG9DaGFuZ2UsIG5ld1ZhbHVlKSA9PiB7XG4gICAgdGhpc1tlbGVtZW50VG9DaGFuZ2VdID0gbmV3VmFsdWU7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlVERTID0gKCkgPT4ge1xuICAgIHRvRG9zdGF0dXMgPSBjb21wbGV0ZXQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJvamVjdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0SWRcIikudmFsdWU7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvRG8odG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkpO1xuICAgIG5ld1RvZG8ucHJvamVjdElkID0gdG9kb1Byb2plY3RJZDtcbiAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gZmluZFByb2plY3QodG9kb1Byb2plY3RJZCk7XG4gICAgcGFyZW50UHJvamVjdC50b0RvQXJyYXkucHVzaChuZXdUb2RvKTtcbiAgICBjb25zb2xlLmxvZyhwYXJlbnRQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhuZXdUb2RvKTtcbiAgICBjb25zb2xlLmxvZyhwYXJlbnRQcm9qZWN0LnRvRG9BcnJheSk7XG4gIH07XG5cbiAgY29uc3QgZmluZFByb2plY3QgPSBmdW5jdGlvbiAodG9kb1Byb2plY3RJZCkge1xuICAgIGxldCBmb3VuZFByb2plY3QgPSBcIlwiO1xuICAgIFByb2plY3RNYW5hZ2VyLnByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5pZCA9PSB0b2RvUHJvamVjdElkKSB7XG4gICAgICAgIGZvdW5kUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kUHJvamVjdDtcbiAgfTtcblxuICBjb25zdCB0b2RvTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvLWZvcm1cIik7XG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjcmVhdGVUb2RvKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5jcmVhc2VUb0RvSWQgPSBmdW5jdGlvbiAoKSB7fTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgdG9Eb1N0YXR1cyxcbiAgICBjcmVhdGUsXG4gICAgY2hhbmdlLFxuICAgIHRvRG9TdGF0dXMsXG4gICAgdG9Eb2lkLFxuICAgIHByb2plY3RJZCxcbiAgICB0b2RvTGlzdGVuZXIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBUb0RvIH07XG4iLCJpbXBvcnQgeyBEb21TdHVmZiB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgUHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuICBjb25zdCBpZCA9IFwiXCI7XG5cbiAgY29uc3Qgc2hvd1RvRG9zID0gKCkgPT4ge1xuICAgIHRvRG9BcnJheS5mb3JFYWNoKCh0b0RvKSA9PiB7XG4gICAgICBEb21TdHVmZi5kaXNwbGF5dG9Ebyh0b0RvKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChuZXdQcm9qZWNUaXRsZSk7XG4gICAgbmV3UHJvamVjdC5pZCA9IFByb2plY3RNYW5hZ2VyLnByb2plY3RJZDtcbiAgICBQcm9qZWN0TWFuYWdlci5wcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICBQcm9qZWN0TWFuYWdlci5zaG93QWxsUHJvamVjdHMoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBEb21TdHVmZi5jcmVhdGVGb3JtKCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRm9ybUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluY3JlYXNlUHJvamVjdElkID0gZnVuY3Rpb24gKCkge1xuICAgIFByb2plY3RNYW5hZ2VyLnByb2plY3RJZCArPSAxO1xuICB9O1xuXG4gIGluY3JlYXNlUHJvamVjdElkKCk7XG5cbiAgcmV0dXJuIHsgdGl0bGUsIHRvRG9BcnJheSwgc2hvd1RvRG9zLCBjcmVhdGVGb3JtTGlzdGVuZXIsIGlkIH07XG59O1xuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9kb1wiOyAvLyB0b2RlbGV0ZVxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCB7IERvbVN0dWZmIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmNvbnN0IHByb2plY3QgPSBQcm9qZWN0KFwiQUJDXCIpO1xuY29uc3QgdG9EbyA9IFRvRG8oXCJhYmNcIiwgXCJhYmNcIiwgXCJhYmNcIiwgXCJhYmNcIik7XG5Eb21TdHVmZi5jcmVhdGVQcm9qZWN0c0NvbnRhaW5lcigpO1xuRG9tU3R1ZmYuY3JlYXRlUHJvamVjdEZvcm0oKTtcbnByb2plY3QudG9Eb0FycmF5LnB1c2godG9Ebyk7XG5wcm9qZWN0LnNob3dUb0RvcygpO1xuUHJvamVjdE1hbmFnZXIuc2hvd0FsbFByb2plY3RzKCk7XG5wcm9qZWN0LmNyZWF0ZUZvcm1MaXN0ZW5lcigpO1xuIl0sIm5hbWVzIjpbIkRvbVN0dWZmIiwidG9EbyIsImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV3VG9Eb0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm5ld1RvRG9UaXRsZSIsImlubmVySFRNTCIsInRpdGxlIiwiY2xhc3NOYW1lIiwiX2Rpc3BsYXlUaXRsZSIsIm5ld1RvRG9EZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiX2Rpc3BsYXlEZXNjcmlwdGlvbiIsIm5ld1RvRG9EdWVEYXRlIiwiZHVlRGF0ZSIsIl9kaXNwbGF5RHVlRGF0ZSIsIm5ld1RvRG9Qcmlvcml0eSIsInByaW9yaXR5IiwiX2Rpc3BsYXlQcmlvcml0eSIsInByb2plY3RBcnJheSIsInByb2plY3RzQ29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsIl9yZW1vdmVBbGxQcm9qZWN0cyIsImNyZWF0ZVByb2plY3RzRGl2IiwiaWQiLCJfY3JlYXRlUHJvamVjdENvbnRhaW5lciIsImZvckVhY2giLCJwcm9qZWN0IiwiaW5uZXJQcm9qZWN0c0NvbnRhaW5lciIsIm5ld1Byb2plY3RDb250YWluZXIiLCJwcm9qZWN0VGl0bGUiLCJpbm5lclRleHQiLCJ2aWV3UHJvamVjdCIsInRleHRDb250ZW50IiwiX2Rpc3BsYXlJbmRpdmlkdWFsUHJvamVjdCIsIl9yZW1vdmVBbGxDb250ZW50Iiwidmlld1Byb2plY3RDb250YWluZXIiLCJuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lciIsInByb2plY3RGb3JtIiwidHlwZSIsIm5hbWUiLCJwcm9qZWN0VGl0bGVMYWJlbCIsImh0bWxGb3IiLCJzdWJtaXQiLCJWaWV3UHJvamVjdCIsIlRvRG9Eb20iLCJjb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibmV3VG9kb0Zvcm1Db250YWluZXIiLCJ0b2RvRm9ybSIsInRvZG9UaXRsZUxhYmVsIiwidG9kb1RpdGxlIiwidG9kb0Rlc2NyaXB0aW9uTGFiZWwiLCJ0b2RvRGVzY3JpcHRpb24iLCJ0b2RvRHVlRGF0ZUxhYmVsIiwidG9kb0R1ZURhdGUiLCJ0b2RvUHJpb3JpdHlMYWJlbCIsInRvZG9Qcmlvcml0eSIsInByb2plY3RJZCIsImhpZGRlblByb2plY3RJZCIsInZhbHVlIiwiUHJvamVjdE1hbmFnZXIiLCJzaG93QWxsUHJvamVjdHMiLCJ2aWV3UHJvamVjdExpc3RlbmVyIiwidG9Eb0lkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlRvRG8iLCJ0b2RvTGlzdGVuZXIiLCJ0b0RvU3RhdHVzIiwiY3JlYXRlIiwibmV3VG9EbyIsImNoYW5nZSIsImVsZW1lbnRUb0NoYW5nZSIsIm5ld1ZhbHVlIiwidGhpcyIsInRvRG9pZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2RvUHJvamVjdElkIiwibmV3VG9kbyIsInBhcmVudFByb2plY3QiLCJmb3VuZFByb2plY3QiLCJmaW5kUHJvamVjdCIsInRvRG9BcnJheSIsInB1c2giLCJjcmVhdGVUb2RvIiwiUHJvamVjdCIsInNob3dUb0RvcyIsImNyZWF0ZUZvcm1MaXN0ZW5lciIsIm5ld1Byb2plY1RpdGxlIiwibmV3UHJvamVjdCIsImNyZWF0ZU5ld1Byb2plY3QiXSwic291cmNlUm9vdCI6IiJ9