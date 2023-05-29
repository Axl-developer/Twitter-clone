import { createSlice } from "@reduxjs/toolkit";

export const whoToFollowSlice = createSlice({
    name:'whoToFollow',
    initialState:[],
    reducers: {
        createWhoToFollow: (state,action) => { 
            return [...action.payload]
        },
    }
})

export const { createWhoToFollow } = whoToFollowSlice.actions

export default whoToFollowSlice.reducer