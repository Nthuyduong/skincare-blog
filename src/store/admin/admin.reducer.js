const reducer = {
    GET_ADMIN_DETAIL: (state, { payload }) => {
        state.admin = payload;
        console.log(payload)
    }
}

export default reducer;