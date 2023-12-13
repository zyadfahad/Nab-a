import { ClientSession } from "mongodb";
import User from "../model/user.js";
import bcrypt from "bcryptjs";

export const getAllUser = async(req,res,next) =>{

    let users;
    try{
           users = await User.find();
    }catch (err){
       return console.log(err);
    }
    if (!users) {
        return res.status(404).json({message:"No Users Found"})
    }
    return res.status(200).json({ users })
}

export const signup = async (req, res, next) =>{

      const { name, email, password} = req.body;
      let existingUser;
      try{
        existingUser = await User.findOne({ email });

      } catch (err) {
       return console.log(err)
      }
      if (existingUser) {
        return res.status(400).json({message:"User Already Exist! try login "})
      }
      const hashespassword = bcrypt.hashSync(password);

      const user = new User({
        name,
        email,
        password:hashespassword,
      });
 
      try {
           await user.save();
    } catch (err) {
        return console.log(err)
      }
      return res.status(201).json({ user })

   


}

export const login = async (req, res, next)=>{
    const {email, password}= req.body;  ///ask for data from front-end 
    
    ///cheke if  User Already Exist
    let existingUser;
    try{
      existingUser = await User.findOne({ email });

    } catch (err) {
     return console.log(err)
    }
    if (!existingUser) {
      return res.status(404).json({message:"email not found try singup here"})
    
    }
    ///cheke if password is correct 
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if (!isPasswordCorrect) {return res.status(400).json({massage:"Incorrect Password"})}

    return res.status(200).json({message:"loginSuccessfull"})



}
export const getposts = async (req, res, next)=>{

const {name , email, password} = req.body;

        
}