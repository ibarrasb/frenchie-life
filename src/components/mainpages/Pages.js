import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Studs from './studs/Studs'
import Puppies from './puppies/Puppies'
import Contact from './contact/Contact'
import NotFound from './utils/not_found/NotFound'
import Home from './home/Home'
function Pages() {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/studs' exact component={Studs}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/puppies' exact component={Puppies}/>

            <Route path='*' exact component={NotFound}/>
        </Switch>
    );
}

export default Pages;