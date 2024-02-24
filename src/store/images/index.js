import { createSlice } from "@reduxjs/toolkit";

import initialState from "./images.state";
import reducer from "./images.reducer";

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: reducer,
});

export default imagesSlice.reducer;