import {createSlice} from "@reduxjs/toolkit";

import reducer from "./newsubcate.reducer";
import initialState from "./newsubcate.state";

const modalNewPost = createSlice({
    name: 'modalNewPost',
    initialState,
    reducers: reducer,
})

export default modalNewPost.reducer;