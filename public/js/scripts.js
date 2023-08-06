const modal = document.querySelector("#newTaskModal");
const closeModalBtn = document.querySelector("#closeModalBtn");
const overlay = document.querySelector("#modalOverlay");
const newTaskBtn = document.querySelector("#newTaskBtn");
const taskInput = document.querySelector("input[name='task']");
const addTaskBtn = document.querySelector("#addTaskBtn");
const completedBtns = document.querySelectorAll(".completedBtn");
const tasksLeft = document.querySelector("#tasksLeft");

//open and close modal functions
const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    taskInput.value = "";
}

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

//open and close events
newTaskBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
})

//validate form
taskInput.addEventListener("keyup", (e)=>{
    if(e.target.value===""){
        addTaskBtn.disabled = true;
    }
    else{
        addTaskBtn.disabled = false;
    }
})

//complete task
for(let i = 0; i < completedBtns.length; i++){
    completedBtns[i].addEventListener("click", (e)=>{
        let parent = e.target.parentElement.parentElement;
        if(!parent.classList.contains("completedTask")){
            e.target.parentElement.parentElement.classList.add("completedTask");
            console.log()
        }
    })
}