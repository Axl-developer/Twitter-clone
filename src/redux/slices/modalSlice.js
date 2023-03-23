import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name:'modal',
    initialState:{
        value: false
    },
    reducers: {
        toogleModal: (state,action) => {
            state.value = action.payload
            console.log(state.value,action.payload)
        }
    }
})

export const {toogleModal} = modalSlice.actions

export default modalSlice.reducer