import {AdminLogout, getApiAdminInfo, loginAdminApi} from "../services/admin";
import { useModal } from "@hooks/modal";
import { useDispatch, useSelector } from "react-redux";
import {fetchAdminDetailAction} from "../store/admin/admin.action";
import { useRouter } from 'next/router';
import { ADMIN_ROUTER, ADMIN_ROUTERS, ADMIN_ROUTER_WITH_AUTH } from "../utils/constants";

export const useAdmin = () => {

    const router = useRouter();

    const { addToast, showLoading, hide } = useModal();
    const { admin } = useSelector((state) => state.admin);

    const dispatch = useDispatch();

    const login = async (email,password) => {

        showLoading();
        const res = await loginAdminApi(email, password);
        hide();
        if(res?.access_token){
            localStorage.setItem("token",  res.access_token);
            window.location.href = "/admin/dashboard"
        } else {
            addToast('login fail!')
        }
    }

    const getAdminInfo = async () => {
        if(ADMIN_ROUTERS.includes(router.route)){
            let res = null;
            if(!admin.id){
                res = await getApiAdminInfo();
            } else {
                res = admin
            }
            if(res) {
                if(router.route != ADMIN_ROUTER.LOGIN){
                    if(res?.id){
                        dispatch(fetchAdminDetailAction(res))
                    } else {
                        window.location.href = ADMIN_ROUTER.LOGIN;
                    }
                } else {
                    if(res.id){
                        window.location.href = ADMIN_ROUTER.DASHBOARD;
                    }
                }
            } else {
                if(router.route != ADMIN_ROUTER.LOGIN){
                    window.location.href = ADMIN_ROUTER.LOGIN;
                }
            }
        }
    }

    const logout = async () => {
        showLoading();
        const res = await AdminLogout();
        localStorage.removeItem("token");
        hide();
        window.location.href = ADMIN_ROUTER.LOGIN
    }

    return {
        admin,
        login,
        logout,
        getAdminInfo,
    }


}

