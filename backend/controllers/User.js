const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.createUser = async(req,res)=>{
    try {
        const {name,email,password} = req.fields
        const {photo} = req.files;
        if(!email || !name || !password || !photo){
            res.status(400).json({
                success:false,
                message:'required fields should be filled up'
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashedPassword})
        user.photo.data = photo.path;
        user.photo.dataType = photo.type
        await user.save()
        res.status(201).json({
            success:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email}).select("-photo")
    if(!user){
        res.status(404).json({
            success:false,
            message:"User not found"
        })
    }
    if(user){
        const matchPass = await bcrypt.compare(password,user.password)
        if(!matchPass){
            res.status(400).json({
                success:false,
                message:"Password does not match"
            })
        }
        const token =await jwt.sign({_id:user._id},process.env.JWT_SECRET)
        const options = {expires:new Date(Date.now()+ 90 * 24 * 60 * 60 * 1000)}
        res.status(200).cookie('token',token,options).json({
            success:true,
            message:'Successfully logged in',
            user,
            token
        })
    }
    
}
exports.getUser = async(req,res)=>{
    //
    try {
       const user = await User.findById(req.user._id).select("-photo")
       console.log(req.cookes);
       const size = Buffer.byteLength(JSON.stringify(user))
       res.status(200).json({
        success:true,
        user,
        size:size/1024
       })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json({
            success:true,
            users
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}