import { createSlice } from "@reduxjs/toolkit";

import initialState from "./app.state";
import reducer from "./app.reducer";

const imagesSlice = createSlice({
    name: "app",
    initialState,
    reducers: reducer,
});

export default imagesSlice.reducer;