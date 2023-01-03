import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import CatagoryContext from '../../Contexts/CatagoryContext'

export const Header = () => {

  const {authenticate,dispatchauth} = useContext(CatagoryContext);

const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      dispatchauth({type: 'LOGOUT'});     
} 
  return (
    <nav>
      <div className='inside_nav'>
         <div className='nav_container'>
             <div className='left_link'>
               <Link to = '/'><h1>React Daily</h1></Link>
             </div>

      {
          authenticate.auth ? (
            <div className='right_link'>
                <div className='link_items'>
                  <p className='logout' onClick={handleLogout}>Logout</p>
                </div>
          </div>
          ):
          (
            <div className='right_link'>
                <div className='link_items'>
                    <Link to = '/login'>Login</Link>
                    <span>|</span>
                    <Link to = '/register'>Register</Link>
                </div>
            </div>
          )
      }
        </div>
      </div>
    </nav>
  )
}