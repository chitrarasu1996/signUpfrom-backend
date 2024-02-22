require("dotenv").config()
const express=require("express")
const cors=require("cors");

const app=express();

const db=require("./DB/connect")
db()
const agentRoutes=require("./routes/agent.routes")

app.use(express.json());
app.use(cors());
app.use("/agent",agentRoutes)

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`port is running ${port}`)
})

app.get("/",(req,res)=>{
res.status(200).send({message:"Delivery Agent Singup task"})
})