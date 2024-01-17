import { createAction } from "@reduxjs/toolkit";

export const fetchCategoriesAction = createAction("categories/GET_CATEGORIES");
export const fetchCategoryDetailAction = createAction("categories/GET_CATEGORY_DETAIL");