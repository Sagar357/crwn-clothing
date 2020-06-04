import React from 'react';
import './App.css';
import HomePage from './Pages/homepage/Homepage.component';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop.component.jsx';

function App() {
  return (
    <div>
      <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;