import { createSlice } from "@reduxjs/toolkit";

import reducer from "./categories.reducer";
import initialState from "./categories.state";

const modalCategory = createSlice({
    name: 'categories',
    initialState,
    reducers: reducer,
});

export default modalCategory.reducer;