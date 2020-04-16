import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from "./pages/homepage/homepage";

const HatsPage = () => (
    <>
        <h1>HATS PAGE</h1>
    </>
);

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop/hats' component={HatsPage}/>
            </Switch>
        </>
    );
}

export default App;
