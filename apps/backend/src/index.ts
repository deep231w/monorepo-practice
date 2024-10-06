import express ,{Request, Response} from "express";

const app= express();

const PORT= 5000;

app.get('/',(req:Request ,res:Response)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log("listening on port 5000")
})