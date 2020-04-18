import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop_page";
import Header from "./components/header/header";
import AuthPage from "./pages/authorization/auth_page";

function App() {
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

export default App;
