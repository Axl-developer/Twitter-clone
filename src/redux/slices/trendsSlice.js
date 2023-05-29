import { createSlice } from "@reduxjs/toolkit";


export const trendsSlice = createSlice({
    name:'trends',
    initialState:[],
    reducers: {
        createTrends: (state,action) => { 
            return [...action.payload]
        },
    }
})

export const { createTrends } = trendsSlice.actions

export default trendsSlice.reducer