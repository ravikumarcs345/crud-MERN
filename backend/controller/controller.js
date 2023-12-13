const mongoose=require('mongoose')
const userSchema=require('../model/model')
const userModel=mongoose.model('data',userSchema)
module.exports=userModel;