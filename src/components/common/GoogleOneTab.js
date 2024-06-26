import Script from "next/script";
import React, { useEffect } from "react";
import { loginGoogleOneTap } from "../../services/auth";
import { useRouter } from "next/router";

const GoogleOneTab = () => {

    const router = useRouter();

    useEffect(() => {
        // will show popup after two secs
        const timeout = setTimeout(() => oneTap(), 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const oneTap = () => {
        const { google } = window;
        if (google) {
            google.accounts.id.initialize({
                client_id: '996060135719-puntc164t54odnkie7qj0mhie19n5c93.apps.googleusercontent.com',
                callback: async (response) => {
                    // Here we call our Provider with the token provided by google
                    call(response.credential);
                },
            });

            // Here we just console.log some error situations and reason why the google one tap
            // is not displayed. You may want to handle it depending on your application
            // google.accounts.id.prompt() // without listening to notification
            google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed()) {
                    console.log(
                        'getNotDisplayedReason ::',
                        notification.getNotDisplayedReason()
                    );
                } else if (notification.isSkippedMoment()) {
                    console.log('getSkippedReason  ::', notification.getSkippedReason());
                } else if (notification.isDismissedMoment()) {
                    console.log(
                        'getDismissedReason ::',
                        notification.getDismissedReason()
                    );
                }
            });
        }
    };

    const call = async (credential) => {
        try {
            const responsePayload = parseJwt(credential);
            if (responsePayload.email_verified) {
                const client = google.accounts.oauth2.initTokenClient({
                    client_id: '996060135719-puntc164t54odnkie7qj0mhie19n5c93.apps.googleusercontent.com',
                    scope: 'https://www.googleapis.com/auth/userinfo.profile',
                    hint: responsePayload.email,
                    prompt: '',// Specified as an empty string to auto select the account which we have already consented for use.
                    callback: async(tokenResponse) => {
                        let access_token = tokenResponse.access_token;
                        const response = await loginGoogleOneTap(access_token);
                        if (response.status) {
                            localStorage.setItem('access_token', response.token);
                            router.reload();
                        } else {
                        }
                    },
                });
                client.requestAccessToken();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    };
    return (
        <>
            <Script src="https://accounts.google.com/gsi/client" />
        </>
    );
};

export default GoogleOneTab;