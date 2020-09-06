import React from "react";
import { useSelector } from "react-redux";
import NavBar from "components/NavBar/NavBar";
import HeaderPanel from "components/Includes/HeaderPanel/HeaderPanel";
import Login from "components/Login/Login";

import s from "./Header.module.scss";

const Header = () => {
  const showLoginForm = useSelector((state) => state.authReducer.showLoginForm);

  return (
    <header className={`${s.header}`}>
      <div className={s.navbar_wrapper}>
        <NavBar />
      </div>
      <div className={s.panel_wrapper}>
        <HeaderPanel />
      </div>
      {showLoginForm && <Login />}
    </header>
  );
};

export default Header;
