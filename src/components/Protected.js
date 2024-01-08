import React , {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let email = localStorage.getItem('email');
        console.log(email)
        if(email === ""){
            navigate('/')
        }
        
    }) 
  return (
    <div>
      <Component/>
    </div>
  );
}

export default Protected;
