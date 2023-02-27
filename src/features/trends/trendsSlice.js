import { createSlice } from "@reduxjs/toolkit";


export const trendsSlice = createSlice({
    name:'trends',
    initialState:[
        {
            id:1,
            answers:"32,427 mill Tweets",
            nombre:"#Covid-19",
        },
        {
            id:2,
            answers:"30,775 mill Tweets",
            nombre:"#JavaScript",
        },
        {
            id:3,
            answers:"22,455 mill Tweets",
            nombre:"#React",
        },
        {
            id:4,
            answers:"21,250 mill Tweets",
            nombre:"#Node",
        },
        {
            id:5,
            answers:"19,327 mill Tweets",
            nombre:"#Google",
        }
    ]
})

export default trendsSlice.reducer