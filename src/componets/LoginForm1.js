import React from 'react'
import { useState,useContext} from 'react'
import Datatransfer from './Datatransfer'
import CatagoryContext from './context/CatagoryContext';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useHistory } from "react-router-dom";
  import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
export default function LoginForm1() {
  
    const http=axios.create({
      baseURL:'localhost:8000.my-app.test',
      headers:{
          'X-Requested-with':'XMLHttpRequest',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      withCredentials:true,
  })
    const navigate=useNavigate()
    const dispatch=useContext(CatagoryContext)
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)

    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)

    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
      console.log(e.target.email)
      try{
        // const jwt= await axios.get('/sanctum/csrf-cookie');
        const response=await http.post('http://127.0.0.1:8000/api/auth/login',{
          email:email,
          password:password
        })
        const token=response.data.token;
        localStorage.setItem("token",JSON.stringify(token))
        console.log(response)
        // console.log(jwt)
        // dispatch('TYPE',true)
        if (response.data.message === "user logined succesfully") {
            localStorage.setItem("logged_in_status", JSON.stringify(true)); // <-- set localStorage
            navigate('/hookfetch', { replace: true }); 
          }
       


         setEmail('')
         setPassword('')
      

      }
      catch(error){
        console.log(error)
      }
    }



  return (
    <div class="justify-center items-center py-3">
    <div class="w-full item-center justify-center">
    <h1 class="text-3xl text-center text-cyan-500 p-3">Sign in</h1>
    </div>
     <form class="w-full" onSubmit={handleSubmit}>
<div class="md:flex md:items-center mb-4">
<div class="md:w-1/3">
  <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
    Full Name
  </label>
</div>
<div class="md:w-1/3">
<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"  type="text" value={email} onChange={handleEmailChange} placeholder="Enter your email"/>
</div>
</div>
<div class="md:flex md:items-center mb-4">
<div class="md:w-1/3">
  <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
    Password
  </label>
</div>
<div class="md:w-1/3">
  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"  type="password" value={password} onChange={handlePasswordChange} placeholder="******************"/>
</div>
</div>
<div class="md:flex md:items-center mb-6">
<div class="md:w-1/3"></div>
<label class="md:w-2/3 block text-gray-500 font-bold">
  <Link to='/forgotpassword'>
  <span class="text-sm">
    forgot password
  </span>
  </Link>
</label>
</div>
<div class="md:flex md:items-center">
<div class="md:w-1/3"></div>
<div class="md:w-2/3">
  <button class="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    Regiter

  </button>
  {/* <Link to="RegisterHook" class="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">k</Link> */}
</div>
</div>
</form>
    
  </div>
  )
}
