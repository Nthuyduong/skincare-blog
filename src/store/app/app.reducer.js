const reducer = {
    SET_KEYWORD: (state, {payload}) => {
        state.keyword = payload;
    },
    SET_SEARCH_RESULTS: (state, {payload}) => {
        state.results = payload.results;
        state.paginate = payload.paginate;
    },
    LOAD_MORE: (state, {payload}) => {
        state.paginate = payload.paginate;
    },
    SET_LOADING_SEARCH: (state, {payload}) => {
        state.loadingSearch = payload;
    },
    SET_USER: (state, { payload }) => {
        state.user = payload;
    },
}

export default reducer;