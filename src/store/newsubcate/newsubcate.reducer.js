const reducer = {
    SHOW_MODAL_SUBCATE: (state, {}) => {
        state.newSubcate.show = true;
    },
    HIDE_MODAL_SUBCATE: (state, {}) => {
        state.newSubcate.show = false;
    }
}

export default reducer;