import React, { useState } from 'react';

import Navigation from './components/navigation';
import Footer from './components/footer';
import Login from './pages/Login';

import 'bootstrap3/dist/css/bootstrap.min.css';
import './scss/styles.scss';


export default function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLogin = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false)
  }

return (isLoggedIn) ?
  (
    <div className="[ row ]">
      <div className="[ col-sm-12 ]">
        <Navigation />
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#home" onClick={logout}><span className="[ glyphicon glyphicon-log-in ]"></span> Logout</a></li>
        </ul>
        {props.children}
      </div>
      <Footer />
    </div>
  ) :
  (
    <Login updateLoginStatus={updateLogin} />
  );
}