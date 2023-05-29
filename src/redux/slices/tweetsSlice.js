import { createSlice } from "@reduxjs/toolkit";


export const tweetsSlice = createSlice({
    name:'tweets',
    initialState:[],
    reducers: {
        createTweets: (state,action) => { 
            return [...action.payload]
        },
        addTweet: (state,action) => { 
            state.unshift(action.payload)
        },
        updateTweet: (state,action) => {
             const tweetFound = state.find( tweet => tweet.id === action.payload.id)
             tweetFound && state.splice(state.indexOf(tweetFound),1,action.payload)
        },
        resetTweets: () => {
            return []
        }
    }
})

export const { createTweets, addTweet, updateTweet, resetTweets } = tweetsSlice.actions

export default tweetsSlice.reducer