import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { lightTheme } from "../styles/theme";

interface ThemeState {
  selectedTheme: DefaultTheme;
}

const initialState: ThemeState = {
  selectedTheme: lightTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<DefaultTheme>) {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
