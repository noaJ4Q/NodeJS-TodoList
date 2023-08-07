import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let categoriesSaved = [
    "Today",
    "Work"
]

let tasksSaved = [
];

let data = {
    categories: categoriesSaved
}

app.get("/", (req, res)=>{
    res.redirect("/tasks");
})

app.get("/tasks", (req, res)=>{
    let categoryRequested = req.query.c;
    let taskSended;
    if(categoryRequested){
        taskSended = tasksSaved.filter((t)=>t.category===categoryRequested);
        if(categoryRequested === "Today"){
            let currentDate = new Date();
            data.day = days[currentDate.getDay()] + " " + currentDate.getDay() + "th";
        }
        else{
            data.day = null;
        }
    }
    else{
        data.day = null;
        taskSended = [...tasksSaved];
    }

    data.tasks = taskSended;

    res.render("index.ejs", data);
})

app.post("/newTask", (req, res)=>{
    let task = req.body.task;
    if(task){
        tasksSaved.push({
            title: task,
            category: req.body.category,
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