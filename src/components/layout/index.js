import React, {useState, useEffect} from "react";
import Header from "./header";
import Footer from "./footer";
import { ROUTER } from "../../utils/constants";
import { useRouter } from 'next/router';
import Sidebar from "./sidebar";
import { getLanguage, getTheme } from "../../utils/local-store";
import Modals from "../modal";

import { useDispatch } from "react-redux";
import { showModal } from "../../store/modal/modal.action";

const Layout = ({ children }) => {
    // khai báo dispatch để sử dụng action cho store modal
    const dispatch = useDispatch();

    //Back-to-top function
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    //display and hide scroll to top button
    const [appear, setAppear] = useState(false);

    const controlBtn = () => {
        if (window.scrollY > 600 ) {
            setAppear(true)
        }else{
            setAppear(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlBtn)
        return () => {
            window.removeEventListener('scroll', controlBtn)
        }
    }, [])

    //hide header and footer from page layout
    const discardElement = [ROUTER.ADMIN, ROUTER.ADCATEGORY, ROUTER.ADPOST, ROUTER.ADLOGIN, ROUTER.ADDASHBOARD];
    const { pathname } = useRouter();

    const [show, setShow] = useState(false)
    //Change width of main page body
    const adminWrap = () => {
        if (discardElement.some((route) => pathname.includes(route))) {
            setShow(true)
        }
        else {
            setShow(false);
        }
    }
    
    useEffect(() => {
        adminWrap();
    }, [pathname]);

    // const handleLoading = () => {
    //     // gọi action show modal loading
    //     dispatch(showModal({
    //         name: "loading",
    //         data: {
    //             message: "Đang tải dữ liệu",
    //         },
    //         invisibleBackground: true,
    //         enableClickOutside: false,
    //     }))
    // }

    //hide header and footer from page layout
    if (discardElement.some((route) => pathname.includes(route))) {
        return (
            <div className="page">
                {pathname.includes(ROUTER.ADLOGIN) ? null : <Sidebar/>}
                {/*<div className={`page-body-wrapper ${show && 'admin-wrapper'}`}>*/}
                <div className={`page-body-wrapper ${pathname.includes(ROUTER.ADLOGIN) ? '' : 'admin-wrapper'}`}>
                    {/*<button onClick={handleLoading}>*/}
                    {/*    show loading*/}
                    {/*</button>*/}
                    {children}
                </div>
                <Modals/>
            </div>
        );
    }

    return(
        // Ví dụ về cách sử dụng biến css trong trường hợp thay đổi font-family theo ngôn ngữ
        // có thể áp dụng cách này cho trường hợp muốn làm chức năng theme dark/light
        // theme dark/light color: --primary, --secondary, --tertiary, --white, --black
        <div 
            className="page"
            style={{
                "--font-family": getLanguage() == 'vn' ? 'serif' : '',
                "--text-primary": getTheme() == 'light' ? 'black' : 'white',
                "--background-primary": getTheme() == 'light' ? 'white' : 'black',
            }}
        >
            <Header />
            <div className={`page-body-wrapper test`}>
                {children}
            </div>
            <Footer />
            <div className={`back-to-top ${appear && 'back-show'}`} onClick={() => { scrollToTop() }}>
                <img className="icon-sm" src="/img/icon/chevron-up-black.svg" alt="smile" loading="lazy"/>
            </div>
            <Modals/>
        </div>
    )
}
export default Layout;