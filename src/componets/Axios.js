import React, { Component } from 'react';
import axios from 'axios';


class Axios extends Component {
  
    constructor(props) {
      super(props)
      this.getapi=this.getapi.bind(this)
      this.state = {
        error:null,
               isLoaded:false,
              items:[]
      }
    }
getapi = () =>{
    axios.get('https://www.rd.com/list/short-jokes/').then(
        (res)=>{

        res.json()
        }
    ).then(
      (res)=>{
        this.setState({
          isLoaded:true,
          data:res.items
        },  
        (error)=>{
         this.setState({
          isLoaded:true,
          error
         })

        })
      
      }
    )
    if(this.error){
      return(
          <did>Error:{this.error.message}</did>
      )
  }
      else if(!this.Isloaded){
          return <did>
       loading....
          </did>

      }
      else{
        return (
          <div>
              {
                  this.items.map((item)=> (
                          <div>{item}</div>
                      )
                  
                  
                  )
              }
            
          </div>
        )
      }

    }
  render() {
    return (
      <div><button onClick={this.getapi}>click</button></div>
    )
  }
}
export default Axios;
// import React, { Component } from 'react'
// import axios from 'axios';

// export default class Axios extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        error:null,
//        isLoaded:false,
//        items:[]
//     }
//   }
//   componentDidCatch(){
//     fetch("https://www.youtube.com/watch?v=IcchYWg28LQ'")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           isLoaded: true,
//           items: result.items
//         });
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
// }

// render() {
//   const { error, isLoaded, items } = this.state;
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
// }

