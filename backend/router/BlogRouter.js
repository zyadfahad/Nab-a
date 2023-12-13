import express from "express";
import { addBLog, getAllBlogs, updateBlog } from "../controllers/BlogController.js";


const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",addBLog)
blogRouter.put("/update/:id",updateBlog)

export default blogRouter;