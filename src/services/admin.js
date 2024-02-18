import { postApiAdmin } from "@utils/apiUtils";

export const loginAdminApi = async (email, password) => {
    return await postApiAdmin("/login", {
        email,
        password
    });
}