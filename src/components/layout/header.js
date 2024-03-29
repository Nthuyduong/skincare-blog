import React, { useEffect, useState, useRef, use } from "react";
import { ROUTER } from "@utils/constants";
import Link from 'next/link'
import { useTrans } from "@hooks/useTrans";
import { setTheme } from "@utils/local-store";
import { useRouter } from 'next/router'
import ThemeToggle from "./themeToggle";
import { useClickOutside } from "@hooks/dom";
import { useApp } from "@hooks/useApp";
import { BASE_URL } from "@utils/apiUtils";
import Loading from "@components/common/loading/loading";

const Header = () => {
    const router = useRouter();
    const trans = useTrans();

    const { handleSearch, setKeyword, loadMore, results, keyword, loadingSearch, paginate } = useApp();

    // Test for button search
    const [showw, setShoww] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const headerRef = useRef(null);
    const headerMobileRef = useRef(null);

    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setShoww(false);
            setShowMenu(false);
        });
        return () => {
            router.events.off('routeChangeStart', () => {
                setShoww(false);
                setShowMenu(false);
            });
        }
    }, [])

    useEffect(() => {
        const { keyword } = router.query;
        if (keyword) {
            setKeywordType(keyword);
        }
    }, [router.query]);

    // Xử lý search
    const [keywordType, setKeywordType] = useState("");
    const handleModalSearch = () => {
        setIsSearch(true);
        handleSearch(keywordType, 4);
    }

    const handleLoadMore = () => {
        if (keywordType) {
            router.push({
                pathname: ROUTER.SEARCH,
                query: { keyword: keywordType }
            })
        }
    }

    const toggleVisibility = () => {
        setShoww(!showw);
    };

    const handleVisibility = () => {
        setShoww(false);
    }

    const ref = useClickOutside(handleVisibility);

    let prevScrollpos = 0;

    const controlNavbar = () => {
        var currentScrollPos = window.pageYOffset;
        if (headerRef.current) {
            if (prevScrollpos > currentScrollPos) {
                headerRef.current.style.top = "0";
                headerMobileRef.current.style.top = "0";
            } else {
                headerRef.current.style.top = "-75px";
                headerMobileRef.current.style.top = "-105px";
                setShowMenu(false);
            }
            prevScrollpos = currentScrollPos;
        }
    }

    const changeLanguage = (nextLocale) => {
        const { pathname, asPath, query } = router

        // change just the locale and maintain all other route information including href's query
        router.push({ pathname, query }, asPath, { locale: nextLocale })
    }
    useEffect(() => {
        prevScrollpos = window.pageYOffset;

        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    const handleSetTheme = (theme) => {
        setTheme(theme);
        window.location.reload();
    }

    // this is for tab
    const [activeTab, setActiveTab] = useState(false);

    const toggleCollapse = () => {
        setActiveTab((prevIndex) => (prevIndex === null ? 0 : null));
    };

    const [activeTab2, setActiveTab2] = useState(false);

    const toggleCollapse2 = () => {
        setActiveTab2((prevIndex) => (prevIndex === null ? 0 : null));
    };

    const [activeTab3, setActiveTab3] = useState(false);

    const toggleCollapse3 = () => {
        setActiveTab3((prevIndex) => (prevIndex === null ? 0 : null));
    };

    return (
        <>
            {/*MOBILE HEADER*/}
            <div
                ref={headerMobileRef}
                className="heaed-mobile border-solid border-ccc dark:border-999 border-b dark:!bg-black !bg-white md:hidden sticky bg-white z-50 top-header justify-center w-full m-w mx-auto my-0"
                style={{ top: '0' }}
            >
                <div className="py-2 relative heaeder-mobile-contain flex justify-center items-center w-full bg-white dark:bg-black">
                    <button type="button"
                        className="lg:hidden relative inline-flex items-center justify-center
                        rounded-md p-2 text-gray-400 hover:bg-gray-700
                        focus:outline-none"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        {/*Icon when menu is closed.*/}
                        {/*Menu open: "hidden", Menu closed: "block"*/}
                        <svg className="block h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        {/*Icon when menu is open.*/}
                        {/*Menu open: "block", Menu closed: "hidden"*/}
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/*main logo*/}
                    <Link href={ROUTER.HOME} className="flex-1">
                        <div className="items-center justify-center w-full hidden dark:flex">
                            <img className="h-3" src="/img/logo1.svg" alt="smile" loading="lazy" />
                        </div>
                        <div className="flex items-center justify-center w-full dark:hidden">
                            <img className="h-3" src="/img/logo2.svg" alt="smile" loading="lazy" />
                        </div>
                    </Link>
                    <div className="hidden">
                        <button type="button"
                            onClick={toggleVisibility}
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none">
                            <img className="icon-ssm dark:hidden" src="/img/icon/search.svg" alt="smile" loading="lazy" />
                            <img className="icon-ssm hidden dark:block" src="/img/icon/Search-white.svg" alt="smile" loading="lazy" />
                        </button>
                    </div>
                </div>
                <div className={`header-mobile-content bg-white dark:bg-black h-full ${showMenu ? 'active' : ''}`}>
                    <div className="p-4">
                        {/*Search bar mobile*/}
                        <div className="flex pb-3 border-b border-ccc">
                            <div className="flex align-center self-center pr-2">
                                <img className="icon-ssm dark:hidden" src="/img/icon/search.svg" alt="smile" loading="lazy" />
                                <img className="icon-ssm hidden dark:block" src="/img/icon/Search-white.svg" alt="smile" loading="lazy" />
                            </div>
                            <div className="my-search-bar nav-search w-full">
                                <input
                                    className="searchbar-head p-1 w-full"
                                    placeholder="Enter article name and hit enter..."
                                    onChange={(e) => { setKeywordType(e.target.value) }}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className={`my-collapse dark:border-b dark:border-ccc ${activeTab === 0 ? 'expanded' : ''}`}>
                                <div className="question-container flex" onClick={toggleCollapse}>
                                    <div className="question mr-auto">
                                        <Link href={`/categories/1`}>
                                            {trans.header.guide}
                                        </Link>
                                    </div>
                                    <div className="btn-question flex justify-center items-center">
                                        <svg role="presentation" focusable="false" width="12" height="9"
                                            className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                            <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor"
                                                strokeWidth="1.5"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`content-container`}>
                                    <div><Link href={'/sub-des/9'}>How to</Link></div>
                                    <div><Link href={'/sub-des/10'}>Skincare routine</Link></div>
                                    <div><Link href={'/sub-des/3'}>Usage guide</Link></div>
                                    <div><Link href={'/sub-des/4'}>Sun care</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className={`my-collapse dark:border-b dark:border-ccc ${activeTab2 === 0 ? 'expanded' : ''}`}>
                                <div className="question-container flex" onClick={toggleCollapse2}>
                                    <div className="question mr-auto">
                                        <Link href={`/categories/2`}>
                                            Skincare nerd
                                        </Link>
                                    </div>
                                    <div className="btn-question flex justify-center items-center">
                                        <svg role="presentation" focusable="false" width="12" height="9"
                                            className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                            <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor"
                                                strokeWidth="1.5"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`content-container`}>
                                    <div><Link href={'/sub-des/5'}>Skin concerns</Link></div>
                                    <div><Link href={'/sub-des/6'}>Tips & Advices</Link></div>
                                    <div><Link href={'/sub-des/7'}>Nuturish</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 border-b border-ccc"><Link href={ROUTER.TESTREVIEW}>Skincare ingredients</Link></div>
                        {/*<div className="py-3 border-b border-ccc"><Link href={ROUTER.INGREDIENT}>Testings & Reviews</Link></div>*/}
                        <div className="">
                            <div className={`my-collapse dark:border-b dark:border-ccc ${activeTab3 === 0 ? 'expanded' : ''}`}>
                                <div className="question-container flex" onClick={toggleCollapse3}>
                                    <div className="question mr-auto">
                                        About
                                    </div>
                                    <div className="btn-question flex justify-center items-center">
                                        <svg role="presentation" focusable="false" width="12" height="9"
                                            className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                            <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor"
                                                strokeWidth="1.5"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`content-container`}>
                                    <div><Link href={ROUTER.ABOUT}>About blog</Link></div>
                                    <div><Link href={ROUTER.SKINTYPE}>My skin history</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 border-b border-ccc"><Link href={ROUTER.CONTACT}>Contact us</Link></div>
                    </div>
                </div>
                <div className={`mobile-menu-overlay ${showMenu ? 'block' : 'hidden'}`}>
                </div>
            </div>

            {/*WEBSITE HEADER*/}
            <div className="hidden md:flex top-header justify-center p-3 justify-center w-full items-center m-w mx-auto my-0">
                <ThemeToggle />
                <Link href={ROUTER.HOME} className="flex-1">
                    <div className="items-center justify-center w-full hidden dark:flex">
                        <img className="h-4" src="/img/logo1.svg" alt="smile" loading="lazy" />
                    </div>
                    <div className="flex items-center justify-center w-full dark:hidden">
                        <img className="h-4" src="/img/logo2.svg" alt="smile" loading="lazy" />
                    </div>
                </Link>
                <div className="flex mr-4 !hidden md:!flex">
                    <div
                        className="mr-1 pr-1 border-solid dark:border-r !border-999 border-r border-333 cursor-pointer"
                        onClick={() => changeLanguage('en')}
                    >
                        EN
                    </div>
                    <div className="mr-l cursor-pointer" onClick={() => changeLanguage('vi')}>VN</div>
                </div>
                <div className="">
                    <button type="button"
                        onClick={toggleVisibility}
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none">
                        <img className="icon-ssm dark:hidden" src="/img/icon/search.svg" alt="smile" loading="lazy" />
                        <img className="icon-ssm hidden dark:block" src="/img/icon/Search-white.svg" alt="smile" loading="lazy" />
                    </button>
                </div>
            </div>
            {/*${show ? 'search-hide' : 'search-unhide'}*/}
            {/*search popdown*/}
            <div 
                id="search-popdown" 
                className={`searchbar ${showw ? 'search-true' : 'search-false'} `}
            >
                <div 
                    className="border-solid border-ccc dark:border-999 border-b"
                    ref={ref}
                >
                    <div className="search-bar-inner dark:bg-black">
                        <div className="search-here py-5">
                            <div className="grid grid-cols-12">
                                <div className="col-span-2"></div>
                                <div className="col-span-8 self-center">
                                    <div className="flex search-box">
                                        <div className="flex mr-auto w-full">
                                            <div className="flex align-center self-center pr-2">
                                                <img className="icon-ssm dark:hidden" src="/img/icon/search.svg" alt="smile" loading="lazy" />
                                                <img className="icon-ssm hidden dark:block" src="/img/icon/Search-white.svg" alt="smile" loading="lazy" />
                                            </div>
                                            <div className="my-search-bar nav-search w-full">
                                                <input
                                                    className="border-solid border-b border-ccc !border-999 focus-visible:outline-none pointer-events-auto dark:focus:border-white focus:border-333 searchbar-head p-1 w-full"
                                                    placeholder="Enter article name and hit enter..."
                                                    onChange={(e) => { setKeywordType(e.target.value) }}
                                                    onKeyDown={(e) => e.key === 'Enter' && handleModalSearch()}
                                                    value={keywordType}
                                                />
                                            </div>
                                        </div>
                                        <button type="button"
                                            onClick={toggleVisibility}
                                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none">
                                            <img className="icon-ssm dark:hidden" src="/img/icon/x.svg" alt="smile" loading="lazy" />
                                            <img className="icon-ssm hidden dark:block" src="/img/icon/x-light.svg" alt="smile" loading="lazy" />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-2 close-search">
                                </div>

                            </div>
                            {loadingSearch ? (
                                <>
                                    <div className="w-full pd-8">
                                        <Loading />
                                    </div>
                                </>
                                ) : (
                                <>
                                    { results?.length == 0 && (
                                        <div className="grid grid-cols-12 mt-4">
                                            <div className="col-span-2"></div>
                                            <div className="col-span-8">
                                                {isSearch && (
                                                    <div>
                                                        Sorry, but nothing matched your search terms. Please try again with some different keywords.
                                                    </div>
                                                )}
                                                <div>Popular search</div>
                                                <div className="flex gap-2 mt-2">
                                                    <div className="border-solid border-ccc border px-2 rounded-lg">New post</div>
                                                    <div className="border-solid border-ccc border px-2 rounded-lg">Popular post</div>
                                                    <div className="border-solid border-ccc border px-2 rounded-lg">Clean skin</div>
                                                    <div className="border-solid border-ccc border px-2 rounded-lg">Beauty</div>
                                                    <div className="border-solid border-ccc border px-2 rounded-lg">Food and skin</div>
                                                </div>
                                            </div>
                                            <div className="col-span-2"></div>
                                        </div>
                                    )}
                                    { results?.length > 0 && (
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-2"></div>
                                            <div className="pt-4 col-span-8">
                                                <div>Article</div>
                                                <div className="grid grid-cols-4 gap-4">
                                                    {(results || []).filter((x, i) => i < 4).map((result, index) => {
                                                        return (
                                                            <div className="h-popular-des-ct" key={index}>
                                                                <div className="des-ct-img overflow-hidden">
                                                                    <img 
                                                                        className="w-full" 
                                                                        src={BASE_URL + '/storage/' + result?.featured_img}
                                                                        alt="smile"
                                                                        loading="lazy"
                                                                        height="100" 
                                                                        width="100"
                                                                    />
                                                                </div>
                                                                <div className="category-des-content">
                                                                    <div className="heading_6 top-destination-title py-2 dark:border-b dark:!border-ccc">
                                                                        {result?.title}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                {parseInt(paginate.current) < parseInt(paginate.last) && (
                                                    <div 
                                                        className="w-full flex justify-center cursor-pointer"
                                                        onClick={handleLoadMore}
                                                    >
                                                        Load more
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-span-2"></div>
                                        </div>
                                        
                                    )}
                                </>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
            {/*nav bar*/}
            <div
                ref={headerRef}
                className="!hidden header-desktop sticky lg:!flex border-solid dark:bg-black border-b dark:border-999 border-ccc"
                style={{ top: '0' }}
            >
                <div className="nav-out">
                    <nav className="nav_blog w-full" id="blog-nav">
                        <div className="nav-blog-inner px-0 sm:px-0 lg:px-0">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/*mobile menu button*/}
                                    {/*<button type="button"*/}
                                    {/*        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"*/}
                                    {/*        aria-controls="mobile-menu" aria-expanded="false">*/}
                                    {/*    <span className="absolute -inset-0.5"></span>*/}
                                    {/*    <span className="sr-only">Open main menu</span>*/}
                                    {/*    /!*Icon when menu is closed.*!/*/}
                                    {/*    /!*Menu open: "hidden", Menu closed: "block"*!/*/}
                                    {/*    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"*/}
                                    {/*         stroke="currentColor" aria-hidden="true">*/}
                                    {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
                                    {/*              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>*/}
                                    {/*    </svg>*/}
                                    {/*    /!*Icon when menu is open.*!/*/}
                                    {/*    /!*Menu open: "block", Menu closed: "hidden"*!/*/}
                                    {/*    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"*/}
                                    {/*         stroke="currentColor" aria-hidden="true">*/}
                                    {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                                <div className="hidden lg:!block dark:text-black flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="w-full hidden sm:ml-0 md:ml-0 sm:block">
                                        <div className="flex space-x-4 justify-center">
                                            {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                                            <div className="relative bg-gray-900 guide-navdrop rounded-md">
                                                <div className="navdrop-title pr-3 py-4">
                                                    <Link href={`/categories/1`} className="dark:text-white flex nav-link">{trans.header.guide}
                                                        <span className="ml-1 dark:hidden flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down-black.svg" alt="smile" loading="lazy" />
                                                        </span>
                                                        <span className="ml-1 hidden dark:flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down.svg" alt="smile" loading="lazy" />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="navdrop-inner absolute py-1 border-x border-solid border-b border-ccc dark:border-999 dark:!bg-black">
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={'/sub-des/9'} className="body_text dark:text-white nav-link">How to</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={'/sub-des/10'} className="body_text dark:text-white nav-link">Skincare routine</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={'/sub-des/3'} className="body_text dark:text-white nav-link">Usage guide</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={'/sub-des/4'} className="body_text dark:text-white nav-link">Sun care</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative destination-navdrop">
                                                <div className="navdrop-title z-50 text-gray-300 hover:text-gray rounded-md pr-3 py-4">
                                                    <Link href={`/categories/2`} className="dark:text-white flex nav-link">Skincare nerd
                                                        <span className="ml-1 dark:hidden flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down-black.svg" alt="smile" loading="lazy" />
                                                        </span>
                                                        <span className="ml-1 hidden dark:flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down.svg" alt="smile" loading="lazy" />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="navdrop-inner absolute left-30 w-48 py-1 border-solid border-x border-b border-ccc dark:border-999 dark:!bg-black">
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700 dark:!text-white">
                                                        <Link href={'/sub-des/5'} className="body_text nav-link">Skin concerns</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700 dark:!text-white">
                                                        <Link href={'/sub-des/6'} className="body_text nav-link">Tips & advices</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700 dark:!text-white">
                                                        <Link href={'/sub-des/7'} className="body_text nav-link">Nuturish</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-gray-300 hover:text-gray rounded-md pr-3 py-4">
                                                <Link href={ROUTER.INGREDIENT} className="dark:text-white nav-link">Skincare ingredients</Link>
                                            </div>
                                            {/*<div className="text-gray-300 hover:text-gray rounded-md pr-3 py-4">*/}
                                            {/*    <Link href={ROUTER.SUBDES} className="dark:text-white nav-link">Testings & Reviews</Link>*/}
                                            {/*</div>*/}
                                            <div className="relative destination-navdrop">
                                                <div className="navdrop-title z-50 text-gray-300 hover:text-gray py-4 pr-0">
                                                    <Link href="#" className="dark:text-white nav-link flex">About
                                                        <span className="ml-1 dark:hidden flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down-black.svg" alt="smile" loading="lazy" />
                                                        </span>
                                                        <span className="ml-1 hidden dark:flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down.svg" alt="smile" loading="lazy" />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="navdrop-inner absolute left-30 w-48 py-1 border-solid border-x border-b border-ccc dark:border-999 dark:!bg-black">
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={ROUTER.ABOUT} className="body_text dark:text-white nav-link">About Blog</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={ROUTER.SKINTYPE} className="body_text dark:text-white nav-link">My skin history</Link>
                                                    </div>
                                                    {/*<div className="sub-menu block px-4 py-2 text-sm text-gray-700">*/}
                                                    {/*    <Link href={ROUTER.CONTACT} className="body_text dark:text-white nav-link">Contact us</Link>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                            <div className="text-gray-300 hover:text-gray rounded-md py-4">
                                                <Link href={ROUTER.CONTACT} className="dark:text-white nav-link">Contact us</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="flex flex-shrink-0 items-center">*/}
                                    {/*    <img className="h-8 w-auto"*/}
                                    {/*         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"*/}
                                    {/*         alt="Your Company"/>*/}
                                    {/*</div>*/}
                                </div>
                                {/*<div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">*/}
                                {/*    <div className="flex">*/}
                                {/*        /!*<div className="flex px-2 gap-2 items-center">*!/*/}
                                {/*        /!*    <div *!/*/}
                                {/*        /!*        className={`cursor-pointer${getLanguage() == 'en' ? ' font-bold' : ''}`}*!/*/}
                                {/*        /!*        onClick={() => changeLanguage('en')}*!/*/}
                                {/*        /!*    >*!/*/}
                                {/*        /!*        en*!/*/}
                                {/*        /!*    </div>*!/*/}
                                {/*        /!*    <div *!/*/}
                                {/*        /!*        className={`cursor-pointer${getLanguage() == 'vn' ? ' font-bold' : ''}`}*!/*/}
                                {/*        /!*        onClick={() => changeLanguage('vn')}*!/*/}
                                {/*        /!*    >*!/*/}
                                {/*        /!*        vn*!/*/}
                                {/*        /!*    </div>*!/*/}
                                {/*        /!*</div>*!/*/}
                                {/*        /!*<div className="flex px-2 gap-2 items-center">*!/*/}
                                {/*        /!*    <div *!/*/}
                                {/*        /!*        className={`cursor-pointer${getTheme() == 'light' ? ' font-bold' : ''}`}*!/*/}
                                {/*        /!*        onClick={() => handleSetTheme('light')}*!/*/}
                                {/*        /!*    >*!/*/}
                                {/*        /!*        light*!/*/}
                                {/*        /!*    </div>*!/*/}
                                {/*        /!*    <div *!/*/}
                                {/*        /!*        className={`cursor-pointer${getTheme() == 'dark' ? ' font-bold': ''}`}*!/*/}
                                {/*        /!*        onClick={() => handleSetTheme('dark')}*!/*/}
                                {/*        /!*    >*!/*/}
                                {/*        /!*        dark*!/*/}
                                {/*        /!*    </div>*!/*/}
                                {/*        /!*</div>*!/*/}

                                {/*        /!*<div>*!/*/}
                                {/*        /!*    <button type="button"*!/*/}
                                {/*        /!*            className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none">*!/*/}
                                {/*        /!*        <img className="icon-ssm" src="./img/icon/heart.svg" alt="smile" loading="lazy"/>*!/*/}
                                {/*        /!*    </button>*!/*/}
                                {/*        /!*</div>*!/*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        {/*Mobile menu, show/hide based on menu state.*/}
                        <div className="sm:hidden mobile-navbar" id="mobile-menu">
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
        </>
    )
}

export default Header;