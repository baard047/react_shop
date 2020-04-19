import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';

import {auth, createUserRecord} from './firebase/firebase_utils';
import {setCurrentUser} from "./redux/actions/user_actions";

import './App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop_page";
import Header from "./components/header/header";
import AuthPage from "./pages/authorization/auth_page";


class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserRecord(user);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            }
            else { setCurrentUser(null); }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/authorization' component={AuthPage}/>
                </Switch>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
