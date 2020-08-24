import React from "react";

import style from "./Login.module.scss";

const Login = (props) => {
  return (
    <form className={style.login_form}>
      <div className={style.login_input}>
        <input name='email' type='text' placeholder='email' />
      </div>
      <div className={style.login_input}>
        <input name='password' type='text' placeholder='password' />
      </div>
      <button>LOGIN</button>
    </form>
  );
};

export default Login;
