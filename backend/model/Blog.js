import mongoose from "mongoose";

const Schema = mongoose.Schema;


const blogSchema = new Schema({

title:{
    type: String,
    require: true
},body:{
    type: String,
    require: true
},use:{
    type: String,
    require: true
},
});
export default mongoose.model("Blog",blogSchema);