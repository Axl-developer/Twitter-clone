import { createSlice } from "@reduxjs/toolkit";


export const notificationsSlice = createSlice({
    name:'notifications',
    initialState:{
        all:[
            {
                id:0,
                text:'Tempor laboris est deserunt nisi consectetur nisi velit cillum laboris reprehenderit sit excepteur et.'
            },
            {
                id:1,
                text:'Tempor laboris est deserunt nisi consectetur nisi velit cillum laboris reprehenderit sit excepteur et.'
            },
            {
                id:2,
                text:'Tempor laboris est deserunt nisi consectetur nisi velit cillum laboris reprehenderit sit excepteur et.'
            },
            {
                id:3,
                text:'Tempor laboris est deserunt nisi consectetur nisi velit cillum laboris reprehenderit sit excepteur et.'
            },
            {
                id:4,
                text:'Tempor laboris est deserunt nisi consectetur nisi velit cillum laboris reprehenderit sit excepteur et.'
            }
        ],
        mentios:[]
    }
})

export default notificationsSlice.reducer