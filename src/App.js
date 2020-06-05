import React from 'react';
import './App.css';
import HomePage from './Pages/homepage/Homepage.component';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
            <Route  exact path='/' component={HomePage} />
            <Route  exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;