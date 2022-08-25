import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./redux/Auth/AuthSlice"

const store = configureStore({
    reducer:{
        auth: AuthReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
  


export default store;