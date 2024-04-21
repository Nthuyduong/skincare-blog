import React, { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
    
    const router = useRouter();

    useEffect(() => {
        const handleAccordion = () => {
            const arrcordions = document.querySelectorAll('.my-collapse');

            arrcordions.forEach((accordion) => {
                accordion.addEventListener('click', function(e) {
                    const parent = e.target.closest('.my-collapse');
                    
                    if (parent) {
                        const content = parent.querySelector('.content-container');
                        if (parent.classList.contains('expanded')) { 
                            parent.classList.remove('expanded');
                            content.style.maxHeight = '0px';
                        } else {
                            arrcordions.forEach((collapse, i) => {
                                collapse.classList.remove('expanded');
                                collapse.querySelector('.content-container').style.maxHeight = '0px';
                            });
                            parent.classList.add('expanded');
                            content.style.maxHeight = content.scrollHeight + 'px';
                        }
                    }
                });
            });
        }
        handleAccordion();

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