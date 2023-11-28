// có nhiệm vụ cập giá của state
// sử dụng thông qua action
const reducer = {

    SHOW_MODAL: (state, { payload }) => {
        state.modal.show = true;
        state.modal.name = payload.name;
        state.modal.data = payload.data;
        state.modal.invisibleBackground = payload.invisibleBackground;
        state.modal.enableClickOutside = payload.enableClickOutside;
    },

    HIDE_MODAL: (state, {}) => {
        state.modal.show = false;
        state.modal.name = null;
        state.modal.data = null;
    },


    // SHOW_MODAL_LOADING: (state, {}) => {
    //     state.modalLoading.show = true;
    // },
    // HIDE_MODAL_LOADING: (state, {}) => {
    //     state.modalLoading.show = false;
    // },
    // SET_MODAL_LOADING_CALLBACK: (state, { payload }) => {
    //     state.modalLoading.callback = payload;
    // },
}

export default reducer;