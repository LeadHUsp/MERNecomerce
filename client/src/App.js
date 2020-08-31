import React from "react";

import { BrowserRouter } from "react-router-dom";
import HomePageContainer from "./components/Pages/HomePage/HomePageContainer";
import Header from "./components/Includes/Header/Header";
import Login from "./components/Login/Login";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "./assets/scss/main.scss";
import { connect } from "react-redux";
import { loadUser } from "./redux/reducers/authReducer";
import setAuthToken from "./helpers/setAuthToken";

class App extends React.Component {
  componentDidMount() {
    this.props.loadUser();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isAuth !== this.props.isAuth) {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      this.props.loadUser();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Login />
        <RegisterForm />
        <HomePageContainer />
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
