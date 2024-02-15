import { createAction } from "@reduxjs/toolkit";

//action get post
export const fetchIngredientsAction = createAction("ingredients/GET_INGREDIENTS");
export const fetchIngredientDetailAction = createAction("ingredients/GET_INGREDIENT_DETAIL");