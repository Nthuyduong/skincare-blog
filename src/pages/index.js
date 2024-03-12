import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { ROUTER } from "../utils/constants";
import { BASE_URL } from "@utils/apiUtils";
import { formatDate } from "@utils/format";
import { useRouter } from 'next/router';
import { getBlogNewest, getBlogPopular} from "../services/home";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("@components/common/slider"), { ssr: false });
const Scroller = dynamic(() => import("@components/common/scroller"), { ssr: false });

const Home = ({ newestProps, popularProps, isCsr }) => {
    
    const router = useRouter();

    const [newest, setNewest] = useState(newestProps || []);
    const [popular, setPopular] = useState(popularProps || []);

    useEffect(() => {
        if (isCsr) {
            fetchDataCsr();
        }
    }, [router.asPath]);

    const fetchDataCsr = async () => {
        const res = await Promise.all([
            getBlogNewest(10),
            getBlogPopular(10)
        ]);
        setNewest(res[0] || []);
        setPopular(res[1] || []);
    }

    return (
        <div>
            <div className="home-banner">
                <picture>
                    <source media="(min-width:465px)" srcSet="./img/home/banner2.jpg"/>
                    <img className="w-full" src="./img/home/mobile-banner.png" alt="smile" loading="lazy"/>
                </picture>
            </div>
            <div className="my-0 px-3 mx-auto m-w">
                {/*Lastest on this blog*/}
                <div className="recently-update pt-6 md:pt-8">
                    <div className="animate slideInUp heading_4 md:heading_3 mb-1 md:mb-4">Most useful articles</div>
                    <div className="">
                        <Slider
                            configs={{
                                sliderPerRow: 3,
                                sliderPerRowMobile: 1.25,
                                allowDrag: true,
                                duration: 400,
                                auto: false,
                                autoDuration: 1000,
                                gap: 40,
                                gapMobile: 10,
                                process: true,
                            }}
                        >
                            {popular.map((blog, index) => (
                                <div className="justify-center" key={index}>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="">
                                            <Link href={"/article/" + blog.slug}>
                                                <img className="w-full" src={BASE_URL + '/storage/' + blog?.featured_img} alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div className="">
                                            <div className="article-info md:!border-b md:!border-ccc border-b-0 py-2 mb-2">
                                                <div className="md:flex mb-1">
                                                <div className="mr-auto small_text">{ blog.categories.map((category) => {return category.name}).join(' | ') }</div>
                                                    <div className="small_text">{ formatDate(blog.created_at) }</div>
                                                </div>
                                                <div className="medium_text">{ blog.title }</div>
                                            </div>
                                            <div className="md:flex hidden">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/*List subcategorires*/}
                <div className="flex list-categories md:my-8 my-6 justify-center">
                    <div className="relative w-full md:w-2/3">
                        <div className="absolute left-0 bottom-0 animate-scroll-left">
                            <img
                                className="rounded-full w-2/4"
                                src="./img/home/list-ct-1.jpg"
                            />
                        </div>
                        <div className="w-full relative animate-scroll-up" style={{zIndex: 100}}>
                            <ul className="w-full text-center">
                                <li><Link className="text-xs hover:text-sm md:text-lg md:hover:text-xl text-999 hover:text-333 dark:text-666 dark:hover:text-white transition duration-300 ease-in-out" href={ROUTER.SUBDES}>How to</Link></li>
                                <li><Link className="text-xs hover:text-sm md:text-lg md:hover:text-xl text-999 hover:text-333 dark:text-666 dark:hover:text-white transition duration-300 ease-in-out" href={ROUTER.SUBDES}>Skincare routine</Link></li>
                                <li><Link className="text-xs hover:text-sm md:text-lg md:hover:text-xl text-999 hover:text-333 dark:text-666 dark:hover:text-white transition duration-300 ease-in-out" href={ROUTER.SUBDES}>Usage guide</Link></li>
                                <li><Link className="text-xs hover:text-sm md:text-lg md:hover:text-xl text-999 hover:text-333 dark:text-666 dark:hover:text-white transition duration-300 ease-in-out" href={ROUTER.SUBDES}>Sun care</Link></li>
                                <li><Link className="text-xs hover:text-sm md:text-lg md:hover:text-xl text-999 hover:text-333 dark:text-666 dark:hover:text-white transition duration-300 ease-in-out" href={ROUTER.SUBDES}>Skin concerns</Link></li>
                                <li><Link className="text-xs hover:text-sm md:text-lg md:hover:text-xl text-999 hover:text-333 dark:text-666 dark:hover:text-white transition duration-300 ease-in-out" href={ROUTER.SUBDES}>Tips & Advices</Link></li>
                                <li><Link className="text-xs hover:text-sm md:text-lg md:hover:text-xl text-999 hover:text-333 dark:text-666 dark:hover:text-white transition duration-300 ease-in-out" href={ROUTER.SUBDES}>Skincare ingredients</Link></li>
                                <li><Link className="text-xs hover:text-sm md:text-lg md:hover:text-xl text-999 hover:text-333 dark:text-666 dark:hover:text-white transition duration-300 ease-in-out" href={ROUTER.SUBDES}>Nuturish</Link></li>
                            </ul>
                        </div>
                        <div className="absolute right-0 top-0 flex justify-end animate-scroll-right">
                            <img
                                className="rounded-full w-1/3 md:w-2/3"
                                src="./img/home/list-ct-2.jpg"
                            />
                        </div>
                    </div>
                    
                </div>
                <div className="category-destination pt-6 md:pt-8">
                    <div className="destination-title border-y border-ccc dark:border-y dark:border-999">
                        <div className="md:py-3 md:flex justify-center">
                            {/*breadcrumb*/}
                            <div className="self-center mb-2 md:mb-0">
                                <div className="animate animation-header heading_3">Skincare Guides & Tutorials</div>
                            </div>
                            {/*Change layout*/}
                            <div className="self-center flex ml-auto">
                                <a href="">View all</a>
                                <div className="ml-1">
                                    <img
                                        className="icon-ssm dark:hidden"
                                        src="./img/icon/arrow-right-black.svg"
                                    />
                                    <img
                                        className="hidden dark:block icon-ssm"
                                        src="./img/icon/arrow-right.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 md:col-span-2 h-popular-des-ct">
                            <div className="des-ct-img overflow-hidden">
                                <img
                                    className="w-full"
                                    src="./img/home/category1.png"
                                    alt="smile"
                                    loading="lazy"
                                    height={100}
                                    width={100}/>
                            </div>
                            <div className="category-des-content">
                                <div className="heading_4 top-destination-title py-3 dark:border-b dark:!border-ccc">How to clean</div>
                                <div className="flex py-2 sub-title dark:border-b dark:!border-ccc">
                                    <div className="flex">
                                        <div className="flex pr-1">
                                            <div className="small_text">10 Blogs Article</div>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <a className="text-link small_text" href="#">View all</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-2 h-popular-des-ct">
                            <div className="des-ct-img overflow-hidden">
                                <img
                                    className="w-full"
                                    src="./img/home/category.png"
                                    alt="smile"
                                    loading="lazy"
                                    height={100}
                                    width={100}
                                />
                            </div>
                            <div className="category-des-content">
                                <div className="heading_4 top-destination-title py-3 dark:border-b dark:!border-ccc">Shopping guide</div>
                                <div className="flex py-2 sub-title dark:border-b dark:!border-ccc">
                                    <div className="flex">
                                        <div className="flex pr-1">
                                            <div className="small_text">10 Blogs Article</div>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <a className="text-link small_text" href="#">View all</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Reader's favorite*/}
                <div className="p-100">
                    <div className="heading_3 mb-1 md:mb-4">Reader's Favorite</div>
                    <div className="">
                        <Slider
                            configs={{
                                sliderPerRow: 4,
                                sliderPerRowMobile: 1.25,
                                allowDrag: true,
                                duration: 400,
                                auto: false,
                                autoDuration: 1000,
                                gap: 40,
                                gapMobile: 10,
                                process: true,
                            }}
                        >
                            {newest.map((newest, index) => (
                                <div className="justify-center" key={index}>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="hover-img">
                                            <div className="img-inner">
                                                <Link href={"/article/" + newest.slug}>
                                                    <img className="w-full" src={BASE_URL + '/storage/' + newest?.featured_img} alt="smile" loading="lazy"/>
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="article-info py-2 mb-1 md:!border-b md:!border-ccc border-b-0">
                                                    <div className="md:flex mb-1">
                                                        <div className="mr-auto small_text">{ newest.categories.map((category) => {return category.name}).join(' | ') }</div>
                                                        {/*<div className="small_text">{ formatDate(newest.created_at) }</div>*/}
                                                    </div>
                                                    <div className="medium_text">{ newest.title }</div>
                                                </div>
                                                <div className="md:flex hidden">
                                                    <div className=""><a className="text-link" href="#">Read more</a></div>
                                                    <div className="ml-auto">Share</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="home-decor py-9 md:py-11">
                    <div className="text-center">
                        <div className="heading_1 text-white mx-7">
                            “Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.”
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 my-0 mx-auto m-w pt-8 pb-7">
                <div className="home-about dark:border-t dark:border-b dark:!border-ccc">
                    <div className="md:grid md:grid-cols-12 gap-4">
                        <div className="md:col-span-8 py-6 about-intro md:border-r !border-ccc">
                            <div className="relative">
                                <div className="heading_1">
                                    “Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.”
                                </div>
                                <div className="absolute heading_6 md:mt-auto md:block hidden">Hello & Welcome!</div>
                            </div>
                        </div>
                        <div className="md:col-span-4 about-content pt-3 pb-6 md:py-6">
                            <div>Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut
                                sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus. Diam nec ut sed est sit
                                in tortor. Blandit consequat quisque vitae ornare.</div>
                            <div className="mt-6">
                                <Link href={ROUTER.ABOUT}>
                                    <button className="my-out-line-btn dark:border-ccc" type="submit">MORE ABOUT ME</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subscribe-section">
                    <div className="bg-primary p-5">
                        <div className="flex">
                            <div className="">
                                <img className="w-full" src="./img/home/subscribe.png" alt="smile" loading="lazy"/>
                            </div>
                            <div className="ml-5 text-black flex items-center md:pr-8">
                                <div>
                                    <div className="mb-3 heading_2">Subscribe for newsletters</div>
                                    <div>
                                        Receive the latest updates straight to your inbox. Get stories, exclusive offers, and promotions when you sign up.
                                    </div>
                                    <div className="mt-4">
                                        <button className="px-4 my-btn-pr dark:border-white" type="submit">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className="sectionPin">
                <div className="pin-wrap-sticky">
                    <div className="pin-wrap">
                        <div className="pin-wrap-first-item pin-wrap-item dark:text-white text-black items-center md:pr-8">
                            <div className="mb-3 heading_2">Subscribe for newsletters</div>
                            <div>
                                Receive the latest updates straight to your inbox. Get stories, exclusive offers, and promotions when you sign up.
                            </div>
                            <div className="mt-4">
                                <button className="border border-solid px-4 my-btn-pr dark:border-white" type="submit">Subscribe</button>
                            </div>
                        </div>
                        <div className="pin-wrap-item">
                            <img className="w-full" src="./img/home/subscribe.png" alt="smile" loading="lazy"/>
                        </div>
                        <div className="pin-wrap-item">
                            <img className="w-full" src="./img/about/abt-me.jpg" alt="smile" loading="lazy"/>
                        </div>
                        <div className="pin-wrap-item">
                            <img className="w-full" src="./img/about/mission.jpg" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="">
                <div className="relative flex py-5 items-center gap-1">
                    <div className="flex-grow bg-black dark:bg-white" style={{height: '1px'}}></div>
                    <span className="text-xs md:text-xs">Follow us on Instagram</span>
                    <div className="flex-grow bg-black dark:bg-white" style={{height: '1px'}}></div>
                </div>
                <Scroller>
                    <img className="w-full" src="./img/home/ig1.jpg" alt="smile" />
                    <img className="w-full" src="./img/home/ig2.jpg" alt="smile" />
                    <img className="w-full" src="./img/home/ig3.jpg" alt="smile" />
                    <img className="w-full" src="./img/home/ig4.jpg" alt="smile" />
                    <img className="w-full" src="./img/home/ig5.jpg" alt="smile" />
                    <img className="w-full" src="./img/home/ig6.jpg" alt="smile" />
                    <img className="w-full" src="./img/home/ig7.jpg" alt="smile" />
                    <img className="w-full" src="./img/home/ig8.jpg" alt="smile" />
                </Scroller>
            </div>
        </div>
    )
}

Home.getInitialProps = async ({ req, query }) => {
    if (typeof window != 'undefined') {
        return {
            newestProps: [],
            popularProps: [],
            isCsr: true,
        }
    }
    try {
        const res = await Promise.all([
            fetch(`${BASE_URL}/api/blogs/newest?limit=10`, { cache: 'force-cache' }),
            fetch(`${BASE_URL}/api/blogs/popular?limit=10`, { cache: 'force-cache' })
        ])
        let resData = await Promise.all(res.map(r => r.json()));
        const newest = resData[0].data;
        const popular = resData[1].data;
        return {
            newestProps: newest,
            popularProps: popular,
            isCsr: false,
        }
    } catch (error) {
        return {
            newestProps: [],
            popularProps: [],
            isCsr: true,
        }
    }
}

export default Home;