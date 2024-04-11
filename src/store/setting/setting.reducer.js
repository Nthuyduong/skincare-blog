const reducer = {
    GET_SETTING: (state, { payload }) => {
        state.setting = payload;
    },
    UPDATE_SETTING: (state, { payload }) => {
        state.setting = payload;
    },
}

export default reducer;