import { useRouter } from "next/router";
import React, { Children, useEffect, useRef, useState } from "react";

const CardSlider = React.memo(({
    configs,
    children
}) => {
    const countChildren = Children.count(children);

    const ref = useRef(null);
    const defaultConfigs = {
        vertical: false,
        width: 300,
        height: 700,
        isText: false,
        duration: 5000,
        pagination: false,
    }
    configs = { ...defaultConfigs, ...configs }

    const [active, setActive] = useState(0);

    useEffect(() => {
        if (ref.current) {
            let items = ref.current.querySelectorAll('.slide-card-item');

            const activeItem = items[active];
            items.forEach(item => {
                item.classList.remove('active', 'before', 'after', 'before2', 'after2');
            });
            if (activeItem) {
                activeItem.classList.add('active');
                const indexBefore = active - 1 < 0 ? countChildren - 1 : active - 1;
                const indexAfter = active + 1 > countChildren - 1 ? 0 : active + 1;
                let before = items[indexBefore];
                let after = items[indexAfter];
                let before2 = items[indexBefore - 1 < 0 ? countChildren - 1 : indexBefore - 1];
                let after2 = items[indexAfter + 1 > countChildren - 1 ? 0 : indexAfter + 1];
                before.classList.add('before');
                after.classList.add('after');
                before2.classList.add('before2');
                after2.classList.add('after2');
            }
            
        }
    }, [ref.current, active, countChildren, configs.duration]);

    useEffect(() => {
        setInterval(() => {
            setActive(prevActive => (prevActive + 1) % countChildren);
        }, configs.duration);
        return () => clearInterval();
    }, [countChildren, configs.duration]);

    const handleNext = () => {
        if (active === countChildren - 1) {
            setActive(0);
        } else {
            setActive(active + 1);
        }
    }
    const handlePrev = () => {
        if (active === 0) {
            setActive(countChildren - 1);
        } else {
            setActive(active - 1);
        }
    }

    return (
        <div 
            ref={ref} 
            className={`card-slider relative flex justify-center items-center ${configs.vertical ? 'card-slider-vertical': ''} ${configs.isText ? 'card-slider-text': ''}`}
            style={{ backgroundImage: `url(${configs.background})`, height: `${configs.height}px` }}
        >
            <div 
                className="card-slider-cont flex absolute h-full items-center"
                style={{ width: `${configs.width}px` }}
            >
                {children}
                
            </div>
            {configs.pagination && (
                <div className="relative m-w w-full">
                    <button className="control-left"
                        onClick={handlePrev}>
                        <img src='./img/btn-left.png' alt="control left"/>
                    </button>
                    <button className="control-right" onClick={handleNext}>
                        <img src='./img/btn-right.png' alt="control right"/>
                    </button>
                </div>
            )}
            
        </div>
    )
});

export default CardSlider;