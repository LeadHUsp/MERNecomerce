import React from "react";
import NavBar from "../../NavBar/NavBar";

import style from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={`${style.header} container`}>
      <div className='col-5'>
        <NavBar />
      </div>
      <div className='col-7'></div>
    </header>
  );
};

export default Header;
