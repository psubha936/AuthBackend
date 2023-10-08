const mongoose = require('mongoose');
const registerSchema = mongoose.Schema;

const RegisterData = new registerSchema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    confirmEmail:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    }
})

const UserDetails = mongoose.model('UserRegisterDetails',RegisterData)

module.exports = UserDetails;