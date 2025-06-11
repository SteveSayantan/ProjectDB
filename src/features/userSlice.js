import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
        name:'abc university',
        role:'admin',
        email:'abc@xyz.com',
        token:'13242525'
    }
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        logoutUser:(state,action)=>{
           state.user=null
        }
    }
})

export const {logoutUser}=userSlice.actions;

export default userSlice.reducer;
