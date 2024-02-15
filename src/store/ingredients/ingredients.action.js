import { createAction } from "@reduxjs/toolkit";

//action get post
export const fetchIngredientsAction = createAction("post/GET_INGREDIENTS");
export const fetchIngredientDetailAction = createAction("post/GET_INGREDIENT_DETAIL");