import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import NarBar from './componets/NarBar'

export default function Forgetpassword() {
    const {email,setEmail}=useState('');
    const http=axios.create({
        baseURL:'localhost:8000.my-app.test',
        headers:{
            'X-Requested-with':'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        withCredentials:true,
    });
   const handleEmail=(e)=>{
  setEmail(e.target.value);
   }
   const handleSubmit=async(e)=>{
    e.preventDefault();
      const response=await http.post('http://127.0.0.1:8000/api/auth/foregotpassword',{
        email:email
      });
      const json=response.json();
      console.log(json);

   }
  return (
    <div>
        <NarBar />
    <div class="justify-center items-center py-3">
    <div class="w-full item-center justify-center">
    <h1 class="text-3xl text-center text-cyan-500 p-3">Forget password</h1>
    </div>
     <form class="w-full" onSubmit={handleSubmit}>
<div class="md:flex md:items-center mb-4">
<div class="md:w-1/3">
  <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
    Email
  </label>
</div>
<div class="md:w-1/3">
<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"  type="text" value={email} onChange={handleEmail} placeholder="Enter your email"/>
</div>
</div>

<div class="md:flex md:items-center">
<div class="md:w-1/3"></div>
<div class="md:w-2/3">
  <button class="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    submit
  </button>
</div>
</div>
</form>
    
  </div>
  </div>
  )
}
