const todo = document.querySelector("#todo")
const progress = document.querySelector("#progress")
const done = document.querySelector("#done")


const tasks = document.querySelectorAll(".task")


tasks.forEach(task =>{
        task.addEventListener("drag" , (e) =>{
            
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
    
}

addDragEventOnColumn(todo)
addDragEventOnColumn(progress)
addDragEventOnColumn(done)