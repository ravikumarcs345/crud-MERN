const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const app=express()
//const routes=require('./router/router')
const cors=require('cors')
const userModel=require('./controller/controller')
port=4000;

//db connection
DBurl='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1'
mongoose.connect(DBurl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('db is connected')
})
.catch(()=>{console.log('db is not connected')})

//body-parser 

app.use(cors())
app.use(express.json())

app.post('/form',async(req,res)=>{
    const {firstName,lastName,email}=req.body
    console.log("data received from frontend")
    try{
        const newdata= userModel({firstName,lastName,email})
        await newdata.save()
        console.log("data saved to database")
        res.status(200).send("data received successfully")
    }catch(e){
        console.error("data seving error",e)
        res.status(500).send("data not received")
    } 
})
app.get('/user',async(req,res)=>{
    try{
        const getData=await userModel.find()
    res.json(getData)
    }
    catch(e){
        console.log(e)
        res.status(500).json({massage:'internal serrver Error'})
    }
})
app.delete('/user/:id',async(req,res)=>{
    const id=req.params.id
    try{
        const deleteItem=await userModel.findByIdAndDelete(id)
        if(!deleteItem){
        res.status(404).json({message:'data not found'})
        }
    }
    catch(e){
        console.error('data not delete',e)
    }
})
app.listen(port,()=>{console.log('server is start')})