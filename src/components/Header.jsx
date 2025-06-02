import React, { useContext, createContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import logo from '../logo.png';
import { UserContext } from '../data/UserContext';
import { useSelector } from 'react-redux';

function Header() {
    const {LoggedInUser, setLoggedInUser} = useContext(UserContext);
    const Location = useLocation();

    const navigate = useNavigate();

    const cartItems = useSelector((store)=>{
       return store.cart.items;
    });

    const handleLogin = () => {
        if(LoggedInUser){
            setLoggedInUser("");
        } else {
            navigate("/login")
        }
    }

  return (
    <div className="AppContainer bg-amber-100">
        <div className="AppHeader p-4 flex justify-between align-items-center">
            <div className="AppBranding">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="AppNavigation pt-2">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cart">Cart ({cartItems.length} Items)</Link>
                    <button className='bg-black text-white py-2 px-4 rounded cursor-pointer font-bold hover:bg-amber-600 hover:text-white transition-all transition-delay-100' onClick={handleLogin}>{!LoggedInUser ? "Sign In" : "Sign Out"} </button>
                    {Location.pathname === '/' && !LoggedInUser && <span className="ml-2">Guest</span>}
                    {LoggedInUser && <Link className="font-bold">{LoggedInUser}</Link>}
                </nav>
            </div>
        </div>
    </div>
  )
}
export default Header;
