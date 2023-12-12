import React, { useEffect, useState } from "react";
import { ROUTER } from "../../utils/constants";
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

import { getLanguage, getTheme, setTheme } from "../../utils/local-store";
import { changeLanguage } from "../../lang/index";

const Header = () => {

    const { t } = useTranslation();

    // Test for button search
    const [showw, setShoww] = useState(false);

    const toggleVisibility = () => {
        setShoww(!showw);
    };

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 300 ) {
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    const handleSetTheme = (theme) => {
        setTheme(theme);
        window.location.reload();
    }
    return(
        <div>
            <div className="top-header flex justify-center p-4">
                <div className="">
                    <img className="h-5" src="./img/logo2.svg" alt="smile" loading="lazy"/>
                </div>
            </div>
            {/*search popdown*/}
            <div id="search-popdown" className={`searchbar ${showw ? 's-true' : 's-false'}`}>
                <div className="search-bar-inner">
                    <div className="search-here">
                        <div className="grid grid-cols-12">
                            <div className="col-span-10 self-center">
                                <div className="flex">
                                    <div className="flex align-center self-center pr-2">
                                        <img className="icon-ssm" src="./img/icon/Search.svg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div className="my-search-bar nav-search">
                                        <input className="searchbar-head p-1" placeholder="Search your destination..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 close-search">
                                <button type="button"
                                        onClick={toggleVisibility}
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none">
                                    <img className="icon-ssm" src="./img/icon/x.svg" alt="smile" loading="lazy"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*nav bar*/}
            <div className={`active ${show && 'hidden'}`}>
                <nav className="nav_blog" id="blog-nav">
                    <div className="nav-blog-inner px-0 sm:px-0 lg:px-0">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/*mobile menu button*/}
                                <button type="button"
                                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open main menu</span>
                                    {/*Icon when menu is closed.*/}
                                    {/*Menu open: "hidden", Menu closed: "block"*/}
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                    </svg>
                                    {/*Icon when menu is open.*/}
                                    {/*Menu open: "block", Menu closed: "hidden"*/}
                                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="w-full hidden sm:ml-0 md:ml-0 sm:block">
                                    <div className="flex space-x-4 justify-center">
                                        {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                                        <div className="relative bg-gray-900 guide-navdrop rounded-md">
                                            <div className="navdrop-title pr-3 py-4">
                                                <Link href={ROUTER.DESTINATION} className="flex nav-link">{t('header.guide')}
                                                    <span className="ml-1">
                                                        <img className="icon-ssm" src="./img/icon/chevron-down-black.svg" alt="smile" loading="lazy"/>
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="navdrop-inner absolute">
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.SUBDES} className="nav-link">Help for beginners</Link>
                                                </div>
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.SUBDES} className="nav-link">How to clean</Link>
                                                </div>
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.SUBDES} className="nav-link">Shopping guide</Link>
                                                </div>
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.SUBDES} className="nav-link">Layer skincare</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative destination-navdrop">
                                            <div className="navdrop-title z-50 text-gray-300 hover:text-gray rounded-md pr-3 py-4">
                                                <Link href={ROUTER.DESTINATION} className="flex nav-link">{t('header.routine')}
                                                    <span className="ml-1">
                                                        <img className="icon-ssm" src="./img/icon/chevron-down-black.svg" alt="smile" loading="lazy"/>
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="navdrop-inner absolute left-30 w-48 py-1">
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.SUBDES} className="nav-link">Routine by skin types</Link>
                                                </div>
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.SUBDES} className="nav-link">Season routine</Link>
                                                </div>
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.SUBDES} className="nav-link">My routine</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-gray-300 hover:text-gray rounded-md pr-3 py-4">
                                            <Link href={ROUTER.ABOUT} className="nav-link">{t('header.review')}</Link>
                                        </div>
                                        <div className="rounded-md pr-4 py-4">
                                            <Link href={ROUTER.CONTACT} className="nav-link">{t('header.tips')}</Link>
                                        </div>
                                        <div className="relative destination-navdrop">
                                            <div className="navdrop-title z-50 text-gray-300 hover:text-gray py-4 pr-0">
                                                <Link href="#" className="nav-link flex">{t('header.about')}
                                                    <span className="ml-1">
                                                        <img className="icon-ssm" src="./img/icon/chevron-down-black.svg" alt="smile" loading="lazy"/>
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="navdrop-inner absolute left-30 w-48 py-1">
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.ABOUT} className="nav-link">About Blog</Link>
                                                </div>
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.SUBDES} className="nav-link">My skin history</Link>
                                                </div>
                                                <div className="block px-4 py-2 text-sm text-gray-700">
                                                    <Link href={ROUTER.CONTACT} className="nav-link">Contact me</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-shrink-0 items-center">
                                    <img className="h-8 w-auto"
                                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                         alt="Your Company"/>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="flex">
                                    {/*<div className="flex px-2 gap-2 items-center">*/}
                                    {/*    <div */}
                                    {/*        className={`cursor-pointer${getLanguage() == 'en' ? ' font-bold' : ''}`}*/}
                                    {/*        onClick={() => changeLanguage('en')}*/}
                                    {/*    >*/}
                                    {/*        en*/}
                                    {/*    </div>*/}
                                    {/*    <div */}
                                    {/*        className={`cursor-pointer${getLanguage() == 'vn' ? ' font-bold' : ''}`}*/}
                                    {/*        onClick={() => changeLanguage('vn')}*/}
                                    {/*    >*/}
                                    {/*        vn*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="flex px-2 gap-2 items-center">*/}
                                    {/*    <div */}
                                    {/*        className={`cursor-pointer${getTheme() == 'light' ? ' font-bold' : ''}`}*/}
                                    {/*        onClick={() => handleSetTheme('light')}*/}
                                    {/*    >*/}
                                    {/*        light*/}
                                    {/*    </div>*/}
                                    {/*    <div */}
                                    {/*        className={`cursor-pointer${getTheme() == 'dark' ? ' font-bold': ''}`}*/}
                                    {/*        onClick={() => handleSetTheme('dark')}*/}
                                    {/*    >*/}
                                    {/*        dark*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div>
                                        <button type="button"
                                                onClick={toggleVisibility}
                                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none">
                                            <img className="icon-ssm" src="./img/icon/search.svg" alt="smile" loading="lazy"/>
                                        </button>
                                    </div>
                                    {/*<div>*/}
                                    {/*    <button type="button"*/}
                                    {/*            className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none">*/}
                                    {/*        <img className="icon-ssm" src="./img/icon/heart.svg" alt="smile" loading="lazy"/>*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Mobile menu, show/hide based on menu state.*/}
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                            <Link href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                               aria-current="page">Home</Link>
                            <Link href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</Link>
                            <Link href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Destinations</Link>
                            <Link href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Gallery</Link>
                            <Link href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header;