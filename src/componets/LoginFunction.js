import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

export default function LoginFunction() {
    const [RegisterInput,setRegisterInput]=useState({
         name:'',
        email:'',
        channel_name:'',
        password:'',
        error_list:'',
    })
    const http=axios.create({
        baseURL:'http://127.0.0.1:8000/api/auth/register',
        headers:{
            'X-Requested-with':'XMLHttpRequest',
        },
        withCredentials:true,
    })
    useEffect(()=>{
        getuser();
        
    },[])
    async function getuser(){
        const csrf=await http.get('/sanctum/csrf-cookie');
        console.log('csrf=',csrf);
        }
        const handleInput=(e)=>{
            e.persist();
           setRegisterInput({...RegisterInput,[e.target.name]:e.target.value});
             }
        const handleRegister=(e)=>{
            e.preventDefault();
            const data=
            {   name:RegisterInput.name,
                email:RegisterInput.email,
                channel_name:RegisterInput.channel_name,
                password:RegisterInput.password,
                error_list:[],
        }
        // axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('127.0.0.1:8000/api/auth/register',data).then(
          
    
            res=>{
                if(res.data.status===200){
                    
        
                }
                else if(res.data.status===401){
        
                }
            else{
                setRegisterInput({...RegisterInput,error_list:res.data.message});
            }
        })
    }

  return (
    <div class='flex justify-center items-center content-center py-[10px]'>
                 <form class="w-full  max-w-[50rem]" onSubmit={handleRegister}>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name" >
      Name
      </label>
    </div>
    <div class="md:w-2/3">
    <input name='name' onChange={handleInput} value={RegisterInput.name} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-name" type="text" placeholder="Enter your name"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      Email
      </label>
    </div>
    <div class="md:w-2/3">
    <input name='email' onChange={handleInput} value={RegisterInput.email} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-email" type="text" placeholder="Enter your name"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      Channel Name
      </label>
    </div>
    <div class="md:w-2/3">
    <input name='channel_name' onChange={handleInput} value={RegisterInput.channel_name} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-channel_name" type="text" placeholder="Enter your channel name"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        New Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input name='password' value={RegisterInput.password} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-password" type="password" placeholder="******************"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
      Confrim  Password 
      </label>
    </div>
    <div class="md:w-2/3">
      <input name='password' class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-password" type="password" placeholder="******************"/>
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
