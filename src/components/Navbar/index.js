import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          WebAPP
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/treks'>
            Treks
          </NavLink>
          <NavLink to='/points'>
            Points
          </NavLink>
          <NavLink to='/qr-scan'>
            Scan QR
          </NavLink>
          <NavLink to='/about-us'>
            About us
          </NavLink>
          <NavLink to='/contact-us'>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink>
         </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;