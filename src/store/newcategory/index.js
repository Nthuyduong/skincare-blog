import {createSlice} from "@reduxjs/toolkit";

import reducer from "./category.reducer";
import initialState from "./category.state";

const modalCategory = createSlice({
    name: 'modalCategory',
    initialState,
    reducers: reducer,
})

export default modalCategory.reducer;