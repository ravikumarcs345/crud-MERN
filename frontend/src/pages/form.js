import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
const { useState } = require("react")

const Form=()=>{
    const [user,setUser]=useState({
        firstName:'',
        lastName:'',
        email:''
    })
    const navigate=useNavigate()
    
    const handleChange=(event)=>{
        const{name,value}=event.target
        setUser({...user,[name]:value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try{
            await axios.post('http://localhost:4000/form',user)
            .then(res=>{
                console.log("data successfully posted",res)
                localStorage.setItem('email',user.email)
            alert("form data submited")
            navigate('/user')
            })
            .catch((e)=>{
                console.log("data not posted",e)
            })
            
        }catch(e){
            console.error("data con't post"+e)
        }
    }
    return(
        <>
        <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>firstName:</label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleChange}/>
        </div><br/>
        <div>
            <label>lastName:</label>
            <input type="text" name="lastName" value={user.lastName} onChange={handleChange}/>
        </div>
        <br/>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={user.email} onChange={handleChange}/>
        </div>
        <br/>
        <button type='submit'>Submit</button>
        </form>
        <Link to='/user'>user page</Link>
        </div>
        </>
    )
}
export default Form;