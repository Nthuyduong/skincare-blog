const reducer = {
    GET_POSTS: (state, { payload }) => {
        state.posts = payload;
    }
}

export default reducer;