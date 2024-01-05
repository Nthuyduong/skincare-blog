const reducer = {
    GET_POSTS: (state, { payload }) => {
        state.posts = payload.results;
        state.paginate = payload.paginate;
    }
}

export default reducer;