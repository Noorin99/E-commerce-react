
import './App.css';

import React from 'react';
import Homepage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';
import {Route, Switch} from 'react-router-dom';
import SignInAndSignUpPage from './Pages/sign-in-sign-up/sign-in-sign-up';
import Header from './Components/header/header';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }
  
  unsubscribeFromAuth = null 

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    }
    )
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );

  };
  
}

export default App;
