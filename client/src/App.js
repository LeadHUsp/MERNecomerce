import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePageContainer from "./components/Pages/HomePage/HomePageContainer";
import Header from "./components/Includes/Header/Header";

import "./assets/scss/main.scss";
import { connect } from "react-redux";
import { loadUser } from "./redux/reducers/authReducer";

class App extends React.Component {
  /*   componentDidMount() {
    if (localStorage.token) {
      this.props.loadUser();
    }
  } */
  /*  componentDidUpdate(prevProps) {
    if (prevProps.isAuth !== this.props.isAuth) {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      this.props.loadUser();
    }
  } */

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          {/*  <Route /> */}
          {/*   <Login /> */}
          {/*     <RegisterForm /> */}
          <HomePageContainer />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};
export default connect(mapStateToProps, { loadUser })(App);
