import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const User=()=>{
    const[data,setData]=useState([])
    const getdata=async()=>{
        try{
            const res=await axios.get('http://localhost:4000/user')
            setData(res.data)
    }
    catch(e){
        console.error("error fetching data",e)
    }}
    useEffect(()=>{
        getdata()
    },[])

    const deleteData=async(id)=>{
        try{
         await axios.delete(`http://localhost:4000/user/${id}`)
        }catch(e){
            console.error(e)
        } }
        useEffect(()=>{
            deleteData()
        },[])
    return(<>
    <div>
        <ul>
            {data.map((user,index)=>(
                <li key={index}>
                    Name:{user.firstName + user.lastName}  
                    Email:{user.email}
                    <button onClick={()=>deleteData(user._id)}>delete</button></li>
            ))}
        </ul>
                <Link to='/form'>form page</Link>
        </div>
    </>)
}

export default User;