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
  
    // const url = "http://127.0.0.1:8000/api/post";

    const fetchData = async () => {
      try {
        
        if(!user){
          console.log("unauthorithed user")
        }
        const response = await fetch("http://127.0.0.1:8000/api/post",{
          method:"GET",
          headers:{
            'content-Type':'application/json',
            "Authorization":`Bearer ${user}`
          }
        })
        const json = await response.json();
        console.log(json)
        let x=9
        if (x===10) {
          console.log(true)
        }
        else{
          console.log(false)
        }
        setIsloaded({
            isLoaded:json.status
        })
          setItems(json.posts)
        console.log(json);
      } catch (error) {
        console.log("error", error);
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


