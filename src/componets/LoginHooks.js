import React from 'react'
import { useState,useContext} from 'react'
import CatagoryContext from './context/CatagoryContext';
import axios from 'axios';

export default function LoginHooks(){
    // const http=axois.create({
    //     baseURL:'http://127.0.0.1:8000/api/auth/login',
    //     headers:{
    //         'X-Requested-with':'XMLHttpRequest',
    //     },
    //     withCredentials:true,
    // })
    const dispatch=useContext(CatagoryContext)
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)

    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)

    }
    const handleSubmit=async()=>{
        const config = useRuntimeConfig()
  const tokenResponse = await fetch(config.baseURL + '/sanctum/csrf-cookie', {
    method: 'GET',
    credentials: 'include'
  })
  const token = getCookie('XSRF-TOKEN')
  console.log(token)
  const loginResponse = await fetch(config.baseURL + 'http://127.0.0.1:8000/api/auth/login', {
    method: 'POST',
    headers: {
      'X-XSRF-TOKEN': token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      "username": email,
      "password": password
    }
  })
 localStorage.setItem('token',JSON.stringify(token));



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
<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-password" type="text" value={email} onChange={handleEmailChange} placeholder="Enter your email"/>
</div>
</div>
<div class="md:flex md:items-center mb-4">
<div class="md:w-1/3">
  <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
    Password
  </label>
</div>
<div class="md:w-1/3">
  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-password" type="password" value={password} onChange={handlePasswordChange} placeholder="******************"/>
</div>
</div>
<div class="md:flex md:items-center mb-6">
<div class="md:w-1/3"></div>
<label class="md:w-2/3 block text-gray-500 font-bold">
  <input class="mr-2 leading-tight" type="checkbox"/>
  <span class="text-sm">
    Send me your newsletter!
  </span>
</label>
</div>
<div class="md:flex md:items-center">
<div class="md:w-1/3"></div>
<div class="md:w-2/3">
  <button class="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
    Regter
  </button>
</div>
</div>
</form>
    
  </div>
  )
}
}
