const formTODO = document.querySelector("form")
const todoInput = document.getElementById("title")
const dateInput = document.getElementById("date")
const timeInput = document.getElementById("time")
const descInput = document.getElementById("description")
const addTodoBtn = document.querySelector("button[type=submit]");
const taskContainer = document.getElementById("task-container")

const taskData = JSON.parse(localStorage.getItem("data")) || [];
const currentTask = {}



const clearInput = () => {
    todoInput.value = ""
    dateInput.value = ""
    descInput.value = ""
    timeInput.value = ""
}

const addTodo = () => {
    const taskObj = {
        id: `${todoInput.value.toLowerCase().split(" ").join("-")} - ${Date.now()}`,
        title: `${todoInput.value}`,
        date: `${dateInput.value}`,
        time: `${timeInput.value}`,
        description: `${descInput.value}`
    }
    taskData.unshift(taskObj)
    localStorage.setItem("data", JSON.stringify(taskData))
    updateTaskContainer()
    clearInput()
}

const updateTaskContainer = () => {
    taskContainer.innerHTML = ''

    taskData.forEach((item) => {
        taskContainer.innerHTML += `
            <div class="todo" id="${item.id}">
               <small class="todo-date">${item.date ? `<em>Date: ${item.date}</em>` : `<em>Date: -</em>`}</small><br/>
               <small class="todo-time">${item.time ? `<em>Time: ${item.time}</em>` : `<em>Time: -</em>`}</small>
               <p class="todo-title">${item.title}</p>
               <p class="todo-description">${item.description ? item.description : `<em>-</em>`}</p>
               <div class="button-container">
                    <button onclick="deleteTODO(this)" class="delete btn">Delete</button>
               </div>
            </div>
        `
    })
}

const deleteTODO = (delButton) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === delButton.parentElement.parentElement.id
    );

    delButton.parentElement.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(taskData));
}

formTODO.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo()
})

if (taskData.length) {
    updateTaskContainer()
}
