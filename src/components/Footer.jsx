import React from 'react';
import logo from '../logo.png';

const Footer = () => {
  return (
    <div className='FooterBlock text-center bg-black p-4'>
        <div className="w-40 m-auto mb-2">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className='text-white font-bold font-sm'>© 2025 Swiggy Limited</p>
    </div>
  )
}

export default Footer