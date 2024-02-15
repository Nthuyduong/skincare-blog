const reducer = {
    GET_INGREDIENTS: (state, { payload }) => {
        state.ingredients = payload.results;
        state.paginate = payload.paginate;
    },
    GET_INGREDIENT_DETAIL: (state, { payload }) => {
        state.ingredients = payload;
    }
}

export default reducer;