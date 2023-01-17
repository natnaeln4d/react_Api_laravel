import axios from 'axios';
import React, { Component } from 'react'

export default class Datafecth extends Component {
  constructor(props) {
    super(props)
     this.handlebtn=this.handlebtn.bind(this);
    this.state = {
       error:null,
       IsLoaded:false,
       items:[],
       user: {},
       users: []
    }
  }
  
  handlebtn=()=>{
    let user = JSON.parse(localStorage.getItem("token"));
    if(!user){
      console.log("unauthorithed user")
    }
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
  
  http.get('http://127.0.0.1:8000/api/post').then((res)=>{
      this.setState({
        IsLoaded:true,
        items:res.data,
        user:JSON.parse(localStorage.getItem("loged_in_status")),
        users: { loading: true }
      },(error)=>{
        this.setState({
          IsLoaded:false,
          error
        })
      })
    })
    if(this.state.error){
     return(
      <did>Error:{this.error.message}</did>
     )
    }
    else if(!this.state.IsLoaded){
      return(
        <did>Loading....</did>
      )
  }
  else{
    return(
    <div>
      {
        this.state.items.map(items=>{
          <div><ul>
            <li>{items.title}</li>
            <li>{items.discription}</li></ul></div>
        })
      }
    </div>
    )

  }
}
  
  render() {
    return (
      <div>
        <button className="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 roundeds" onSubmit={this.handlebtn}>click To Data</button>
      </div>
    )
  }
}
