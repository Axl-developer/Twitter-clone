import React from 'react'
import {Switch,Route, Redirect} from "react-router-dom";
import { Explore } from '../components/Explore/Explore';
import { Home } from '../components/Home/Home';
import { Messages } from '../components/Messages/Messages';
import { Notifications } from '../components/Notifications/Notifications';

export const DashboardRouter = () => {
    return (
        <div className="body">
            <Switch>
                <Route exact path="/home" component={Home}/>

                <Route exact path="/explore" component={Explore}/>

                <Route exact path="/notifications" component={Notifications}/>

                <Route exact path="/messages" component={Messages}/>

                <Redirect to="/home" />
            </Switch>
        </div>
    )
}
