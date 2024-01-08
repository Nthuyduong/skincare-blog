import { useRouter } from 'next/router';
import { throttle } from '../utils/common';
import React, { createContext, useContext, useEffect } from 'react';
import { useModal } from '../hooks/modal';

const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
    const {
        hide
    } = useModal();
    const router = useRouter();

    useEffect(() => {
        const pageAccessedByReload = window.performance
            .getEntriesByType('navigation')
            .map((nav) => nav.type)
            .includes('reload');

        if (pageAccessedByReload) {
            const scrollPosition = Number.parseInt(sessionStorage.getItem('scrollPosition'), 10);
            if (scrollPosition) {
                window.scrollTo(0, scrollPosition);
            }
        }

        const handleScroll = throttle(() => {
            sessionStorage.setItem('scrollPosition', window.scrollY);
        }, 300);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            hide();
        };
    }, [router.asPath]);
    return (
        <RouterContext.Provider value={router}>
            {children}
        </RouterContext.Provider>
    );
};

export const useRouterContext = () => useContext(RouterContext);