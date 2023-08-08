const modalTask = document.querySelector("#newTaskModal");
const modalCategory = document.querySelector("#newCategoryModal");
const closeModalTaskBtn = document.querySelector("#closeModalTaskBtn");
const closeModalCategoryBtn = document.querySelector("#closeModalCategoryBtn");
const overlay = document.querySelector("#modalOverlay");

const newTaskBtn = document.querySelector("#newTaskBtn");
const newCategoryBtn = document.querySelector("#newCategoryBtn");

const taskInput = document.querySelector("input[name='task']");
const categoryInput = document.querySelector("input[name='category']")
const completedBtns = document.querySelectorAll(".completedBtn");

const addTaskBtn = document.querySelector("#addTaskBtn");
const addCategoryBtn = document.querySelector("#addCategoryBtn");

//open and close modal functions
const closeModal = function(modal,input,button){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    input.value = "";
    button.disabled = true;
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
    closeModal(modalTask, taskInput, addTaskBtn);
});
overlay.addEventListener("click", ()=>{
    closeModal(modalTask, taskInput, addTaskBtn);
    closeModal(modalCategory, categoryInput, addCategoryBtn);
});
document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && (!modalTask.classList.contains("hidden")||!modalCategory.classList.contains("hidden"))){
        closeModal(modalTask, taskInput, addTaskBtn);
        closeModal(modalCategory, categoryInput, addCategoryBtn);
    }
})

//open and close modal category events
newCategoryBtn.addEventListener("click", ()=>{
    openModal(modalCategory);
})
closeModalCategoryBtn.addEventListener("click", ()=>{
    closeModal(modalCategory, categoryInput, addCategoryBtn);
});

//validate form task
taskInput.addEventListener("keyup", (e)=>{
    if(e.target.value===""){
        addTaskBtn.disabled = true;
    }
    else{
        addTaskBtn.disabled = false;
    }
})

//validate form category
categoryInput.addEventListener("keyup", e=>{
    const addCategoryBtn = document.querySelector("#addCategoryBtn");
    if(e.target.value===""){
        addCategoryBtn.disabled = true;
    }
    else{
        addCategoryBtn.disabled = false;
    }
})

//complete task
for(let i = 0; i < completedBtns.length; i++){
    completedBtns[i].addEventListener("click", (e)=>{
        let parent = e.target.closest(".task");
        if(!parent.classList.contains("completedTask")){
            e.target.style.opacity = "1";
            parent.classList.add("completedTask");
        }
    })
}