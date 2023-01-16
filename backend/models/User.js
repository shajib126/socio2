const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:[6,'password should at least 6 charecter']
    },
    photo:{
        data:Buffer,
        dataType:String
    }
},{timestamps:true,versionKey:false})
const User = mongoose.model('User',userSchema)

userSchema.methods.generateToken = function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET)
}
module.exports = User

