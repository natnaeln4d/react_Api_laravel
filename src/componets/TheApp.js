import React, { useState,useEffect,useReducer } from 'react'
import Axios from './Axios'
import Datafecth from './Datafecth'
import Datatransfer from './Datatransfer'
import FetchData from './FetchData'
import HooksDatafecth from './HooksDatafecth'

import LoginHooks from './LoginHooks'
import NarBar from './NarBar'
import CatagoryContext from './context/CatagoryContext'
import ArticleReducer from './Reducer/ArticleRecucer'
import CatagoryReducer from './Reducer/CatagoryReducer'
import AuthReducer from './Reducer/AuthReducer'
import Users from './Users'
import RegsterHook from './RegsterHook'



export default function TheApp() {
  // const [auth,setAuth] = useState(false);
  //  const [isLoading,setIsloading] = useState(true);
  //  const [state,dispatch] = useReducer(ArticleReducer,[]);
  //  const [catagory,dispatchCatagory] = useReducer(CatagoryReducer,[]);
  //  const [authenticate,dispatchauth] = useReducer(AuthReducer,{auth: auth});
  return (
    <div>
    <NarBar />
    {/* <RegsterHook /> */}
    <LoginHooks />
    {/* <Datatransfer />
    <HooksDatafecth /> */}
    {/* <CatagoryContext.Provider 
       value = {
          {
             catagory,dispatchCatagory,authenticate,dispatchauth,auth
          }
       }
       >
         {/*  */}
       {/* </CatagoryContext.Provider> */} 
       {/* <Users /> */}
   
    {/* <Datafecth /> */}
    {/* <FetchData /> */}

  </div>
  )
}


