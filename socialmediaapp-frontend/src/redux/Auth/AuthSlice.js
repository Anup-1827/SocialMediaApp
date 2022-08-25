import { SettingsApplicationsOutlined } from "@mui/icons-material";
import  {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

import { STATUS } from "../../config";

const initialState = {
    data: {},
    status: STATUS.IDLE
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
       
    },
    extraReducers: (builder)=>{
        builder
        // Login
        .addCase(loginThunk.pending, (state, action)=>{
            state.status = STATUS.LOADING;
        })
        .addCase(loginThunk.fulfilled, (state, action)=>{
            state.status = STATUS.SUCCESS;
            state.data = action.payload;
        })
        .addCase(loginThunk.rejected, (state, action)=>{
            state.status = STATUS.ERROR;
            state.data = {};
        })
        // Register
        .addCase(RegisterThunk.pending, (state, action)=>{
            state.status = STATUS.LOADING;
        })
        .addCase(RegisterThunk.fulfilled, (state, action)=>{
            state.status = STATUS.SUCCESS;
        })
        .addCase(RegisterThunk.rejected, (state, action)=>{
            state.status = STATUS.ERROR;
        })
    }
})


export const loginThunk = createAsyncThunk("auth/fetchLoginDetails", async (userDetails)=>{
    const loginDetails = await axios.post("auth/login", userDetails);
    // console.log(loginDetails.json());
    // const jsonRespone =  loginDetails.json();

    return loginDetails;
    
})


export const RegisterThunk = createAsyncThunk("auth/fetchRegisterDetails", async(userDetails)=>{
    const user = {}
    const registerDetails = await axios.post("auth/register", user)
})

export const {emptyObj} = AuthSlice.actions

export default AuthSlice.reducer;
