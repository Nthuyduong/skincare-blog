import { createSlice } from "@reduxjs/toolkit";

import reducer from "./setting.reducer";
import initialState from "./setting.state";

const setting = createSlice({
    name: 'setting',
    initialState,
    reducers: reducer,
});

export default setting.reducer;