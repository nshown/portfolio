import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      console.log("changing width");
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  const toggleNav = () => {
    setToggleMenu(prevToggleMenu => !prevToggleMenu);
  }

  const hideMenu = () => {
    setToggleMenu(false);
  }

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <Link onClick={hideMenu} className='glow' to="/">Home</Link>
          </li>
          <li className='nav-list-item'>
            <Link onClick={hideMenu} className='glow' to="/about">About</Link>
          </li>
          <li className='nav-list-item'>
            <Link onClick={hideMenu} className='glow' to="/contact">Contact</Link>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="glow btn">&#9776;</button>

    </nav>);
}

export default Nav;
