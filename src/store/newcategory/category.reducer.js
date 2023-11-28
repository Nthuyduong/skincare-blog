const reducer = {
    SHOW_MODAL_CATEGORY: (state, {}) => {
        state.newCategory.show = true;
    },
    HIDE_MODAL_CATEGORY: (state, {}) => {
        state.newCategory.show = false;
    }
}

export default reducer;