import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice"
import formReducer from "./formSlice"


export const store = configureStore({
    reducer: {
        user: userReducer,
        form: formReducer,
    }
})