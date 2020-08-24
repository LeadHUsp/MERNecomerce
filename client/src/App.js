import React from "react";

import { BrowserRouter } from "react-router-dom";
import HomePageContainer from "./components/Pages/HomePage/HomePageContainer";
import Header from "./components/Includes/Header/Header";
import Login from "./components/Login/Login";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "./assets/scss/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Login />
      <RegisterForm />
      <HomePageContainer />
    </BrowserRouter>
  );
}

export default App;
