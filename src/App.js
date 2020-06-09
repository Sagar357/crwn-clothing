import React from 'react';
import './App.css';
import HomePage from './Pages/homepage/Homepage.component';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth ,createUserProfileDocument} from './firebase/firebase.utils';

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
  this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
  //  createUserProfileDocument(user);
    // this.setState({currentUser:user});

    if (userAuth){
      const userRef= await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot =>{

        this.setState({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        });
        console.log(this.state);
      });
    }

    this.setState({currentUser:userAuth});

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