const reducer = {
    SHOW_MODAL_POST: (state, {}) => {
        state.newPost.show = true;
    },
    HIDE_MODAL_POST: (state, {}) => {
        state.newPost.show = false;
    }
}

export default reducer;