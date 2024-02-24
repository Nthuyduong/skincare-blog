import { createAction } from "@reduxjs/toolkit";

export const fetchImagesAction = createAction("images/GET_IMAGES");
export const fetchImageDetailAction = createAction("images/GET_IMAGE_DETAIL");
export const setLoadingAction = createAction("images/SET_LOADING");
export const loadMoreAction = createAction("images/LOAD_MORE");
export const addImagesAction = createAction("images/ADD_IMAGES");