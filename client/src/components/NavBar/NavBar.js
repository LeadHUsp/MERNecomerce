import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import s from "./Nav.module.scss";
/* import { useSelector } from "react-redux"; */

const NavBar = (props) => {
  const [dropIsOpen, setdropIsOpen] = useState(false);

  return (
    <nav className={`${s.navbar}`}>
      <NavLink exact to='/' className={`${s.logo}`}>
        Gadget-shop
      </NavLink>
      <ul className={`${s.navbar_lists}`}>
        <li className={`${s.nav_item}`}>
          <NavLink
            exact
            activeClassName={s.active}
            className={`${s.nav_item_link}`}
            to='/'>
            главная
          </NavLink>
        </li>
        <li className={`${s.nav_item}`}>
          <button
            className={s.dropdown_toggle}
            onClick={() => {
              setdropIsOpen(!dropIsOpen);
            }}>
            Каталог{" "}
            <span>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
            </span>
          </button>{" "}
          <ul className={`${s.dropdown_lists} ${dropIsOpen && s.dropdown_show}`}>
            <li className={`${s.nav_item}`}>
              <NavLink
                exact
                activeClassName={s.active}
                className={`${s.nav_item_link}`}
                to='/smartphones'>
                Смартфоны
              </NavLink>
            </li>
            <li className={`${s.nav_item} `}>
              <NavLink
                exact
                activeClassName={s.active}
                className={`${s.nav_item_link}`}
                to='/game-consoles'>
                Игровые приставки
              </NavLink>
            </li>
            <li className={`${s.nav_item}`}>
              <NavLink
                exact
                activeClassName={s.active}
                className={`${s.nav_item_link}`}
                to='videocards'>
                Видеокарты
              </NavLink>
            </li>
            <li className={`${s.nav_item}`}>
              <NavLink
                exact
                activeClassName={s.active}
                className={`${s.nav_item_link}`}
                to='laptops'>
                Ноутбуки
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={`${s.nav_item}`}>
          <NavLink
            exact
            activeClassName={s.active}
            className={`${s.nav_item_link}`}
            to='/about_us'>
            О нас
          </NavLink>
        </li>
        <li className={`${s.nav_item}`}>
          <NavLink
            exact
            activeClassName={s.active}
            className={`${s.nav_item_link}`}
            to='/contacts'>
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
