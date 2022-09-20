import { createSlice } from "@reduxjs/toolkit";

import { STATUS } from "../../config";

const initialState = [];

const FriendsSlice = createSlice({
    name:"friends",
    initialState,
    reducers:{
        saveFriendList(state, action){
          return  [...action.payload];
        }
    }
})

export const {saveFriendList} = FriendsSlice.actions;

export default FriendsSlice.reducer;