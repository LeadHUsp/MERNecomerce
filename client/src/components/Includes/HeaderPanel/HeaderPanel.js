import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setShowLoginForm, setLogOut, loadUser } from "redux/reducers/authReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import s from "./HeaderPanel.module.scss";

const HeaderPanel = ({ setShowLoginForm, setLogOut, loadUser, isAuth, user }) => {
  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, [loadUser]);
  return (
    <>
      <div className={s.panel}>
        {isAuth ? (
          <>
            <div className={s.user_name}>
              Вы вошли как:
              <FontAwesomeIcon icon={faUser} /> {user.name}
            </div>
            <button
              className={s.log_in}
              onClick={() => {
                setLogOut();
              }}>
              <FontAwesomeIcon icon={faSignOutAlt} /> <span>Log out</span>
            </button>
          </>
        ) : (
          <button className={s.log_in} onClick={setShowLoginForm}>
            <FontAwesomeIcon icon={faUser} /> <span> Log in</span>
          </button>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps, { setShowLoginForm, setLogOut, loadUser })(
  HeaderPanel
);
