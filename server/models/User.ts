import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        match:/^[a-zA-Z0-9\.]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{2,}$/
    },
    password:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:true,
        default:"profile.png"
    }
})

export default mongoose.model("users" , userSchema);