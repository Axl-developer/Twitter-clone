import React from 'react'
import {Switch,Route, Redirect} from "react-router-dom";
import { Bookmarks } from '../components/Bookmarks/Bookmarks';
import { Explore } from '../components/Explore/Explore';
import { Home } from '../components/Home/Home';
import { TweetScreen } from '../components/Home/TweetScreen';
import { ListsScreen } from '../components/Lists/ListsScreen';
import { Messages } from '../components/Messages/Messages';
import { NewTweetScreen } from '../components/New_Tweet/NewTweetScreen';
import { Notifications } from '../components/Notifications/Notifications';
import { User } from '../components/User/User';

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

                    <Route exact path="/lists" component={ListsScreen}/>

                    <Route exact path="/user" component={User}/>

                    <Route exact path="/tweet" component={NewTweetScreen}/>


                    <Redirect to="/home" />
                </Switch>
            </div>
        </main>
    )
}
