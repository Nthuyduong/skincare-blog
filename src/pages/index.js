import React, { useState } from "react";
import Link from 'next/link'
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";

const Home = () => {

    return (
        <div>
            {/*banner*/}
            <div className="home-banner">
                <img className="w-full" src="./img/home/banner2.jpg" alt="smile" loading="lazy"/>
            </div>
            <div className="container-fluid my-0 mx-auto m-w">

                    {/*Lastest on this blog*/}
                    <div className="recently-update pt-6 md:pt-8">
                        <div className="heading_4 md:heading_3 mb-4">Most useful articles</div>
                        <div className="">
                            <Slider
                                configs={{
                                    sliderPerRow: 3,
                                    sliderPerRowMobile: 2.5,
                                    allowDrag: true,
                                    duration: 400,
                                    auto: false,
                                    autoDuration: 1000,
                                    gap: 40,
                                    gapMobile: 10,
                                }}
                            >
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info dark:border-b dark:border-999 py-2 mb-2">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article1.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info dark:border-b dark:border-999 py-2 mb-2">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">
                                                        <Link className="" href={ROUTER.SUBDES}>Drink & Coffee</Link>
                                                    </div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article2.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info dark:border-b dark:border-999 py-2 mb-2">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info dark:border-b dark:border-999 py-2 mb-2">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info py-1 mb-1">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy" />
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info py-1 mb-1">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="category-destination pt-6 md:pt-8">
                        <div className="destination-title border-y border-ccc dark:border-y dark:border-999 mb-5">
                            <div className="py-3 md:flex justify-center">
                                {/*breadcrumb*/}
                                <div className="self-center mb-2 md:mb-0">
                                    <div className="heading_3">Skincare Guides & Tutorials</div>
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
                    <div className="p-100">
                        <div className="heading_3 mb-4">Reader's Favorite</div>
                        <div className="">
                            <Slider
                                configs={{
                                    sliderPerRow: 4,
                                    sliderPerRowMobile: 2.5,
                                    allowDrag: true,
                                    duration: 400,
                                    auto: false,
                                    autoDuration: 1000,
                                    gap: 40,
                                    gapMobile: 10,
                                }}
                            >
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info py-2 mb-1 dark:border-b dark:border-999">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info dark:border-b dark:border-999 py-2 mb-1">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info dark:border-b dark:border-999 py-2 mb-1">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info dark:border-b dark:border-999 py-2 mb-1">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info py-1 mb-1">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <div>
                                            <Link href={ROUTER.ARTICLE}>
                                                <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="article-info py-1 mb-1">
                                                <div className="flex mb-1">
                                                    <div className="mr-auto small_text">Drink & Coffee</div>
                                                    <div className="small_text">November 8, 2023</div>
                                                </div>
                                                <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>
                                            </div>
                                            <div className="flex">
                                                <div className=""><a className="text-link" href="#">Read more</a></div>
                                                <div className="ml-auto">Share</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
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

                    <div className="contact-me p-5 md:p-8">
                        <div className="contact-me-inner p-5 md:p-7 bg-white dark:text-black">
                            <div className="heading_3 mb-3 md:mb-4">Work With Me</div>
                            <div className="mb-3">Are you interested in collaborating? Contact me for more information or hire me for a UI freelance,
                                please visit my portfolio <a>https://nthuyduong.github.io.</a></div>
                            <div className="medium_text">Get in touch: Nthduong898@gmail.com</div>
                        </div>
                    </div>
                    {/*<div className="home-contact-me">*/}
                    {/*    <div className="contact-inner">*/}
                    {/*        <div className="dark:text-black">*/}
                    {/*            <div className="heading_4 mb-3">Connect with me</div>*/}
                    {/*            <div className="mb-1"><a href="#">Nthduong898@gmail.com</a></div>*/}
                    {/*            <div><a href="#">https://nthuyduong.github.io</a></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="contact-me ">*/}
                    {/*    <div className="contact-me-inner">*/}
                    {/*        <div className="heading_3 md:mb-4">Work With Me</div>*/}
                    {/*        <div className="mb-3">Are you interested in collaborating? Contact me for more information or hire me for a UI freelance,*/}
                    {/*            please visit my portfolio <a>https://nthuyduong.github.io.</a></div>*/}
                    {/*        <div className="medium_text">Get in touch: Nthduong898@gmail.com</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="subscribe-blog">*/}
                    {/*    <div className="grid grid-cols-6">*/}
                    {/*        <div className="col-span-2"></div>*/}
                    {/*        <div className="col-span-2">*/}
                    {/*            <div className="">*/}
                    {/*                <div className="heading_3 text-center mb-5">Sign Up For Newsletters</div>*/}
                    {/*                <div>*/}
                    {/*                    <div className="email-signup my-input mb-3">*/}
                    {/*                        <input className="w-full" placeholder="Email address"/>*/}
                    {/*                    </div>*/}
                    {/*                    <button className="w-full my-btn-pr" type="submit">Subscribe</button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-span-2"></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
        </div>
    )
}

export default Home;