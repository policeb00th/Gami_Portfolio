import HomePage from '../components/HomePage';
import ErrorPage from '../components/ErrorPage';
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import UserInteractionPage from '../components/UserInteractionPage';
import DaysOfType from '../components/DaysofTypePage';
import General3DPage from '../components/General3DPage';
import WorkPage from '../components/WorkPage';
import VintagePage from '../components/VintagePosterPage';
import GeneralPosterPage from '../components/GeneralPosterPage';

const AppRouter=()=>(
    <BrowserRouter>
    <Switch>
    <Route path="/" exact={true} component={HomePage}/>
    <Route path ="/WorkPage" component={WorkPage}/>
    <Route path ="/UserInteraction" component = {UserInteractionPage}/>
    <Route path ="/DaysOfType" component={DaysOfType}/>
    <Route path ="/3D-design" component={General3DPage}/>
    <Route path="/Vintage" component={VintagePage}/>
    <Route path="/GeneralPoster" component={GeneralPosterPage}/>
    <Route component={ErrorPage}/>
    </Switch>
    </BrowserRouter>
)
export default AppRouter