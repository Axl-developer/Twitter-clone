import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweet:{},
    type:''
}
export const responseSlice = createSlice({
    name:'response',
    initialState,
    reducers: {
        getResponse: (state,action) => {
            state.tweet = action.payload.tweet
            state.type = action.payload.type
        },
        cleanResponse: (state) => {
            state.tweet = initialState.tweet
            state.type = initialState.type
        },
    }
})

export const { getResponse, cleanResponse } = responseSlice.actions

export default responseSlice.reducer
