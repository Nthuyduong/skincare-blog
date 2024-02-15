const reducer = {
    GET_POSTS: (state, { payload }) => {
        state.ingredients = payload.results;
        state.paginate = payload.paginate;
    },
    GET_POST_DETAIL: (state, { payload }) => {
        state.ingredients = payload;
    }
}

export default reducer;