import { configureStore } from '@reduxjs/toolkit';
import  tweetsSilce  from '../features/tweet/tweetsSlice';
import bookmarksSlice  from '../features/bookmarks/bookmarks';
import commentsScile from '../features/comments/commentsSlice';
import listSlice from '../features/list/listSlice';
import messagesSlice from '../features/messages/messagesSlice';
import notificationsSlice from '../features/notifications/notificationsSlice';
import trendsSlice from '../features/trends/trendsSlice';
import whoToFollowSlice from '../features/whoToFollow/whoToFollowSlice';
import responseSlice from '../features/response/responseSlice';
import modalSlice from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    tweets: tweetsSilce,
    comments: commentsScile,
    trends: trendsSlice,
    whoToFollow: whoToFollowSlice,
    notifications: notificationsSlice,
    messages: messagesSlice,
    bookmarks: bookmarksSlice,
    list: listSlice,
    response: responseSlice,
    modal: modalSlice
  },
})