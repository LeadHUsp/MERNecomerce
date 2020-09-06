import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUserStart } from "redux/reducers/authReducer";

import style from "./RegisterForm.module.scss";

const RegisterForm = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = data;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    props.registerUserStart(data);
  };
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.head}>Регистрация</div>

      <div className={style.input}>
        <input
          value={name}
          onChange={onChange}
          name='name'
          type='text'
          placeholder='name'
        />
      </div>
      <div className={style.input}>
        <input
          value={email}
          onChange={onChange}
          name='email'
          type='text'
          placeholder='email'
        />
      </div>
      <div className={style.input}>
        <input
          value={password}
          onChange={onChange}
          name='password'
          type='text'
          placeholder='password'
        />
      </div>
      <button className={style.btn}>Зарегистрироватся</button>
    </form>
  );
};

export default connect(null, { registerUserStart })(RegisterForm);
