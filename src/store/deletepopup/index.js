import {createSlice} from "@reduxjs/toolkit";

import reducer from "./deletepopup.reducer";
import initialState from "./deletepopup.state";

const modalCategory = createSlice({
    name: 'modalDelete',
    initialState,
    reducers: reducer,
})

export default modalCategory.reducer;