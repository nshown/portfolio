import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


function Nav() {

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentPage.name);
  // }, [currentPage]);

  return (
    <nav className="Nav">
      <div className="Nav__container">
        <ul className="Nav__item-wrapper">
          <li className="Nav__item">
            <Link className="Nav__link" to="/">Home</Link>
          </li>
          <li className="Nav__item">
            <Link className="Nav__link" to="/about">About</Link>
          </li>
          <li className="Nav__item">
            <Link className="Nav__link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>);
}

export default Nav;
