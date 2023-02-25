import { configureStore } from '@reduxjs/toolkit';
import bookmarksSlice  from '../features/counter/bookmarks';
import commentsScile from '../features/counter/commentsSlice';
import listsSlice from '../features/counter/listsSlice';
import messagesSlice from '../features/counter/messagesSlice';
import notificationsSlice from '../features/counter/notificationsSlice';
import trendsSlice from '../features/counter/trendsSlice';
import  tweetsSilce  from '../features/counter/tweetsSlice';
import whoToFollowSlice from '../features/counter/whoToFollowSlice';

export const store = configureStore({
  reducer: {
    tweets: tweetsSilce,
    comments: commentsScile,
    trends: trendsSlice,
    whoToFollow: whoToFollowSlice,
    notifications: notificationsSlice,
    messages: messagesSlice,
    bookmarks: bookmarksSlice,
    list: listsSlice
  },
})