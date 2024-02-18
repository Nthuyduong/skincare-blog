import {loginAdminApi} from "../services/admin";
import { useModal } from "@hooks/modal";

export const useAdmin = () => {

    const { addToast, showLoading, hide } = useModal();

    const login = async (email,password) => {

        showLoading();
        const res = await loginAdminApi(email, password);
        hide();
        if(res?.access_token){
            localStorage.setItem("token",  res.access_token);
            window.location.href = "/admin/dashboard"
        }
        else{
            addToast('login fail!')
        }
        console.log(res)
    }
    return {
        login,
    }
}

