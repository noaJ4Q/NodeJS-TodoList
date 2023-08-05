const modal = document.querySelector("#newTaskModal");
const closeModalBtn = document.querySelector("#closeModalBtn");
const overlay = document.querySelector("#modalOverlay");
const newTaskBtn = document.querySelector("#newTaskBtn");
const taskInput = document.querySelector("input[name='task']");

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    taskInput.value = "";
}

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

newTaskBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
})

//validate form
taskInput.addEventListener("input", (e)=>{
    console.log(this.value);
})