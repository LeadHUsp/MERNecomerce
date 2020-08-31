import React from "react";
import NavBar from "components/NavBar/NavBar";

import style from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={`${style.header}`}>
      <NavBar />
    </header>
  );
};

export default Header;
