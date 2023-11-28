import React, { useState, Children, cloneElement, useEffect, useRef } from "react";
import { useWindowSize } from "../../hooks/dom";

const Slider = ({ 
    configs,
    children 
}) => {

    const windowSize = useWindowSize();
    
    const ref = useRef(null);
    const refWrp = useRef(null);

    const defaultConfigs = {
        sliderPerRow: 3,
        sliderPerRowMobile: 2.5,
        allowDrag: true,
        duration: 400,
        auto: false,
        autoDuration: 1000,
        gap: 10,
        gapMobile: 10,
    }

    // toán tử spread (...) để tạo một bản sao của tất cả các thuộc tính trong đối tượng defaultConfigs
    // Thuộc tính configs cùng tên sẽ ghi đè thuộc tính defaultConfigs
    configs = { ...defaultConfigs, ...configs }

    //Khai báo các biến với giá trị ban đầu bằng 0
    //active: vị trí slide hiện tại
    const [active, setActive] = useState(0);
    //dragX: giá trị margin-left của slider container
    const [dragX, setDragX] = useState(0);
    //khai báo biến trạng thái của hai nút
    const [disableNext, setDisableNext] = useState(false);
    const [disablePrev, setDisablePrev] = useState(true);

    //Theo dõi kích thước width + height của trình duyệt, nếu có thay đổi thì dimensions được thay bằng setDimension
    const [dimensions, setDimensions] = React.useState({
        width: windowSize.width,
        height: windowSize.height,
    });

    //API children (module trong React): thành phần con của một thành phần (component)
    const countChildren = Children.count(children);

    const autoSlideTimeout = useRef(null);

    //Nếu độ rộng của trình duyệt > 768 => sliderPerRow = sliderPerRow (3) còn không thì sẽ là sliderPerMobile (2.5)
    //dùng configs để ghi đè giá trị tương ứng của defaultConfigs
    let sliderPerRow = windowSize.width > 768 ? configs.sliderPerRow : configs.sliderPerRowMobile;
    //Tính toán số lượng slide tối đa có thể di  (tổng số slide - số slide hiển thị/ row)
    let maxSlide = countChildren - sliderPerRow;
    //Tính toán kích thước của một slide (100% / số slide hiển thị trên một hàng)
    let gap = windowSize.width > 768 ? configs.gap : configs.gapMobile;

    //giá trị trong hàm callback (active, dragX) thay đổi thì hàm callback sẽ được gọi tới để kích hoạt hàm runSlider
    useEffect(() => {
        runSlider();
    }, [active, dragX])

    useEffect(() => {
        //sự kiến lắng nghe để biết nếu cửa sổ trình duyệt resize thì hàm handleResize sẽ được gọi tới
        window.addEventListener('resize', handleResize);

        //loại bỏ sử kiện, lý do thì chưa biết
        return () => window.removeEventListener('resize', handleResize, false);
    }, [])

    //hàm handleResize
    const handleResize = () => {
        console.log('resize');

        // cập nhật kích thước trình duyệt
        setDimensions({
            width: windowSize.width,
            height: windowSize.height,
        });

        //tính số lượng slide sẽ hiển thị trên một hàng, cách tính như ở trên
        //configs ghi đè thuộc tính của defaultConfigs width trình duyệt > 768
        sliderPerRow = windowSize.width > 768 ? configs.sliderPerRow : configs.sliderPerRowMobile;
        maxSlide = countChildren - sliderPerRow;
        gap = windowSize.width > 768 ? configs.gap : configs.gapMobile;
        runSlider();
    }

    //hàm run slider
    const runSlider = () => {

        // cập nhật trạng thái disableNext và Prev
        setDisableNext(false);
        setDisablePrev(false);

        // Kiểm tra nếu đang ở slide đầu tiên, vô hiệu hóa nút Prev
        if (active === 0) {
            setDisablePrev(true);
        }
        // Kiểm tra nếu đang ở slide cuối cùng, vô hiệu hóa nút Next
        if (active >= maxSlide) {
            setDisableNext(true);
        }

        // Cập nhật chiều rộng của slider container
        ref.current.style.width = `calc(${(countChildren / sliderPerRow) * 100 + '%'} + ${(gap * maxSlide) / sliderPerRow + 'px'})`;
        // Tính toán và cập nhật giá trị transformX để di chuyển slider
        let transformX = active * 100 / countChildren;
        // Nếu giá trị transformX vượt quá giới hạn thì cập nhật lại giá trị transformX bằng vị trí cuối cùng
        if (transformX > (100 / countChildren) * maxSlide) {
            transformX = (100 / countChildren) * maxSlide
        }
        // Cập nhật style của slider container với hiệu ứng transition
        ref.current.style.transition = `transform var(--transition-duration) cubic-bezier(0.645, 0.045, 0.355, 1) 0s${
            dragX
              ? ""
              : ", margin var(--transition-duration) cubic-bezier(0.645, 0.045, 0.355, 1) 0s"
          }`
        // Di chuyển slider bằng cách thiết lập giá trị transform
        ref.current.style.transform = `translateX(calc(-${transformX}% - ${(gap * active) / countChildren}px))`;


        //nếu cho phép drag, cập nhật giá trị margin-left
        if (configs.allowDrag) {
            ref.current.style.marginLeft = dragX + 'px';
        }

        //nếu có auto slide thì thiết lập timeout
        if (configs.auto) {
            autoSlideTimeout.current = setTimeout(() => {
                //nếu active < số slide còn lại -> cập nhật giá trị active bằng setactive (active + 1)
                if (active < maxSlide) {
                    setActive(active + 1);

                } else {
                    setActive(0);
                }
            }, configs.autoDuration)
        }
    }

    //
    const nextSlide = () => {
        if (active < maxSlide) {
            setActive(active + 1);
        }
    }

    const prevSlide = () => {
        if (active > 0) {
            setActive(active - 1);
        }
    }

    const changeSlide = (target) => {
        if (target >= 0 && target <= maxSlide + 1) {
            setActive(target);
        } else if (target < 0) {
            setActive(0);
        } else {
            setActive(children.length - 1);
        }
    }

    const startDrag = (e) => {
        let clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
        let draxTemp = dragX;

        let onMoving = (e) => {
            draxTemp = (e instanceof TouchEvent ? e.touches[0].clientX : e.clientX) - clientX;
            setDragX(draxTemp)
        }
        let onEnd = (e) => {
            if (
                Math.abs(draxTemp) > windowSize.width * 0.1
            ) {
                let step = Math.round(Math.abs(draxTemp) / refWrp.current.offsetWidth * sliderPerRow);

                if (draxTemp > 0) {
                    changeSlide(active - (step));
                } else {
                    changeSlide(active + (step));
                }
            }
            setDragX(0);
            document.removeEventListener('mousemove', onMoving);
            document.removeEventListener('mouseup', onEnd);
            document.removeEventListener('touchmove', onMoving);
            document.removeEventListener('touchend', onEnd);
        }
        document.addEventListener('mousemove', onMoving);
        document.addEventListener('mouseup', onEnd);
        document.addEventListener('touchmove', onMoving);
        document.addEventListener('touchend', onEnd);
    }

    return (
        <div
            className="slider-wrp"
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            ref={refWrp}
        >   <div className="overflow-hidden">
                <div
                    className="slider-items"
                    ref={ref}
                    style={{ 
                        width: `var(${(countChildren / configs.sliderPerRow) * 100}% + ${(gap * maxSlide) / configs.sliderPerRow}px)`, 
                        "--transition-duration": `${configs.duration ?? 400}ms`,
                        "--slide-gap": `${configs.gap ?? 0}px`,
                        "--slide-gap-mobile": `${configs.gapMobile ?? 0}px`,
                    }}
                >
                    {Children.map(children, (child, index) => {
                        return cloneElement(child, {
                            className: `slider-item ${child.props.className} ${active === index ? 'slide-active' : ''}`
                        })
                    })}
                </div>
            </div>
            
            <div className="slider-control">
                <div className={`prev-button ${ disablePrev ? 'btn-disable': '' }`}>
                    <button className="my-prev-btn" onClick={prevSlide}>
                        <img className="w-full icon-sm" src="./img/icon/chevron-left-black.svg" alt="smile" loading="lazy"/>
                    </button>
                </div>
                <div className={`next-button ${ disableNext ? 'btn-disable': ''}`}>
                    <button className="my-next-btn" onClick={nextSlide}>
                        <img className="w-full icon-sm" src="./img/icon/chevron-right-black.svg" alt="smile" loading="lazy"/>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Slider;