import { configureStore } from "@reduxjs/toolkit";

import { dogSlice, tempSlice } from "./slices";




export const store = configureStore({
    reducer: {
        dogs: dogSlice.reducer,
        temps: tempSlice.reducer,
    }
})