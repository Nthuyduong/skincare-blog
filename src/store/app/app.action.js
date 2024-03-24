import { createAction } from "@reduxjs/toolkit";

export const fetchKeywordAction = createAction("app/SET_KEYWORD");
export const fetchResultsAction = createAction("app/SET_SEARCH_RESULTS");
export const fetchLoadMoreAction = createAction("app/GET_LOADMORE");
export const setLoadingAction = createAction("app/SET_LOADING_SEARCH");