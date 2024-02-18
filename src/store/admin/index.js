import { createSlice } from "@reduxjs/toolkit";

import reducer from "./admin.reducer";
import initialState from "./admin.state";

const modalAdmin = createSlice({
    name: 'admin',
    initialState,
    reducers: reducer,
});

export default modalAdmin.reducer;