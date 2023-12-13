const mongoose=require('mongoose')
const schema=mongoose.Schema;

const userSchema=new schema({
    firstName:{
        type:String,
        require:true 
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})
module.exports=userSchema;