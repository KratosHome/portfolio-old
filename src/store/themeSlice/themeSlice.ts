import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const storedTheme = localStorage.getItem('theme');
const initialState = {
    theme: storedTheme ?? 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
            localStorage.setItem('theme', action.payload);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
