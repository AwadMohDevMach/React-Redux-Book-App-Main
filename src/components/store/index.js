import { configureStore } from "@reduxjs/toolkit"
import books from "./booksSlice"
import authSlice from "../store/authSlice";

const store = configureStore({
    reducer : {
        books,
        authSlice,
    }
})
export default store;