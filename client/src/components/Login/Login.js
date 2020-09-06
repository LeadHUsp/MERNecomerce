import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { setHideLoginForm, loginStart } from "redux/reducers/authReducer";

import style from "./Login.module.scss";
import RegisterForm from "components/RegisterForm/RegisterForm";

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isLogin, setisLogin] = useState(true);
  const layerEl = useRef(null);

  const hideLayer = (e) => {
    if (e.target === layerEl.current) {
      props.setHideLoginForm();
    }
  };
  const showRegisterForm = () => {
    setisLogin(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.loginStart(data);
  };
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div className={style.layer} onClickCapture={hideLayer} ref={layerEl}>
      {isLogin ? (
        <form className={style.form} onSubmit={onSubmit}>
          <div className={style.head}>Войти</div>
          <div className={style.input}>
            <input name='email' type='text' placeholder='email' onChange={onChange} />
          </div>
          <div className={style.input}>
            <input
              name='password'
              type='password'
              placeholder='password'
              onChange={onChange}
            />
          </div>

          <button className={style.btn}>войти</button>
          <button className={style.btn_register} onClick={showRegisterForm}>
            Зарегестрироваться
          </button>
        </form>
      ) : (
        <RegisterForm />
      )}
    </div>
  );
};

export default connect(null, { setHideLoginForm, loginStart })(Login);
