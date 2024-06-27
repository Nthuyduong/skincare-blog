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

const Header = React.memo(() => {
    const router = useRouter();
    const trans = useTrans();

    const { handleSearch, setKeyword, loadMore, results, keyword, loadingSearch, paginate } = useApp();
    // Test for button search
    const [showw, setShoww] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const headerRef = useRef(null);
    const headerMobileRef = useRef(null);
    const searchRef = useRef(null);

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

    // copy
    useEffect(() => {
        function handleNavHover() {
            const navItems = document.querySelectorAll('.header-nav-item');
            const hoverBar = document.querySelector('.header-hover-bar');
            const headerNav = document.querySelector('.header-nav');
            function activeNav(item) {
                if (hoverBar) {
                    const navText = item.querySelector('.nav-text');
                    
                    hoverBar.style.width = `${navText.offsetWidth}px`;
                    hoverBar.style.transform = `translateX(${item.offsetLeft}px)`;
                    hoverBar.style.opacity = '1';
                }
            }
            navItems.forEach((item) => {
                const navText = item.querySelector('.nav-text');
                const dataNav = item.getAttribute('data-nav');
                if (dataNav === router.asPath) {
                    setTimeout(() => {
                        activeNav(item);
                    }, 100);
                }
                item.addEventListener('mouseenter', () => {
                    activeNav(item);
                })
            })
            headerNav.addEventListener('mouseleave', () => {
                const checkActive = document.querySelector('.header-nav-item[data-nav="' + router.asPath + '"]');
                if (!checkActive) {
                    if (hoverBar) {
                        hoverBar.style.width = '0';
                    }
                } else {
                    activeNav(checkActive);
                }
            })
        }
        handleNavHover();
    }, [router.asPath]);

    useEffect(() => {
        const { keyword } = router.query;
        if (keyword) {
            setKeywordType(keyword);
        }
    }, [router.query]);

    useEffect(() => {
        prevScrollpos = window.pageYOffset;

        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

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
        if (!showw) {
            searchRef.current.focus();
        } else {
            searchRef.current.blur();
        }
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
                className="heaed-mobile border-solid border-ccc dark:border-999 border-b dark:!bg-black !bg-white md:hidden sticky bg-white z-50 top-header justify-center w-full mx-auto my-0"
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
                            <img className="h-3" src="/img/logo2.svg" alt="smile" loading="lazy" height={200} width={200} />
                        </div>
                    </Link>
                    {/* <div className="hidden">
                        <button type="button"
                            onClick={toggleVisibility}
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none">
                            <img className="icon-ssm dark:hidden" src="/img/icon/Search.svg" alt="smile" loading="lazy" />
                            <img className="icon-ssm hidden dark:block" src="/img/icon/Search-white.svg" alt="smile" loading="lazy" />
                        </button>
                    </div>
                    <div>
                        <ThemeToggle />
                    </div> */}
                </div>
                <div className={`header-mobile-content bg-white dark:bg-black h-full ${showMenu ? 'active' : ''}`}>
                    <div className="p-4">
                        {/*Search bar mobile*/}
                        <div className="flex pb-3 border-b border-ccc">
                            <div className="flex align-center self-center pr-2">
                                <img className="icon-ssm dark:hidden" src="/img/icon/Search.svg" alt="smile" loading="lazy" height={100} width={100} />
                                <img className="icon-ssm hidden dark:block" src="/img/icon/Search-white.svg" alt="smile" loading="lazy" height={100} width={100} />
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
                            <div className={`my-collapse dark:border-b dark:border-ccc`}>
                                <div className="question-container flex">
                                    <div className="question mr-auto">
                                        <Link href={`/categories/guides-and-tutorial`}>
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
                                    <div><Link href={'/categories/guides-and-tutorial/skincare-routine'}>Skincare routine</Link></div>
                                    <div><Link href={'/categories/guides-and-tutorial/usage-guide'}>Usage guide</Link></div>
                                    <div><Link href={'/categories/guides-and-tutorial/nourish-beauty'}>Nourish beauty</Link></div>
                                    <div><Link href={'/categories/guides-and-tutorial/sun-care'}>Sun care</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className={`my-collapse dark:border-b dark:border-ccc`}>
                                <div className="question-container flex">
                                    <div className="question mr-auto">
                                        <Link href={`/categories/selfcare-nerd`}>
                                            {trans.header.nerd}
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
                                    <div><Link href={'/categories/selfcare-nerd/skin-concern'}>Skin concerns</Link></div>
                                    <div><Link href={'/categories/selfcare-nerd/tips-advices'}>Tips & Advices</Link></div>
                                    <div><Link href={'/categories/selfcare-nerd/hair-care'}>Hair care</Link></div>
                                    <div><Link href={'/categories/selfcare-nerd/mental-health'}>Mental health</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 border-solid border-b border-ccc"><Link href={ROUTER.INGREDIENT}>Skincare ingredients</Link></div>
                        {/*<div className="py-3 border-b border-ccc"><Link href={ROUTER.INGREDIENT}>Testings & Reviews</Link></div>*/}
                        <div className="">
                            <div className={`my-collapse dark:border-b dark:border-ccc`}>
                                <div className="question-container flex">
                                    <div className="question mr-auto">
                                        {trans.header.about}
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
                        <div className="py-3 border-b border-ccc">
                            <Link href={ROUTER.CONTACT}>
                                {trans.header.contact}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`mobile-menu-overlay ${showMenu ? 'block' : 'hidden'}`}>
                </div>
            </div>

            {/*WEBSITE HEADER*/}
            <div className="hidden md:flex top-header justify-center py-3 justify-center w-full items-center m-w mx-auto my-0">
                <ThemeToggle />
                <Link href={ROUTER.HOME} className="flex-1">
                    <div className="items-center justify-center w-full hidden dark:flex">
                        <img className="h-4" src="/img/logo1.svg" alt="smile" loading="lazy" />
                    </div>
                    <div className="flex items-center justify-center w-full dark:hidden">
                        <img className="h-4" src="/img/logo2.svg" alt="smile" loading="lazy" height={200} width={300} />
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
                        className="relative rounded-full bg-gray-800 py-1 text-gray-400 focus:outline-none">
                        <img className="icon-ssm dark:hidden" src="/img/icon/Search.svg" alt="smile" loading="lazy" height={100} width={100} />
                        <img className="icon-ssm hidden dark:block" src="/img/icon/Search-white.svg" alt="smile" loading="lazy" height={100} width={100} />
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
                                        <div className="flex mr-auto w-full border-solid border-b border-ccc !border-999 focus-visible:outline-none pointer-events-auto dark:focus:border-white focus:border-333 searchbar-head">
                                            <div className="flex align-center self-center pr-2">
                                                <img className="icon-ssm dark:hidden" src="/img/icon/Search.svg" alt="smile" loading="lazy" height={100} width={100} />
                                                <img className="icon-ssm hidden dark:block" src="/img/icon/Search-white.svg" alt="smile" loading="lazy" height={100} width={100} />
                                            </div>
                                            <div className="my-search-bar nav-search w-full">
                                                <input
                                                    ref={searchRef}
                                                    className="p-1 w-full"
                                                    placeholder="Enter article name and hit enter..."
                                                    onChange={(e) => { setKeywordType(e.target.value) }}
                                                    onKeyDown={(e) => e.key === 'Enter' && handleModalSearch()}
                                                    value={keywordType}
                                                />
                                            </div>
                                            <button type="button"
                                                onClick={(e) => { setKeywordType("") }}
                                                className="relative rounded-full bg-gray-800 pl-1 py-1 text-gray-400 focus:outline-none">
                                                <img className="icon-ssm dark:hidden" src="/img/icon/x.svg" alt="smile" loading="lazy" height={100} width={100} />
                                                <img className="icon-ssm hidden dark:block" src="/img/icon/x-light.svg" alt="smile" loading="lazy" />
                                            </button>
                                        </div>
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
                                    {results?.length == 0 && (
                                        <div className="grid grid-cols-12 mt-4">
                                            <div className="col-span-2"></div>
                                            <div className="col-span-8">
                                                {isSearch && (
                                                    <div className="text-center p-4 dark:color-black dark:bg-333 bg-primary my-4">
                                                        "Sorry, but nothing matched your search terms. Please try again with some different keywords."
                                                    </div>
                                                )}
                                                {/*<div className="medium_text mb-3">Popular search</div>*/}
                                                {/*<div className="flex gap-2 mt-2">*/}
                                                {/*    <div className="border-solid !border-999 border-ccc border py-1 px-3 rounded-xl">New post</div>*/}
                                                {/*    <div className="border-solid !border-999 border-ccc border py-1 px-3 rounded-xl">Popular post</div>*/}
                                                {/*    <div className="border-solid !border-999 border-ccc border py-1 px-3 rounded-xl">Clean skin</div>*/}
                                                {/*    <div className="border-solid !border-999 border-ccc border py-1 px-3 rounded-xl">Beauty</div>*/}
                                                {/*    <div className="border-solid !border-999 border-ccc border py-1 px-3 rounded-xl">Food and skin</div>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div className="col-span-2"></div>
                                        </div>
                                    )}
                                    {results?.length > 0 && (
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-2"></div>
                                            <div className="pt-4 col-span-8">
                                                {/* <div className="medium_text mb-3">Article</div> */}
                                                <div className="grid grid-cols-4 gap-4">
                                                    {(results || []).filter((x, i) => i < 4).map((result, index) => {
                                                        if (result.table_name == 'ingredient') {
                                                            return (
                                                                <div className="h-popular-des-ct" key={index}>
                                                                    <div className="medium_text">Ingredient</div>
                                                                    {result.featured_img && (
                                                                        <div className="des-ct-img overflow-hidden">
                                                                            <div className="hover-img">
                                                                                <div className="img-inner">
                                                                                    <Link
                                                                                        href={'/ingredient/' + result.slug}
                                                                                        className="border-solid border-b border-ccc !border-999 pb-4"
                                                                                    >
                                                                                        <img
                                                                                            className="set-img"
                                                                                            src={BASE_URL + '/storage/' + result?.featured_img}
                                                                                            alt="smile"
                                                                                            loading="lazy"

                                                                                        />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )}

                                                                    <div className="category-des-content">
                                                                        <Link
                                                                            href={'/ingredient/' + result.slug}
                                                                            className="border-solid border-b border-ccc !border-999 pb-4"
                                                                        >
                                                                            <div className="medium_text top-destination-title py-2 dark:border-b dark:!border-ccc">
                                                                                {result?.title}
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            )

                                                        }
                                                        return (
                                                            <div className="h-popular-des-ct" key={index}>
                                                                <div className="des-ct-img overflow-hidden">
                                                                    <div className="hover-img">
                                                                        <div className="img-inner">
                                                                            <Link
                                                                                href={'/article/' + result.slug}
                                                                                className="border-solid border-b border-ccc !border-999 pb-4"
                                                                            >
                                                                                <img
                                                                                    className="set-img"
                                                                                    src={BASE_URL + '/storage/' + result?.featured_img}
                                                                                    alt="smile"
                                                                                    loading="lazy"

                                                                                />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="category-des-content">
                                                                    <Link
                                                                        href={'/article/' + result.slug}
                                                                        className="border-solid border-b border-ccc !border-999 pb-4"
                                                                    >
                                                                        <div className="medium_text top-destination-title py-2 dark:border-b dark:!border-ccc">
                                                                            {result?.title}
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                {results.length > 0 && (
                                                    <div className="flex justify-center">
                                                        <div
                                                            className="text-link mt-3 py-1 r w-max cursor-pointer"
                                                            onClick={handleLoadMore}
                                                        >
                                                            Load more
                                                        </div>
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

                                <div className="hidden lg:!block dark:text-black flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="w-full hidden sm:ml-0 md:ml-0 sm:block">
                                        <div className="header-nav relative flex space-x-4 justify-center">
                                            {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                                            <div
                                                className="header-nav-item relative bg-gray-900 guide-navdrop rounded-md"
                                                data-nav="/categories/guides_and_tutorial"
                                            >
                                                <div className="navdrop-title pr-3 py-4">
                                                    <Link href={`/categories/guides-and-tutorial`} className="dark:text-white flex nav-link"><span className="nav-text">{trans.header.guide}</span>
                                                        <span className="ml-1 dark:hidden flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down-black.svg" alt="smile" loading="eager" height={20} width={20} />
                                                        </span>
                                                        <span className="ml-1 hidden dark:flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down.svg" alt="smile" loading="eager" height={20} width={20} />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="navdrop-inner absolute py-1 border-x border-solid border-b border-ccc dark:border-999 dark:!bg-black">
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={'/categories/guides-and-tutorial/skincare-routine'} className="body_text dark:text-white nav-link">Skincare routine</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={'/categories/guides-and-tutorial/usage-guide'} className="body_text dark:text-white nav-link">Usage guide</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={'/categories/guides-and-tutorial/nourish-beauty'} className="body_text dark:text-white nav-link">Nourish beauty</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={'/categories/guides-and-tutorial/sun-care'} className="body_text dark:text-white nav-link">Sun care</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="header-nav-item relative destination-navdrop"
                                                data-nav="/categories/selfcare_nerd"
                                            >
                                                <div className="navdrop-title z-50 text-gray-300 hover:text-gray rounded-md pr-3 py-4">
                                                    <Link href={`/categories/selfcare-nerd`} className="dark:text-white flex nav-link"><span className="nav-text">{trans.header.nerd}</span>
                                                        <span className="ml-1 dark:hidden flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down-black.svg" alt="smile" loading="eager" height={20} width={20} />
                                                        </span>
                                                        <span className="ml-1 hidden dark:flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down.svg" alt="smile" loading="eager" height={20} width={20} />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="navdrop-inner absolute left-30 w-48 py-1 border-solid border-x border-b border-ccc dark:border-999 dark:!bg-black">
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700 dark:!text-white">
                                                        <Link href={'/categories/selfcare-nerd/skin-concern'} className="body_text nav-link">Skin concerns</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700 dark:!text-white">
                                                        <Link href={'/categories/selfcare-nerd/tips-advices'} className="body_text nav-link">Tips & advices</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700 dark:!text-white">
                                                        <Link href={'/categories/selfcare-nerd/hair-care'} className="body_text nav-link">Hair care</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700 dark:!text-white">
                                                        <Link href={'/categories/selfcare-nerd/mental-health'} className="body_text nav-link">Mental health</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="header-nav-item text-gray-300 hover:text-gray rounded-md pr-3 py-4"
                                                data-nav={ROUTER.INGREDIENT}
                                            >
                                                <Link href={ROUTER.INGREDIENT} className="dark:text-white nav-link"><span className="nav-text">{trans.header.ingredient}</span></Link>
                                            </div>
                                            {/*<div className="text-gray-300 hover:text-gray rounded-md pr-3 py-4">*/}
                                            {/*    <Link href={ROUTER.SUBDES} className="dark:text-white nav-link">Testings & Reviews</Link>*/}
                                            {/*</div>*/}
                                            <div
                                                className="header-nav-item relative destination-navdrop"
                                                data-nav="/about"
                                            >
                                                <div className="navdrop-title z-50 text-gray-300 hover:text-gray py-4 pr-0">
                                                    <Link href={ROUTER.ABOUT} className="dark:text-white nav-link flex"><span className="nav-text">{trans.header.about}</span>
                                                        <span className="ml-1 dark:hidden flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down-black.svg" alt="smile" loading="eager" height={20} width={20} />
                                                        </span>
                                                        <span className="ml-1 hidden dark:flex items-center">
                                                            <img className="icon-ssm" src="/img/icon/chevron-down.svg" alt="smile" loading="eager" height={20} width={20} />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="navdrop-inner absolute left-30 w-48 py-1 border-solid border-x border-b border-ccc dark:border-999 dark:!bg-black">
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={ROUTER.SKINTYPE} className="body_text dark:text-white nav-link">My skin history</Link>
                                                    </div>
                                                    <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                                                        <Link href={ROUTER.ABOUT} className="body_text dark:text-white nav-link">About Blog</Link>
                                                    </div>
                                                    {/*<div className="sub-menu block px-4 py-2 text-sm text-gray-700">*/}
                                                    {/*    <Link href={ROUTER.CONTACT} className="body_text dark:text-white nav-link">Contact us</Link>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                            <div
                                                className="header-nav-item text-gray-300 hover:text-gray rounded-md py-4"
                                                data-nav={ROUTER.CONTACT}
                                            >
                                                <Link href={ROUTER.CONTACT} className="dark:text-white nav-link"><span className="nav-text">{trans.header.contact}</span></Link>
                                            </div>
                                            {/*Nên copy Animation border button hover xinh xinh */}
                                            <div className="header-hover-bar"></div>
                                        </div>
                                    </div>

                                </div>

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
})

export default Header;