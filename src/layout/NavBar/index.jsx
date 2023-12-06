import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const NavBar = () => {

  const activeStyle = {
    textDecoration: "underline",
    color: "darkblue"
  };

  return (
    <>
    <nav>
        <h2>Logo</h2>
        <ul className='nav-links'>
          <li><NavLink to='/' 
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Home</NavLink></li>
          <li><NavLink to='/fav-band' 
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Favourite Band</NavLink></li>
          <li><NavLink to='/fav-songs' 
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Favourite Songs</NavLink></li>
        </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default NavBar