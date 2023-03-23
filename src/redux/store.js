import { configureStore } from '@reduxjs/toolkit';
import { modalSlice, responseSlice, whoToFollowSlice, trendsSlice, notificationsSlice, messagesSlice, listSlice, commentsSlice, tweetsSlice, bookmarksSlice,  } from './slices';
export const store = configureStore({
  reducer: {
    tweets: tweetsSlice,
    comments: commentsSlice,
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