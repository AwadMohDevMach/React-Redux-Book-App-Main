import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {isLoggedIn : false , name : "awad mohamed"},
    reducers : {
        logInOut : (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    }
})
export default authSlice.reducer
export const {logInOut} = authSlice.actions