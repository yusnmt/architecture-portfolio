import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#home'>Background</a></p>
  <p><a href='#home'>Creative AI</a></p>
  <p><a href='#home'>Design Process</a></p>
  <p><a href='#home'>Architecture</a></p>
  <p><a href='#home'>Perspective</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ap__navbar'>
      <div className='ap__navbar-links'>
        <div className='ap__navbar-links-logo'>
        </div>
        <div className='ap__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="ap__navbar-sign">
        <button type="button">My profile</button>
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
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar