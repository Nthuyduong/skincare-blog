import { useRouter } from 'next/router';
import { throttle } from '@utils/common';
import React, { createContext, useContext, useEffect } from 'react';
import { useModal } from '@hooks/modal';
import { useAdmin } from "@hooks/useAdmin";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ADMIN_ROUTER, ADMIN_ROUTERS } from '../utils/constants';

const RouterContext = createContext();

export const RouterProvider = ({ children }) => {

    const { getAdminInfo, admin } = useAdmin();

    const {
        hide
    } = useModal();
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeStart', NProgress.start)
        router.events.on('routeChangeComplete', NProgress.done)
        router.events.on('routeChangeError', NProgress.done)
        return () => {
            router.events.off('routeChangeStart', NProgress.start)
            router.events.off('routeChangeComplete', NProgress.done)
            router.events.off('routeChangeError', NProgress.done)
        }
      }, [])

    useEffect(() => {
        getAdminInfo();

        // const pageAccessedByReload = window.performance
        //     .getEntriesByType('navigation')
        //     .map((nav) => nav.type)
        //     .includes('reload');

        // if (pageAccessedByReload) {
        //     const scrollPosition = Number.parseInt(sessionStorage.getItem('scrollPosition'), 10);
        //     if (scrollPosition) {
        //         window.scrollTo(0, scrollPosition);
        //     }
        // }

        // const handleScroll = throttle(() => {
        //     sessionStorage.setItem('scrollPosition', window.scrollY);
        // }, 300);

        // window.addEventListener('scroll', handleScroll);
        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        //     hide();
        // };
    }, [router.asPath]);

    if(ADMIN_ROUTERS.includes(router.route) && router.route != ADMIN_ROUTER.LOGIN){
        if(!admin.id){
            return null;
        } else {
            return (
                <RouterContext.Provider value={router}>
                    {children}
                </RouterContext.Provider>
            );
        
        }
    }

    return (
        <RouterContext.Provider value={router}>
            {children}
        </RouterContext.Provider>
    );
};

export const useRouterContext = () => useContext(RouterContext);