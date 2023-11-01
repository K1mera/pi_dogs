import { createSlice } from '@reduxjs/toolkit';

export const tempSlice = createSlice({
    name: 'temp',
    initialState: {
        temps: []
    },
    reducers: {
        setTemps: (state, action) => {
            state.temps = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setTemps } = tempSlice.actions;