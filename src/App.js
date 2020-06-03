import React from 'react';
import './App.css';
import HomePage from './Pages/homepage/Homepage.component';
import { Switch ,Route } from 'react-router-dom';

const hatspage=()=>(
  <div>
    <h1>
      HATS
    </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  exact path='/hats' component={hatspage} />
      </Switch>
    </div>
  );
}

export default App;