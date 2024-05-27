import React, { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ROUTER } from "@utils/constants";

const AnimationContext = createContext();
const rou = [ROUTER.ABOUT, ROUTER.ABOUTTEST, ROUTER.HOME, ROUTER.CONTACT]

export const AnimationProvider = ({ children }) => {
    
    const router = useRouter();
    const { pathname } = useRouter();

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
        if (rou.includes(pathname)) {
            handleCursor();
        }

        
        return () => {
            animates.forEach((animate) => {
                observer.unobserve(animate);
            });
            if (rou.includes(pathname)) {
                handleCursor();
            }
        }

    }, [router.asPath]);

    // MOUSE

    const handleCursor = () => {
        var cursor = document.getElementById('custom-cursor');
        if (!cursor) return;

        document.addEventListener('mouseover', () => {
            cursor.style.opacity = 1;
        })
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = 0;
        })

        document.addEventListener('mousemove', moveCursor)


        function moveCursor(e) {
            let x = e.clientX;
            let y = e.clientY;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        }

        var text = Array.from(document.querySelectorAll('p, span, body_text, .cursor-text-wrp'));

        text.forEach(text => {
            text.addEventListener('mousemove', function() {
                cursor.classList.add('cursor-text');
            })
            text.addEventListener('mouseleave', function () {
                cursor.classList.remove('cursor-text');
            })
        })

        var images = Array.from(document.querySelectorAll('img'));
        images.forEach(image => {
            image.addEventListener('mousemove', function () {
                cursor.classList.add('cursor-img');
            })

            image.addEventListener('mouseleave', function () {
                cursor.classList.remove('cursor-img');
            })
        })

        var images = Array.from(document.querySelectorAll('input'));
        images.forEach(image => {
            image.addEventListener('mousemove', function () {
                cursor.classList.add('cursor-input');
            })

            image.addEventListener('mouseleave', function () {
                cursor.classList.remove('cursor-input');
            })
        })
    }

    return (
        <AnimationContext.Provider value={null}>
            {rou.includes(pathname) ? (
                <div className="animation-wrp">
                    {children}
                <div id="custom-cursor" className="hidden sm:block custom-cursor"></div>
            </div>
            ) : (
                <>{children}</>
            )}
        </AnimationContext.Provider>
    )
}

export const useAnimationContext = () => useContext(AnimationContext);