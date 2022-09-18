const express  = require("express");
const meeting=require("../frontend/src/data/meeting")
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const userRoutes=require("./routes/userRoutes")


const app=express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("Api is running");
// });

// app.get("/api/meeting",(req,res)=>{
//     res.json(meeting);
// });

// app.get('/api/meeting/:id',(req,res)=>{
//     const meeting=meetings.find((n)=>n._id===req.params.id);
//     res.send(meeting);
// });

app.use('/api/users',userRoutes)


const PORT=process.env.PORT || 5000;
app.listen(5000,console.log(`server start on PORT ${PORT}`));
