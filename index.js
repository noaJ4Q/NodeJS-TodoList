import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let categoriesSaved = [
    "Today",
    "Work"
]

let tasksSaved = [
];

app.get("/", (req, res)=>{
    res.redirect("/tasks");
})

app.get("/tasks", (req, res)=>{
    let categoryRequested = req.query.c;
    let taskSended;
    if(categoryRequested){
        taskSended = tasksSaved.filter((t)=>t.category===categoryRequested);
    }
    else{
        taskSended = [...tasksSaved];
    }

    res.render("index.ejs", {
        tasks: taskSended,
        categories: categoriesSaved
    });
})

app.post("/newTask", (req, res)=>{
    let task = req.body.task;
    if(task){
        tasksSaved.push({
            title: task,
            category: req.body.category,
            completed: false
        })
    }
    res.redirect("/");
})

app.post("/newCategory", (req, res)=>{
    let newCategory = req.body.category;
    if(!(categoriesSaved.includes(newCategory))){
        categoriesSaved.push(newCategory);
    }
    res.redirect("/");
})

app.listen(port, ()=>{
    console.log("Server running on "+port);
})