import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./redux/Auth/AuthSlice"
import FriendsListReducer from "./redux/FriendsList/FriendsSlice"

const store = configureStore({
    reducer:{
        auth: AuthReducer,
        friends: FriendsListReducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
  


export default store;