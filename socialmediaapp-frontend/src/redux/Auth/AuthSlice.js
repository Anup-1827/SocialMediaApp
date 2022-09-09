import { SettingsApplicationsOutlined } from "@mui/icons-material";
import  {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


import { STATUS, BACKEND_URL } from "../../config";

const initialState = {
    data: {},
    status: STATUS.IDLE, 
    isLoggedin: false
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        saveUser(state, action){
            state.status = STATUS.SUCCESS;
            state.data = action.payload;
        },
        logout(state,action){
            state.isLoggedin = false;
        }
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
            state.isLoggedin = true;
        })
        .addCase(loginThunk.rejected, (state, action)=>{
            state.status = STATUS.ERROR;
            state.data = action.payload;
        })
        // Register
        .addCase(RegisterThunk.pending, (state, action)=>{
            state.status = STATUS.LOADING;
        })
        .addCase(RegisterThunk.fulfilled, (state, action)=>{
            state.status = STATUS.SUCCESS;
            state.data = action.payload;
        })
        .addCase(RegisterThunk.rejected, (state, action)=>{
            state.status = STATUS.ERROR;
            state.data = action.payload;
        })
    }
})


export const loginThunk = createAsyncThunk("auth/fetchLoginDetails", async (userDetails)=>{
    const loginDetails = await axios.post(BACKEND_URL+"auth/login", userDetails);
    // console.log(loginDetails.json());
    // const jsonRespone =  loginDetails.json();

    return loginDetails;
    
})


export const RegisterThunk = createAsyncThunk("auth/fetchRegisterDetails", async(userDetails)=>{
    const registerDetails = await axios.post(BACKEND_URL+"auth/register", userDetails);
    return registerDetails;
})

export const {saveUser ,logout} = AuthSlice.actions

export default AuthSlice.reducer;
