import { postApiAdmin, getApiAdmin } from "@utils/apiUtils";

export const getSettingMail = async (type) => {
    return await getApiAdmin(`/settings/mail/${type}`);
}

export const updateSettingMail = async (type, data) => {
    return await postApiAdmin(`/settings/mail/${type}`, data);
}