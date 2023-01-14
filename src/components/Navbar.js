import React from 'react'
import logo from '../images/logo.png'
import '../css/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
    </div>
  )
}

export default Navbar