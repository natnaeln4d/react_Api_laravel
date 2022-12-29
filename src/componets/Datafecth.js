import { data } from 'autoprefixer';
import axios from 'axios'
import React, { Component } from 'react'

export default class Datafecth extends Component {

      constructor(...args) {
        super(...args);
        this.state = {data: null};
    }
    componentDidMount() {
        if (!this.state.data) {
            (async () => {
                try {
                    this.setState({data: await this.getData()});
                } catch (e) {
                    //...handle the error...
                }
            })();
        }
    }
  getapi =async() =>{
    try{
        const response= await fetch('http://127.0.0.1:8000/api/post')
       
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
      
          return await response.json();

          
    }
    catch(error){
        console.log(error.message)
    }
  }
    // }
    // //   axios.get('http://127.0.0.1:8000/api/post').then(
    // //       (response)=>{
  
    // //       response.json()
    // //       }
    // //   ).then(
    // //     (res)=>{
    // //       this.setState({
    // //         isLoaded:true,
    // //         data:res.items
    // //       },  
    // //       (error)=>{
    // //        this.setState({
    // //         isLoaded:true,
    // //         error
    // //        })
  
    // //       })
        
    // //     }
    // //   )
    //   if(this.error){
    //     return(
    //         <did>Error:{this.error.message}</did>
    //     )
    // }
    //     else if(!this.Isloaded){
    //         return <did>
    //      loading....
    //         </did>
  
    //     }
    //     else{
    //       return (
    //         <div>
    //             {
    //                 this.items.map((item)=> (
    //                         <div>{item}</div>
    //                     )
                    
                    
    //                 )
    //             }
              
    //         </div>
    //       )
    //     }
  
    //   }
    // render() {
    //   return (
    //     <div><button class="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"  onClick={this.getapi}>click</button></div>
    //   )
    // }
   
    render(){
        return (
            <div>
                {this.state.data ? <em>Loading...</em> : this.state.data}
            </div>
        );
    }
}
