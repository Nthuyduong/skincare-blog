import {createSlice} from "@reduxjs/toolkit";

import reducer from "./newpost.reducer";
import initialState from "./newpost.state";

const modalNewPost = createSlice({
    name: 'modalNewPost',
    initialState,
    reducers: reducer,
})

export default modalNewPost.reducer;