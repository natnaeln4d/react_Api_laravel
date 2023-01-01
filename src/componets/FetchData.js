import axios from 'axios';
import React, { Component } from 'react'

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
       try{
        axios.get("http://127.0.0.1:8000/api/post")
        .then((response) => {
          console.log(response)
          this.setState({
            items:response.data.posts,
            status:response.data.status,
            isLoaded:true
          })
        }).catch((error)=>{
        this.setState({
          isLoaded:false,
        
          error
        })
        })

        // .then(
        //   (result) => {
        //     this.setState({
        //       isLoaded: true,
        //       items: result.items
        //     });
        //   },
        
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   }
        // )

       }catch(error){
        console.log(error)
       }
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
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
}
