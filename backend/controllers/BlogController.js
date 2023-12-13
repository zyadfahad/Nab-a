import Blog from "../model/Blog.js";

export const getAllBlogs = async(req, res, next) => {
    let blogs ; 

    try {
        blogs = await  Blog.find();  // get the bloogs from database
    } catch (err) {
        return console.log(err)
    }
    // if  thire is no blogs
    if(!blogs){
        return res.status(400).json({message:"no Blogs found "})
    }
     // if evrything is OKAY 
    return res.status(200).json({blogs})

};
export const addBLog = async (req, res, next) =>{
    const { title , body , user} = req.body;
    
    const blog = new Blog({
        title,
        body,
        user,
    });
    try{
        blog.save()
    }catch(err){
        return console.log(err)
    }
    //if evrything is OKAY
    return res.status(200).json({blog});
};
export const updateBlog = async (req, res, next)=>{

    const {title,body} = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId,{
           title,
           body ,
        })
    } catch (err) {
        return console.log(err)
    }
    if (!blog)         return res.status(500).json({message:"can't Update"})
    
 //if evrything is OKAY
 return res.status(200).json({blog});
};
export const getById = async (req, res, next)=>{

    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if(!blog) return res.status(404).json({message:"No post Found"})

    return res.status(200).json({blog});



}