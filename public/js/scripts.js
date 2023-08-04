const modal = document.querySelector("#newTaskModal");
const newTaskBtn = document.querySelector("#newTaskBtn");

newTaskBtn.addEventListener("click", ()=>{
    modal.style.display = "block";
})

window.addEventListener("click", (e)=>{
    if(e.target == modal){
        modal.style.display = "none";
    }
})