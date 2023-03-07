import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
    }
    

  return (
      <div className='header'>
          <Link to="/">
             <img className='header_logo' src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png' alt='' /> 
          </Link>
          
          
          <div className='header_search'>
              <input className="header_search_input" type="text" />
              <SearchIcon className='header_search_icon' />
          </div>

          <div className='header_nav'>
              <Link to={!user && "/login"}>
              <div className='header_option' onClick={handleAuthenticaton}>
                  <span className='header_optionlineone'>Hello {user?.email}</span>
                  <span className='header_optionlinetwo'>{user ? "Sign Out" : "Sign In"}</span>
              </div>
              </Link>
              

              <div className='header_option'>
                  <span className='header_optionlineone'>Returns</span>
                  <span className='header_optionlinetwo'>& Orders</span>
              </div>

              <div className='header_option'>
                  <span className='header_optionlineone'>Your</span>
                  <span className='header_optionlinetwo'>Prime</span>
              </div>

              <Link to="/checkout">
                  
              <div className='header_basket'>
                  <ShoppingBasketIcon />
                  <span className='header_optionlinetwo header_basketcount'>{basket?.length}</span>
              </div>
                  
              </Link>

              
          </div>
         
    </div>
  )
}

export default Header
