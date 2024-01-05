import React from 'react';

function Navbar() {
  return (
    <div className="col-md-12">
      <nav className="navbar justify-content-end">
        <ul className="nav">
          <li className="nav-item">
            <a href='/' className='nav-link text-dark'> Gmail </a>
          </li>
          <li className="nav-item">
            <a href='/' className='nav-link text-dark'>images</a>
          </li>
          <li className="nav-item">
            <a href='/' className='nav-link text-dark'>
              <i className="fa fa-th"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href='/' className='nav-link text-dark'>
              <i className="fa fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
