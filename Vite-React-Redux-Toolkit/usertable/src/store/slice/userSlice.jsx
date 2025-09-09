import { createSlice } from '@reduxjs/toolkit'

import { clearAllUsers } from '../action';

const userSlice = createSlice({
    name: 'user',
    initialState:[],
    reducers:{
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        // clearAllUser(state, action) {
        //     // console.log("All Users Deleted")
        //    return [];
        // },
    },
    extraReducers(builder){
        builder.addCase(clearAllUsers, ()=>{
            return [];
        })
    }
});

// console.log(userSlice.actions)

export {userSlice};

export const {addUser, removeUser} = userSlice.actions;