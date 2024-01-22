import {configureStore} from "@reduxjs/toolkit";
import meal from "../reducers/meal"


export const store = configureStore({
    reducer: {
        meal
    }
})