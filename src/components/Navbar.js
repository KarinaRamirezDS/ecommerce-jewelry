import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.setItem("token", "");
        navigate("/login");
    }

  return( 
       <nav>
    
        
         <Link className="linkLista" to="/shop">Shop</Link>
         <div className="shop">  
          <Link  className="linkLista2" to="/card"> <i className="fas fa-shopping-cart"> </i> </Link>
          <button className="linkLista2" onClick={logOut}> <i className="fas fa-sign-out-alt"> </i> </button>
          </div>
        </nav>
  );
};

export default Navbar;
