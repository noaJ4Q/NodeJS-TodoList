const modalTask = document.querySelector("#newTaskModal");
const modalCategory = document.querySelector("#newCategoryModal");
const closeModalTaskBtn = document.querySelector("#closeModalTaskBtn");
const closeModalCategoryBtn = document.querySelector("#closeModalCategoryBtn");
const overlay = document.querySelector("#modalOverlay");

const newTaskBtn = document.querySelector("#newTaskBtn");
const newCategoryBtn = document.querySelector("#newCategoryBtn");

const taskInput = document.querySelector("input[name='task']");
const completedBtns = document.querySelectorAll(".completedBtn");

//open and close modal functions
const closeModal = function(m){
    m.classList.add("hidden");
    overlay.classList.add("hidden");
    taskInput.value = "";
}

const openModal = function(m){
    m.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

//open and close modal task events
newTaskBtn.addEventListener("click", ()=>{
    openModal(modalTask);
});
closeModalTaskBtn.addEventListener("click", ()=>{
    closeModal(modalTask);
});
overlay.addEventListener("click", ()=>{
    closeModal(modalTask);
    closeModal(modalCategory);
});
document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && (!modalTask.classList.contains("hidden")||!modalCategory.classList.contains("hidden"))){
        closeModal(modalTask);
        closeModal(modalCategory);
    }
})

//open and close modal category events
newCategoryBtn.addEventListener("click", ()=>{
    openModal(modalCategory);
})
closeModalCategoryBtn.addEventListener("click", ()=>{
    closeModal(modalCategory);
});

//validate form
taskInput.addEventListener("keyup", (e)=>{
    const addTaskBtn = document.querySelector("#addTaskBtn");
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
        }
    })
}