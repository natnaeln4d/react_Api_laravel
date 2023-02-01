// import axios from 'axios'
// import React, { Component } from 'react'

// export default class Dropdown extends Component {
//   constructor(props) {
//     super(props)
//     this.handlesubmit=this.handlesubmit.bind(this)
//     this.state = {
       
//     }
//   }

  
//  handlesubmit=async()=>{

//   const http=axios.create({
//     baseURL:'localhost:8000.my-app.test',
//     headers:{
//         'X-Requested-with':'XMLHttpRequest',
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     withCredentials:true,
// });
//    const response=await http.post('http://127.0.0.1:8000/api/auth/logout');
//    const json=await response.json();
//    console.log(json);
   
    
//  }
  
//   render() {
//     return (
//         <div>
        
//        <form onSubmit={this.handlesubmit}>
//        {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-600 hover:bg-teal-200 mt-4 lg:mt-0t focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">more <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> */}
//        <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-600 hover:bg-teal-200 mt-4 lg:mt-0t focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
//     logout 
//   </button>
   
// {/* <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
//  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
  
//          <li><a class="dropdown-item" href="#"> Home</a></li>
//          <li><a class="dropdown-item" href="#">Channel</a></li>
//          <li><a class="dropdown-item" href="#">Edit profile</a></li>
//          <li><a class="dropdown-item" href="#">Upload Video</a></li>
//      </ul>  
//      </div> */}
//      </form>
   
//  </div>
//     )
//   }
// }
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';


export default function Dropdown() {
let check=false
const[dropdown,setDropdown]=useState(false);
const navigate=useNavigate();


//   const http=axios.create({
//     baseURL:'localhost:8000.my-app.test',
//     headers:{
//         'X-Requested-with':'XMLHttpRequest',
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     withCredentials:true,
// });

const handlesubmit=(e)=>{
  e.preventDefault()
  localStorage.removeItem("token");
  // navigate('/',{replace:true});
  check=true
  if(check){
    navigate('/',{replace:true});
 
    console.log(check)
    
  }
  else{
    console.log("can't logout")
  }
  

  

    
 }
 const handleclick=(e)=>{
  e.preventDefault()
  setDropdown((pre)=>    
      !pre.dropdown
    
  )

 }
 

  return (
    <div>
      
             <form onSubmit={handlesubmit}> 
       {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-600 hover:bg-teal-200 mt-4 lg:mt-0t focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">more <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> */}
        <button  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-600 hover:bg-teal-200 mt-4 lg:mt-0t focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"> 
    logout 
  </button>
   
  {
    
    dropdown&&
    (<div className="absolute right-0 z-10 w-48 py-1 mt-2 ml-8 origin-top-right bg-teal-700 rounded-md shadow-lg drop dropdown ring-1 ring-black ring-opacity-5 focus:outline-none">
       
       <option className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><a href="#" >
       Profile</a></option>
       <option className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><a href="#" >Setting</a></option>

       <option className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-3"><a href="#" onClick={handleclick} >Sign out</a></option>

     </div>
     )}
     </form>
      
    </div>
  )
}

