import express from "express";
import { addBLog, getAllBlogs, getById, updateBlog } from "../controllers/BlogController.js";


const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",addBLog)
blogRouter.put("/update/:id",updateBlog)
blogRouter.get("/:id",getById)

export default blogRouter;