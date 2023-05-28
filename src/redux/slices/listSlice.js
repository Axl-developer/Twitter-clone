import { createSlice } from "@reduxjs/toolkit";
import { ListEmptyState } from "../../models/list.type";


export const listSlice = createSlice({
    name:'list',
    initialState:ListEmptyState,
    reducers: {
        createList: (state,action) => { 
            const formatteList = {...action.payload}
            return formatteList; 
        },
        modifyListFixed: (state,action) => { 
            const newFixedLit = [...state.fixed,{...action.payload}]
            const modifyList = {...state,fixed:newFixedLit}
            return modifyList; 
        },
        modifyListYourList: (state,action) => { 
            const newYourList = [...state.yourList,{...action.payload}]
            const modifyList = {...state,yourList:newYourList}
            return modifyList; 
        }
    }
})

export const { createList, modifyListFixed, modifyListYourList } = listSlice.actions

export default listSlice.reducer