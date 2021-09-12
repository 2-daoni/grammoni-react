import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import { Button } from './button.js';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo">
            <i class="fas fa-pen-fancy"></i>
            GRAMMONI
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <i class="fas fa-bars"></i> : <i class="fas fa-times"></i>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-items'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-items'>
              <Link to='/product' className='nav-links'>
                Product
              </Link>
            </li>
            <li className='nav-items'>
              <Link to='/about' className='nav-links'>
                About
              </Link>
            </li>
            <li className='nav-items'>
              <Link to='/review' className='nav-links'>
                Review
              </Link>
            </li>
            <li className='nav-btn'>
              {button ? (
                <Link to='/sign-up' className='btn-link'>
                  <Button btnStyle='btn--outline'>SIGN UP</Button>
                </Link>
              ) : (
                  <Link className="btn-link">
                    <Button btnStyle='btn--outline' btnSize='btn--mobile'>SIGN UP</Button>
                  </Link>
              )}
              
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;
