import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:true}));


app.get("/tasks", (req, res)=>{

})

app.post("/newTask", (req, res)=>{

})

app.listen(port, ()=>{
    console.log("Server running on "+port);
})