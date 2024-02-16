const reducer = {
    GET_INGREDIENTS: (state, { payload }) => {
        state.ingredients = payload.results;
        state.paginate = payload.paginate;
    },
    GET_INGREDIENT_DETAIL: (state, { payload }) => {
        state.ingredient = payload;
        console.log('duong');
    }
}

export default reducer;