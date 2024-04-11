import { createAction } from "@reduxjs/toolkit";

export const fetchSettingAction = createAction("setting/GET_SETTING");
export const updateSettingAction = createAction("setting/UPDATE_SETTING");