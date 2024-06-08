import React from "react";
import { getGetLoginUrl } from "@services/auth";
import { useRouter } from "next/router";

const Auth = () => {
    const router = useRouter();

    const handleLogin = async(provider) =>  {
        const res = await getGetLoginUrl(provider);

        if (res.status) {
            const currentUrl = window.location.href;
            sessionStorage.setItem('redirectUrl', currentUrl);
            window.location.href = res.url;
        }
    }
    return (
        <div>
            <p className="cursor-pointer" onClick={() => handleLogin('facebook')}>Facebook</p>
            <p className="cursor-pointer" onClick={() => handleLogin('google')}>Google</p>
        </div>
    );
}

export default Auth;