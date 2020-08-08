import React from 'react';
import './App.css';
import HomePage from './Pages/homepage/Homepage.component';
import { Switch ,Route ,Redirect } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth ,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/User/user.actions';
import { selectCurrentUser } from './Redux/User/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './Pages/checkout/checkout.component';

class App extends React.Component {

unSubscribeFromAuth=null;

componentDidMount(){
  this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
  //  createUserProfileDocument(user);
    // this.setState({currentUser:user});

    if (userAuth){
      const userRef= await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot =>{

        this.props.setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
        });
        console.log(this.state);
      });
    }

    this.props.setCurrentUser(userAuth);

  });
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}

  render()
  {
    return (
      <div>
        <Header />
        <Switch>
              <Route  exact path='/' component={HomePage} />
              <Route  exact path='/shop' component={ShopPage} />
              <Route  exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to="/" ></Redirect>) :(<SignInAndSignUp></SignInAndSignUp>)} />
        </Switch>
      </div>
    );
  }
  }
  
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchaToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))

})
export default connect(mapStateToProps ,mapDispatchaToProps)(App);