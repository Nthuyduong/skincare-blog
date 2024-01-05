const reducer = {
    SHOW_MODAL_DELETE: (state, {}) => {
        state.deletepopup.show = true;
    },
    HIDE_MODAL_DELETE: (state, {}) => {
        state.deletepopup.show = false;
    }
}

export default reducer;