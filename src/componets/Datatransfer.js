import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class Datatransfer extends Component {
    constructor (props) {
        super(props)
        this.state = {
          title: '',
         discription: '',
         Error:null
        }
      
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
      }
       
        onChangeValue(e) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
      
        onSubmitButton=async(e)=> {
            e.preventDefault();
            console.log(this.state.title);
                try{
                    const response= await axios.post('http://127.0.0.1:8000/api/post',{title: this.state.title,
                    discription: this.state.discription})
                    if(!response.ok){
                    
                    }
                }
                catch(error){
                    console.log(error.response);
                }
           
            this.setState({
                title:'',
                discription: ''
            })
        }
       
      componentDidMount () {
      }
  render() {
    return (
//         <div class="justify-center items-center py-3">
//     <div class="w-full item-center justify-center">
//     <h1 class="text-3xl text-center text-cyan-500 t">DataForm</h1>
//     </div>
//      <form class="w-full max-w-[70rem]" onSubmit={this.onSubmitButton}>
// <div class="md:flex md:items-center mb-6">
// <div class="md:w-1/3">
//   <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
//     title
//   </label>
// </div>
// <div class="md:w-2/3">
//   <input name='title' onChange={this.onChangeValue} value={this.state.title} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-full-name" type="text" placeholder='Enter title'/>
// </div>
// </div>
// <div class="md:flex md:items-center mb-6">
// <div class="md:w-1/3">
//   <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
//     Discription
//   </label>
// </div>
// <div class="md:w-2/3">

// <textarea name='discription' onChange={this.onChangeValue} value={this.state.discription} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-full-name" type="text" placeholder='Enter title'></textarea>
// </div>
// </div>
// {/* <div class="md:flex md:items-center mb-6">
// <div class="md:w-1/3"></div>
// <label class="md:w-2/3 block text-gray-500 font-bold">
//   <input class="mr-2 leading-tight" type="checkbox"/>
//   <span class="text-sm">
//     Send me your newsletter!
//   </span>
// </label>
// </div> */}
// <div class="md:flex md:items-center">
// <div class="md:w-1/3"></div>
// <div class="md:w-2/3">
//   <button class="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//     Regter
//   </button>
// </div>
// </div>
// </form>
    
//   </div>
<div className="justify-center items-center py-3">
{Error &&<div>{this.state.Error}</div>}
<div className="w-full item-center justify-center">
    <div className="col-md-8">
        <div className="card">
            <div className="card-header">Example Component</div>

            <div className="card-body">
                <form className='w-full max-w-[70rem]' onSubmit={this.onSubmitButton}>
                    <strong>Name:</strong>
                    <input type="text"  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" name="title" value={this.state.title} onChange={this.onChangeValue} />
                    <strong>Description:</strong>
                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" name="discription" value={this.state.discription} onChange={this.onChangeValue}></textarea>
                    <button className="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 roundeds">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    )
  }
}
