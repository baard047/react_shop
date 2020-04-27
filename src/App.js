import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/selectors/user_selectors";

import { auth, createUserRecord } from './firebase/firebase_utils';
import { setCurrentUser } from "./redux/actions/user_actions";

import './App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop_page";
import Header from "./components/header/header";
import AuthPage from "./pages/authorization/auth_page";
import CheckoutPage from "./pages/checkout/checkout_page";


class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        //this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
        //    if ( user ) {
        //        const userRef = await createUserRecord(user);
        //        userRef.onSnapshot(snapshot => {
        //            setCurrentUser({
        //                id: snapshot.id,
        //                ...snapshot.data()
        //            });
        //        });
        //    }
        //    else {
        //        setCurrentUser(null);
        //    }
        //});
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path='/' component={ HomePage }/>
                    <Route path='/shop' component={ ShopPage }/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/authorization'
                           render={ () => this.props.currentUser ? (<Redirect to='/'/>) : (<AuthPage/>) }/>
                </Switch>
            </>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
