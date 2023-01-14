import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react'
import NarBar from './NarBar';

export default function HooksDatafecth() {
 const [isLoaded,setIsloaded]=useState(false);
 const [error,setError]=useState(null);
 const [items,setItems]=useState(null);
  // const 


 useEffect(() => {
  let user = JSON.parse(localStorage.getItem("token"));
  
    const http=axios.create({
      baseURL:'localhost:8000.my-app.test',
      headers:{
          'X-Requested-with':'XMLHttpRequest',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         ' Authorization': `Bearer ${user}`
          
          
      },
      withCredentials:true,
    })
  
    const fetchData = async () => {
      if(user){
      try {
        const response = await http.get('http://127.0.0.1:8000/api/post');
        const json = await response.json();
        console.log(json)
        setIsloaded({
            isLoaded:json.status
        })
          setItems(json.posts)
        console.log(json);
      } catch (error) {
        console.log("error", error);
      
    }
  }
  
  };

    fetchData();
}, []);


    
  
    if (error) {
        return <div>
          <NarBar/>
          Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>
            <NarBar/>
          Loading...</div>;
      } else {
        return (
          <div>
            <NarBar />
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.title} {item.discription} 
              </li>
            ))}
          </ul>
          </div>
        );
      }
    
    }


