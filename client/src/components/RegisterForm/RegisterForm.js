import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { register } from "redux/reducers/authReducer";

import style from "./RegisterForm.module.scss";

const RegisterForm = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = data;
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    props.register({ name, email, password });
  };
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <form className={style.login_form}>
      register form
      <div className={style.login_input}>
        <input
          value={name}
          onChange={onChange}
          name='name'
          type='text'
          placeholder='name'
        />
      </div>
      <div className={style.login_input}>
        <input
          value={email}
          onChange={onChange}
          name='email'
          type='text'
          placeholder='email'
        />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className={style.login_input}>
        <input
          value={password}
          onChange={onChange}
          name='password'
          type='text'
          placeholder='password'
        />
      </div>
      <button onClick={onSubmit}>Register</button>
    </form>
  );
};

export default connect(null, { register })(RegisterForm);
