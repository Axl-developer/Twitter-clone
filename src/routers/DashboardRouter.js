import React from 'react'
import {Switch,Route, Redirect} from "react-router-dom";
import { Bookmarks } from '../pages/bookmarks';
import { Explore } from '../pages/explore';
import { Home } from '../pages/home';
import { Lists } from '../pages/lists';
import { Messages } from '../pages/messages';
import { Notifications } from '../pages/notifications';
import { TweetScreen } from '../pages/tweet';
import { User } from '../pages/user';

export const DashboardRouter = () => {
    return (
            <main className="body">
                <div className="sub_body">
                    
                        <Switch>
                            <Route exact path="/home" component={Home}/>

                            <Route exact path="/home/:tweetid" component={TweetScreen}/>

                            <Route exact path="/explore" component={Explore}/>

                            <Route exact path="/notifications" component={Notifications}/>

                            <Route exact path="/messages" component={Messages}/>

                            <Route exact path="/bookmarks" component={Bookmarks}/>

                            <Route exact path="/list" component={Lists}/>

                            <Route exact path="/user" component={User}/>

                            <Redirect to="/home" />
                        </Switch>
                </div>
            </main>
    )
}
