import { createReducer } from "@reduxjs/toolkit";
const initialState = {}
export const userReducer = createReducer(initialState,{
    registerRequest:(state)=>{
        state.loading = true
       
    },
    registerSuccess:(state,action)=>{
        state.loading = false
        state.user = action.payload;
        
    },
    registerFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
        
    },
    loginRequest:(state)=>{
        state.loading = true
        state.isAthenticated = false
    },
    loginSuccess:(state,action)=>{
        state.loading = false
        state.user =action.payload
        state.isAthenticated = true
    },
    loginFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    loadUserRequest:(state)=>{
        state.loading = true
        state.isAthenticated = false
    },
    loadUserSuccess:(state,action)=>{
        state.loading = false
        state.user = action.payload
        state.isAthenticated = true
    },
    loadUserFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
        state.isAthenticated = false
    }

})