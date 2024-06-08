import { getApi, postApi } from "../utils/apiUtils";

export const getGetLoginUrl = async (provider) => {
    return await getApi(`/login/${provider}`);
}

export const loginCallbackApi = async (provider, code) => {
    return await postApi(`/login/${provider}/callback`, {
        code
    });
}

export const getApiUserInfo = async () => {
    return await getApi(`/me`);
}