import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import { auth } from './firebase/firebase_utils';

import './App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop_page";
import Header from "./components/header/header";
import AuthPage from "./pages/authorization/auth_page";

class App extends Component {
    state = {  //TODO change on userContext hook
        currentUser: null
    };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
            this.setState({ currentUser: user })
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return(
            <>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/authorization' component={AuthPage}/>
                </Switch>
            </>
        );
    }
}

export default App;
