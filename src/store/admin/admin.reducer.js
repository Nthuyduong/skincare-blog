const reducer = {
    GET_ADMIN_DETAIL: (state, { payload }) => {
        state.admin = payload;
    }
}

export default reducer;