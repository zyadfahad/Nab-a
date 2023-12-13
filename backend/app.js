import express from "express";
import mongoose from "mongoose";
import router from "./router/UserRouter.js";
import blogRouter from "./router/BlogRouter.js";

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose.connect(
    "mongodb+srv://admin:sjxESMXDH8W2NZ0T@cluster0.n4ebsb0.mongodb.net/Blog?retryWrites=true&w=majority")
.then(()=> app.listen(5000))
.then(()=>
  console.log("connected to database and listening to localhost 5000")
)
.catch((err)=>console.log(err))




 //           sjxESMXDH8W2NZ0T               admin
//mongo DB password ^^            user name is ^^^ 
           