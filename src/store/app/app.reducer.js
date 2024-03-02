const reducer = {
    SET_KEYWORD: (state, {payload}) => {
        state.keyword = payload;
    },
    SET_SEARCH_RESULTS: (state, {payload}) => {
        state.results = payload.results;
    },
    LOAD_MORE: (state, {payload}) => {
        state.paginate = payload.paginate;
    }
}

export default reducer;