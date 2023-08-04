const modal = document.querySelector("#newTaskModal");
const overlay = document.querySelector("#modalOverlay");
const newTaskBtn = document.querySelector("#newTaskBtn");

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

newTaskBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);