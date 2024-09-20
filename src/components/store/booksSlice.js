import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk("books/getBooks",async (_, thunkApi)=>{
    const {rejectWithValue  } = thunkApi;
    // this is respons data 
    try{
        const res = await fetch("http://localhost:3009/books");
        const data = await res.json();
        return data;
    }
    // this is rerror in caes data no arrive 
     catch(error){
        return rejectWithValue(error.message);
    }
})
// this is function async thunk for insert books 
 export const insertBook = createAsyncThunk(
    "books/insertBook" ,
    async(bookData, thunkapi) => {
    const {rejectWithValue } = thunkapi;
    try{
        // bookData.userName = getState.auth.name 
        const res = await fetch("http://localhost:3009/books" , {
            method : "POST", 
            body: JSON.stringify(bookData),
            headers : {
                'Content-Type': 'application/json ; charset=UTF-8',
            },
        });
        const data = await res.json();
        console.log(data)
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const deleteBook = createAsyncThunk(
    "books/deleteBook",
    async(id , thunkApi) => {
    const {rejectWithValue } = thunkApi;
        try{
                await fetch(`http://localhost:3009/books/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },})
            return id;
        }catch(error){
            return rejectWithValue(error.message)
        }

    }
)

const booksSlice = createSlice({
    name : "books",
    initialState : {book: [] , isLoading : false, error : null},
    extraReducers : {
        // get books 
        [getBooks.pending] : (state) => {
            state.isLoading = true;
        },
        [getBooks.fulfilled] : (state , action) => {
            state.isLoading = false;
            console.log(action.payload);
            state.books = action.payload;
        },
        [getBooks.rejected] : (state , action) => {
            state.isLoading = false;
            console.log(action.payload);
            state.error = action.payload;
        },
        // insert books 
        [insertBook.pending] : (state) => {
            state.isLoading = true;
            state.books = null;
        },
        [insertBook.fulfilled] : (state , action) => {
            state.isLoading = false;
            state.books = [...state.books, action.payload]
        },
        [insertBook.rejected] : (state , action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        
        // delete books 
        [deleteBook.pending] : (state) => {
            state.isLoading = true;
        },
        [deleteBook.fulfilled] : (state , action) => {
            state.isLoading = false;
            console.log(action)
            state.books = state.books.filter(book => book.id!== action.payload)

        },
        [deleteBook.rejected] : (state , action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
    }
})

export default booksSlice.reducer;