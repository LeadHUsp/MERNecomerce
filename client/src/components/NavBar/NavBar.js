import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

const NavBar = (props) => {
  return (
    <nav className={s.nav_bar}>
      <ul className={`${s.nav_list} `}>
        <li className={s.nav_item}>
          <NavLink className={s.nav_item} to='/'>
            Home
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <NavLink className={s.nav_item} to='/shop'>
            Shop
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <NavLink className={s.nav_item} to='/contacts'>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
