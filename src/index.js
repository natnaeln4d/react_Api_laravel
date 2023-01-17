import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataTransfer from './componets/Datatransfer'
import reportWebVitals from './reportWebVitals';
import TheApp from './componets/TheApp';
import RegsterHook from './componets/RegsterHook';
import NotFound from './NotFound';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import HooksDatafecth from './componets/HooksDatafecth';
import Datafecth from './componets/Datafecth';
import Forgetpassword from './Forgetpassword';
// const router = createBrowserRouter(
// [
//   {
//     path:"/",
//     element:<TheApp />,
//     children:[
//       {
//         path:"Datatransfer",
//         element:<DataTransfer />
//       },
//       {
//         path:"RegisterHook",
//         element:<RegsterHook />
//       }
//     ]
//   }
// ]

// );
//  <Routes>
// <Route path='RegsterHook' component={RegsterHook} />
//   <Route path='/src/componets/Datatransfer.js' element={DataTransfer} />
//   <Route component={NotFound} />
// </Routes> 

ReactDOM.createRoot(document.getElementById("root")).render(
 <Router>
  <Routes>
    <Route path='/' element={<TheApp />} />
    <Route path='/datatransfer' element={<DataTransfer />} />
    <Route path='/hookfetch'  element={<HooksDatafecth />} />
    <Route path='/datafecth' element={<Datafecth />} />
    <Route path='/registerhook' element={<RegsterHook />} />
    <Route path='/forgotpassword' element={<Forgetpassword />} />
  </Routes>
  
 </Router>
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <BrowserRouter>
//   <Router>
 
       
//           <TheApp />
//   </Router>
//   // </BrowserRouter>
 
// );
// const app=ReactDOM.createRoot(document.getElementById('app'));
// app.render(
//   <React.StrictMode>
//     <t
//   </React.StrictMode>

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
