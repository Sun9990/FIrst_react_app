import React ,{useState} from 'react';
import "../css/style1.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
    localStorage.setItem('email','')
    let navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = async ()=>{
        // e.preventDefault();
        if(email === "" && password ===""){
            alert("Enter valid credentials")
        }
        else if(email === ""){
            alert("Enter Name")
        }
        else if(password === ""){
            alert("Enter Password")
        }
        else{
            let args = {
                "email":email,
                "password":password
            }
            
            const response = await axios.post( 'http://127.0.0.1:5000/login',args, 
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
              })
              console.log(response.data)
              if (response.data.success === true){
                 localStorage.setItem('email',response.data.data[0].email)
                 navigate('/home')
              }
              else{
                 navigate('/login')
              }    
        }
    }
    return (
    <>
 <div className="auth-form-container">  
 <h2>Login form</h2>
    <form  className="login-form" >  
   
            <label htmlFor="email">Email</label>
            <input type="text" value={email} onChange={handleEmail} name="email" id="email" placeholder="Enter email" />
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={handlePassword} name="password" placeholder="********" id="password"/>
        <button  type="button"  onClick={handleSubmit}>Login</button>
        <button  className= "link-btn" type="button"><Link to="/signup">Dont have an account? Signup here</Link></button>
        </form>
    
        </div> 
    </>
);
};


export default Login;
