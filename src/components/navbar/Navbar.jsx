import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

import logo from '../../assets/logo.png';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#research'>Background</a></p>
  <p><a href='#creativeAI'>Creative AI</a></p>
  <p><a href='#process'>Design Process</a></p>
  <p><a href='#architecture'>Architecture</a></p>
  <p><a href='#perspective'>Perspective</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ap__navbar'>
      <div className='ap__navbar-links'>
        <div className='ap__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='ap__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="ap__navbar-sign">
        <a href="#profile">My profile</a>
      </div>
      <div className="ap__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ap__navbar-menu_container scale-up-center">
          <div className="ap__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="ap__navbar-menu_container-links-sign">
            <a href="#profile">My profile</a>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar