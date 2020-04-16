import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop_page";

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </>
    );
}

export default App;
