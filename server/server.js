const mysql=require("mysql2")
const express=require("express")
const http=require("http")
const bodyParser=require("body-parser")
const cors=require("cors")
const sequelize=require("./utils/db")
const UserRouter=require("./router/user")

const app=express()

const server=http.createServer(app)
app.use(cors())
app.use(bodyParser.json())
app.use("/user",UserRouter)
sequelize.sync()
.then(()=>console.log("Connected to the database..."))
.catch((err)=>console.log(err))




server.listen(3000,()=>console.log("server started on port 3000"))