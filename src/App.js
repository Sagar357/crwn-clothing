import React from 'react';
import './App.css';
import HomePage from './Pages/homepage/Homepage.component';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {

constructor()
{
  super();
  this.state={
    currentUser:null
  }
}

unSubscribeFromAuth=null;

componentDidMount(){
  this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user});
    console.log(user);
  });
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}

  render()
  {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
              <Route  exact path='/' component={HomePage} />
              <Route  exact path='/shop' component={ShopPage} />
              <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  }
  

export default App;