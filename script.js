let taskData = {}


let todo = document.querySelector("#todo")
let progress = document.querySelector("#progress")
let done = document.querySelector("#done")

let columns = [todo, progress, done];


let dragElement = null;

const tasks = document.querySelectorAll(".task")

function addTask(title, desc, column) {

    let tasks = document.createElement("div");

    tasks.classList.add("task");
    tasks.setAttribute("draggable", "true");

    tasks.innerHTML = `
            <h2>${title}</h2>
            <p>${desc}</p>
            <button>Delete</button>
            `

    column.appendChild(tasks);

    tasks.addEventListener("drag", (e) => {
        dragElement = tasks;

    })

    const deleteBtn = tasks.querySelector("button")
    deleteBtn.addEventListener("click" , () => {
        tasks.remove()
        updateTask()
    })

    return tasks;
}

function updateTask() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task")
        const taskCount = col.querySelector(".right")


        taskData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                description: t.querySelector("p").innerText
            }
        })
        localStorage.setItem("tasks", JSON.stringify(taskData));

        taskCount.innerText = tasks.length;
    })
}



if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));
    // console.log(data)

    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {

            addTask(task.title, task.description, column)

        })
    }
    updateTask()
}


tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        dragElement = task;

    })
})



function addDragEventOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("task-hover")
    })

    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("task-hover")
    })

    column.addEventListener("dragover", (e) => {
        e.preventDefault()
    })

    column.addEventListener("drop", (e) => {
        e.preventDefault()
        column.appendChild(dragElement)
        column.classList.remove("task-hover")

        updateTask()


    })

}

addDragEventOnColumn(todo)
addDragEventOnColumn(progress)
addDragEventOnColumn(done)



const modal = document.querySelector(".modal");
const createTaskBtn = document.querySelector(".create-task-btn");
const addTaskBtn = document.querySelector("#add-task-btn")
const bg = document.querySelector(".modalbg")


createTaskBtn.addEventListener("click", () => {
    modal.classList.add("active")
})

bg.addEventListener("click", () => {
    modal.classList.remove("active")
})


addTaskBtn.addEventListener("click", () => {


    const taskTitle = document.querySelector("#task-title").value;
    const taskDesc = document.querySelector("#task-description").value;

    addTask(taskTitle, taskDesc, todo)
    updateTask()
    modal.classList.remove("active");


});
