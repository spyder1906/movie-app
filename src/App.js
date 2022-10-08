import React from "react";
import {useLogify} from 'react-logify';
import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routes from "./config/Routes";
import Login from "./components/login/Login";

function App() {
  const { user, onLogin, onLogout } = useLogify();

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            {!user.id && <Login onLogin={onLogin}/>}
            {user?.id && (
              <>
                <Header {...props} userName={user?.name} onLogout={onLogout}/>
                <Routes />
                <Footer />
              </>
            )}
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
