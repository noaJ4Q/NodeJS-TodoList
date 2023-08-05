import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let tasks = [
    {
        title: "Task title",
        category: "Today"
    }
];

let categories = [
    "Today",
    "Work"
]

app.get("/", (req, res)=>{
    res.redirect("/tasks");
})

app.get("/tasks", (req, res)=>{
    res.render("index.ejs", {
        tasks: tasks,
        categories: categories
    });
})

app.post("/newTask", (req, res)=>{
    tasks.push({
        title: req.body.task,
        category: req.body.category
    })
    res.redirect("/");
})

app.listen(port, ()=>{
    console.log("Server running on "+port);
})