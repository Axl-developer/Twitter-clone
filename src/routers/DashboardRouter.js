import React from 'react'
import {Switch,Route, Redirect} from "react-router-dom";
import { Bookmarks } from '../components/Bookmarks/Bookmarks';
import { Explore } from '../components/Explore/Explore';
import { Home } from '../components/Home/Home';
import { ListsScreen } from '../components/Lists/ListsScreen';
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

                <Route exact path="/bookmarks" component={Bookmarks}/>

                <Route exact path="/lists" component={ListsScreen}/>


                <Redirect to="/home" />
            </Switch>
        </div>
    )
}
