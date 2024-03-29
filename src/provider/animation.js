import React, { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
    
    const router = useRouter();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Force a reflow
                    void entry.target.offsetWidth;
                    entry.target.classList.add('animated');
                } else {
                    entry.target.classList.remove('animated');
                }
            });
        }, {
            threshold: 0.1
        });

        let animates = document.querySelectorAll('.animate');
        animates.forEach((animate) => {
            observer.observe(animate);
        })
    }, [router.asPath]);

    return (
        <AnimationContext.Provider value={null}>
            {children}
        </AnimationContext.Provider>
    )
}

export const useAnimationContext = () => useContext(AnimationContext);