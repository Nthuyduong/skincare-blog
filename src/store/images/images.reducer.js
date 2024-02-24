const reducer = {
    GET_IMAGES: (state, { payload }) => {
        state.images = payload.results;
        state.paginate = payload.paginate;
    },
    GET_IMAGE_DETAIL: (state, { payload }) => {
        state.image = payload;
    },
    SET_LOADING: (state, { payload }) => {
        state.loading = payload;
    },
    LOAD_MORE: (state, { payload }) => {
        state.images = state.images.concat(payload.results);
        state.paginate = payload.paginate;
    },
    ADD_IMAGES: (state, { payload }) => {
        state.images = [
            ...payload,
            ...state.images
        ];
    },
}

export default reducer;