const todo = document.querySelector("#todo")
const progress = document.querySelector("#progress")
const done = document.querySelector("#done")
let dragElement = null;

const tasks = document.querySelectorAll(".task")


tasks.forEach(task =>{
        task.addEventListener("drag" , (e) =>{
            dragElement = task;

        })
})



function addDragEventOnColumn(column){
    column.addEventListener("dragenter" , (e) =>{
        e.preventDefault();
        column.classList.add("task-hover")
    })

    column.addEventListener("dragleave" , (e) =>{
        e.preventDefault();
        column.classList.remove("task-hover")
    })

    column.addEventListener("dragover" , (e)=>{
        e.preventDefault() 
    })

    column.addEventListener("drop", (e)=>{
        e.preventDefault()
        column.appendChild(dragElement)
        column.classList.remove("task-hover")
    })
    
}

addDragEventOnColumn(todo)
addDragEventOnColumn(progress)
addDragEventOnColumn(done)



const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector(".add-task-btn");
const bg = document.querySelector(".bg")


addTaskBtn.addEventListener("click" , () =>{
    modal.classList.add("active")
})

bg.addEventListener("click" , ()=>{
    modal.classList.remove("active")
})