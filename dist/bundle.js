(()=>{"use strict";const o={title:"HelloWorld",description:"this is a hello world statement",dueDate:"08/25/2022",priority:"High",notes:"This is dumb."},e=((o,e)=>{let t=[];return{projectName:"codeLogic",projectDescription:"project to hold the application logic",getTodo:()=>t,addTodo:o=>{t.push(o)}}})();console.log(o),console.log(e),e.addTodo(o),console.log(e.getTodo())})();