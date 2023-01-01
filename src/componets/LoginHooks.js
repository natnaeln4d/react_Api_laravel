
import React,{useState,useContext} from 'react';
import {MdLock} from 'react-icons/md';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import http from './Api/url';
import CatagoryContext from './context/CatagoryContext';


export default function LoginHooks(){
    
    const { authenticate,dispatchauth,auth } = useContext(CatagoryContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const sendData = async(data) => {
        const res = await http.post("api/auth/login",data);
        console.log(res)
        dispatchauth({type: 'LOG'})
         navigate("/");
        const token = res.token;
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(res.data.user));
        
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        let data = {email: email,password: password}
         
        sendData(data)
    }
    return (
        <div className='container'>
      
  
          <div className='field_container'>
              <div className='inner_field'>
                  
                  <form onSubmit={handleSubmit} className = 'login_form'>
                      <div className='input_field'>
  
                          <div className='wrapper'>
                              <input type='text' value = {email} onChange = {handleEmailChange} placeholder = "Email" />
                              <div className='icon bg_green'>
                                  <MdLock className='item' />
                              </div>
                          </div>
  
                          <div className='wrapper'>
                             <input type='password' value={password} onChange = {handlePasswordChange} placeholder = "Password"/>   
                             <div className='icon bg_yellow'>
                                  <MdLock className='item' />
                              </div> 
                          </div>
                      </div>
                      <div className='action'>
  
                          <Link to='/register'>Register</Link>
                          <button className='button'>Sign In</button>
                      </div>
                  </form>
  
              </div>
          </div>
      </div>
    );

}
