import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.scss';

const NavBar = ({ navBarSearchValue, setNavBarSearchValue, resetNavBarSearchValue }) => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link to="/recipes/" className="nav-link">Cook Book</Link>
            </li>
            <li className="navbar-item">
              <Link to="/recipes/add/" className="nav-link">Create Recipe</Link>
            </li>
          </ul>
        </div>
        <div
          className={
            useLocation().pathname === '/recipes/' ?
              'navbar-nav navBarSearchInput--show' :
              'navbar-nav navBarSearchInput--hide'
          }
        >
          <div className="navbar-nav">
            <div className="d-flex align-items-center">
              <span className="position-relative bg-white">
                <input
                className="searvh-recipes-input"
                type="text"
                placeholder="Search Recipe"
                value={navBarSearchValue}
                onChange={(e) => setNavBarSearchValue(e.target.value)}
                />
                <span
                  className="reset_search"
                  onClick={resetNavBarSearchValue}
                >
                  &times;
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;
