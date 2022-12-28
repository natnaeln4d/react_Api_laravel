import React, { Component } from 'react'

export default class Dropdown extends Component {
  render() {
    return (
        <div>
  
        
        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-600 hover:bg-teal-200 mt-4 lg:mt-0t focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">more <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
   
<div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
 <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
  
         <li><a class="dropdown-item" href="#"> Home</a></li>
         <li><a class="dropdown-item" href="#">Channel</a></li>
         <li><a class="dropdown-item" href="#">Edit profile</a></li>
         <li><a class="dropdown-item" href="{{route('folder.uploadvideo')}}">Upload Video</a></li>
     </ul>  
     </div>
     
   
 </div>
    )
  }
}
