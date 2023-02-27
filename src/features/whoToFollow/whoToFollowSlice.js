import { createSlice } from "@reduxjs/toolkit";

export const whoToFollowSlice = createSlice({
    name:'whoToFollow',
    initialState:[
        {
            id:1,
            answers:"Tecnología",
            nombre:"Google",
        },
        {
            id:2,
            answers:"Tecnología",
            nombre:"Android",
        }
    ]
})

export default whoToFollowSlice.reducer