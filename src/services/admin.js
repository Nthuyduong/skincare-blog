import { postApiAdmin } from "@utils/apiUtils";
import {getApiAdmin} from "../utils/apiUtils";

export const loginAdminApi = async (email, password) => {

    return await postApiAdmin("/login", {
        email,
        password
    });
}

export const getApiAdminInfo = async () => {
    return await getApiAdmin("/info");
}

export const AdminLogout = async () => {
    return await postApiAdmin("/logout");
}