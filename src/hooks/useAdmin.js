import {getApiAdminInfo, loginAdminApi} from "../services/admin";
import { useModal } from "@hooks/modal";
import { useDispatch, useSelector } from "react-redux";
import {fetchAdminDetailAction} from "../store/admin/admin.action";
import { useRouter } from 'next/router';

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
        }
        else{
            addToast('login fail!')
        }
        console.log(res)
    }

    const getAdminInfo = async () => {
        const res = await getApiAdminInfo();
        console.log(res)
        if(res) {
            dispatch(fetchAdminDetailAction(res))
        }
        console.log(router)
    }



    return {
        admin,
        login,
        getAdminInfo,
    }


}

