import mongoose from "mongoose";
// import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    _id:{ type: String, required: true},
    name:{ type: String, required: true},
<<<<<<< HEAD
    email:{type: String, required: true, unique:true},
=======
    email:{type: String, required: true, unique: true},
>>>>>>> 9483ed0ed947d1db45aa04e23d43d5b19fe12116
    imageUrl : {type: String, required: true},
    cartItems: {type: Object, default:{}}
},{minimize: false})

const User = mongoose.models.user || mongoose.model('user',userSchema)

export default User 
