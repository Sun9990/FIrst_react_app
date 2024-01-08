import React ,{useState} from 'react';
import "../css/style1.css";
// import "../App.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = (props) => {
    // localStorage.setItem('email','')
    let navigate = useNavigate();
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = async ()=>{
        // e.preventDefault();
        if(name === "" && password ==="" && email ===""){
            alert("Enter valid credentials")
        }
        else if(name === ""){
            alert("Enter Name")
        }
        else if(email === ""){
            alert("Enter Email")
        }
        else if(password === ""){
            alert("Enter Password")
        }
        else{
            // localStorage.setItem('login',true)
            // navigate('/home')
            let args = {
                 "name":name,
                 "email":email,
                 "password":password
            }
            console.log(args)
            const response = await axios.post( 'http://127.0.0.1:5000/signup',args, 
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
              })
              console.log(response.data)
              if (response.data.success === true){
                // localStorage.setItem('email',response.data.data[0].email)
                navigate('/login')
             }
             else{
                navigate('/signup')
             }    
        }
    }

    return (
    <>
        <div className="auth-form-container">  
        <h2>Signup form</h2>
    <form className='signup-form' >
        
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={handleName} name="name" id="name" placeholder="Enter Username" />
            <label htmlFor="name">Email</label>
            <input type="text" value={email} onChange={handleEmail} name="email" id="email" placeholder="Enter Email" />
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={handlePassword} name="password" placeholder="********" id="password" />
        <button  type="button" onClick={handleSubmit} >SignUp</button>
        <button  className= "link-btn" type="button"><Link to="/login">Already have an account? LogIn here</Link></button>
    </form>
   </div>
    </>
);
};


export default Signup;
