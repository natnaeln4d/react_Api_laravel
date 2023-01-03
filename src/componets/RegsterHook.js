import axios from 'axios'
import React from 'react'
import { useState } from 'react'
// import { MdLock } from 'react-icons/md'
// import { Link } from 'react-router-dom'

export default function RegsterHook() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confrimPassword,setConfrimpassword]=useState('')

    

   const handleNameChange=(e)=>{
    setName(e.target.value);
   }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)

    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)

    }
    const handlecomfrimpasswordChange=(e)=>{
        setConfrimpassword(e.target.value)

    }
    const handleSubmit=async()=>{
       try{
        const response=await axios.post('http://127.0.0.1:8000/api/auth/register',{
            name:name,
            email:email,
            password:password,

        });
        if(!response.ok){
            console.log(response.status);
        }
       

       }catch(error){
        console.log(error)
       }

    }
   
 


  return (
    <div>
        <div 
        className='flex justify-center items-center content-center py-[10px]'>
                 <form 
                 className="w-full  max-w-[50rem]" onSubmit={handleSubmit} >
  <div 
  className="mb-6 md:flex md:items-center">
    <div 
    className="md:w-1/3">
      <label 
      className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" for="inline-full-name" >
      Name
      </label>
    </div>
    <div 
    className="md:w-2/3">
    <input name='name'  value = {name} onChange = {handleNameChange}  
    className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500" id="inline-name" type="text" placeholder="Enter your name" />
    </div>
  </div>
  <div 
  className="mb-6 md:flex md:items-center">
    <div 
    className="md:w-1/3">
      <label 
      className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" for="inline-full-name">
      Email
      </label>
    </div>
    <div 
    className="md:w-2/3">
    <input name='email' value = {email} onChange = {handleEmailChange}  
    className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500" id="inline-email" type="text" placeholder="Enter your name" />
    </div>
  </div>
  <div 
  className="mb-6 md:flex md:items-center">
    <div 
    className="md:w-1/3">
      <label 
      className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" for="inline-password">
        New Password
      </label>
    </div>
    <div 
    className="md:w-2/3">
      <input name='password'  type='password' value={password} onChange = {handlePasswordChange}  
      className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500" id="inline-password" placeholder="******************" />
    </div>
  </div>
  {/* <div 
  className="mb-6 md:flex md:items-center">
    <div 
    className="md:w-1/3">
      <label 
      className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" for="inline-password">
      Confrim  Password 
      </label>
    </div>
    <div 
    className="md:w-2/3">
      <input  
      className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500" id="inline-password" type="password" name='confrimPassword' value={confrimPassword} onChange={handlecomfrimpasswordChange} placeholder="******************"/>
    </div>
  </div> */}
  <div 
  className="mb-6 md:flex md:items-center">
    <div 
    className="md:w-1/3"></div>
    <label 
    className="block font-bold text-gray-500 md:w-2/3">
      <input 
      className="mr-2 leading-tight" type="checkbox"/>
      <span 
      className="text-sm">
        Send me your newsletter!
      </span>
    </label>
  </div>
  <div 
  className="md:flex md:items-center">
    <div 
    className="md:w-1/3"></div>
    <div 
    className="md:w-2/3">
    {/* <Link to='/register'>Sign in</Link> */}
    <button className="px-4 py-2 font-bold text-white bg-teal-500 shadow hover:bg-teal-400 focus:shadow-outline focus:outline-none roundeds">Regster</button>
    </div>
  </div>
</form>
      </div>
      
    </div>
  )
}
