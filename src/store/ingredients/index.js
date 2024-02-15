import { createSlice } from "@reduxjs/toolkit";

import initialState from "./ingredients.state";
import reducer from "./ingredients.reducer";

const ingredientSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: reducer,
});

export default ingredientSlice.reducer;