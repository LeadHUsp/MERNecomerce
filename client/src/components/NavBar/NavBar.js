import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  return (
    <nav className={`${s.navbar} container`}>
      <NavLink to='/' className={`${s.logo}`}>
        Gadget-shop
      </NavLink>
      <ul className={`${s.navbar_collapse}`}>
        <li>
          <NavLink className={`${s.nav_item}`} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={`${s.nav_item}`} to='/shop'>
            Shop
          </NavLink>
        </li>
        <li>
          <button className=''>Log In</button>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
