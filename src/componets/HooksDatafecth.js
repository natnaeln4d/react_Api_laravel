import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react'

export default function HooksDatafecth() {
 const [isLoaded,setIsloaded]=useState(false);
 const [error,setError]=useState(null);
 const [items,setItems]=useState(null);



 useEffect(() => {
    const url = "http://127.0.0.1:8000/api/post";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
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
    };

    fetchData();
}, []);


    
    
  
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.title} {item.discription} 
              </li>
            ))}
          </ul>
        );
      }
    }


