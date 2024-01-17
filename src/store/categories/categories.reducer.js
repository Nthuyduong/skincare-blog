const reducer = {
    GET_CATEGORIES: (state, { payload }) => {
        state.categories = payload.results;
        state.paginate = payload.paginate;
    },
    GET_CATEGORY_DETAIL: (state, { payload }) => {
        state.category = payload;
    }
}

export default reducer;