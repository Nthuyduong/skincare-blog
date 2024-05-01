import { useEffect, useRef } from "react";

const CardSlider = ({
    configs,
    children
}) => {
    const ref = useRef(null);
    const defaultConfigs = {
        vertical: false,
        width: 300,
        isText: false,
        duration: 5000,
        pagination: false,
    }
    configs = { ...defaultConfigs, ...configs }

    useEffect(() => {
        if (ref.current) {
            let items = ref.current.querySelectorAll('.slide-card-item');
            let count = items.length;
            let left = ref.current.querySelector('.control-left');
            let right = ref.current.querySelector('.control-right');

            let active = 0;

            items.forEach((item, index) => {
                if (index === 0) {
                    item.classList.add('active');
                    let before = items[count - 1];
                    let after = items[index + 1];
                    let before2 = items[count - 2];
                    let after2 = items[index + 2];
                    before.classList.add('before');
                    after.classList.add('after');
                    before2.classList.add('before2');
                    after2.classList.add('after2');
                }
                item.addEventListener('click', () => {
                    if (item.classList.contains('before2') || item.classList.contains('after2') || item.classList.contains('active')) {
                        return;
                    }
                    items.forEach(item => {
                        item.classList.remove('active');
                        item.classList.remove('before');
                        item.classList.remove('after');
                        item.classList.remove('before2');
                        item.classList.remove('after2');
                    });
                    item.classList.add('active');
                    let before = index === 0 ? items[count - 1] : items[index - 1];
                    let before2 = index === 1 ? items[count - 1] : index === 0 ? items[count - 2] : items[index - 2];
                    let after = index === count - 1 ? items[0] : items[index + 1];
                    let after2 = index === count - 2 ? items[0] : index === count - 1 ? items[1] : items[index + 2];
                    before.classList.add('before');
                    after.classList.add('after');
                    before2.classList.add('before2');
                    after2.classList.add('after2');
                });
            });
            if (left === null || right === null) return;
            left.addEventListener('click', () => {
                let active = ref.current.querySelector('.active');
                let index = Array.from(items).indexOf(active);
                let newIndex = index === 0 ? count - 1 : index - 1;
                items[newIndex].click();
            });
            right.addEventListener('click', () => {
                let active = ref.current.querySelector('.active');
                let index = Array.from(items).indexOf(active);
                let newIndex = index === count - 1 ? 0 : index + 1;
                items[newIndex].click();
            });
            setInterval(() => {
                if (ref.current === null) return;
                let active = ref.current.querySelector('.active');
                let index = Array.from(items).indexOf(active);
                let newIndex = index === count - 1 ? 0 : index + 1;
                items[newIndex].click();
            }, configs.duration);
        }
        return () => {
            if (ref.current) {
                let items = ref.current.querySelectorAll('.slide-card-item');
                let left = ref.current.querySelector('.control-left');
                let right = ref.current.querySelector('.control-right');
                items.forEach(item => {
                    item.removeEventListener('click', () => {});
                });
                left.removeEventListener('click', () => {});
                right.removeEventListener('click', () => {});
                setInterval(() => {}, configs.duration);
            }
        }
    }, [])

    return (
        <div 
            ref={ref} 
            className={`card-slider relative flex h-[700px] justify-center items-center ${configs.vertical ? 'card-slider-vertical': ''} ${configs.isText ? 'card-slider-text': ''}`}
            style={{ backgroundImage: `url(${configs.background})` }}
        >
            <div 
                className="flex absolute h-full items-center"
                style={{ width: `${configs.width}px` }}
            >
                {children}
                
            </div>
            {configs.pagination && (
                <div className="relative m-w w-full">
                    <button className="control-left">
                        <img src='./img/btn-left.png'/>
                    </button>
                    <button className="control-right">
                        <img src='./img/btn-right.png'/>
                    </button>
                </div>
            )}
            
        </div>
    )
}

export default CardSlider;