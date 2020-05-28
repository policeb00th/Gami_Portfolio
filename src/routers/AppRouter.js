import HomePage from '../components/HomePage';
import WorkPage from '../components/WorkPage';
import ErrorPage from '../components/ErrorPage';
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'


const AppRouter=()=>(
    <BrowserRouter>
    <Switch>
    <Route path="/" exact={true} component={HomePage}/>
    <Route path ="/MyWork" component = {WorkPage}/>
    <Route component={ErrorPage}/>
    </Switch>
    </BrowserRouter>
)
export default AppRouter