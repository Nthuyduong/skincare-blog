import React, { useState } from "react";
import Link from 'next/link'
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";

const Home = () => {

    return (
        <div>
            {/*banner*/}
            <div className="home-banner">
                <img className="w-full" src="./img/home/banner.png" alt="smile" loading="lazy"/>
                {/*<div className="col-span-6 banner-left">*/}
                {/*    <img className="w-full" src="./img/home/banner.png" alt="smile" loading="lazy"/>*/}
                {/*</div>*/}
                {/*<div className="col-span-6 banner-right">*/}
                {/*    <div className="grid grid-cols-6 h-full flex items-center">*/}
                {/*        <div className="col-span-1">*/}

                {/*        </div>*/}
                {/*        <div className="col-span-4 flex">*/}
                {/*            <div className="relative">*/}
                {/*                <img className="" src="./img/home/banner-top.png" alt="smile" loading="lazy"/>*/}
                {/*            </div>*/}
                {/*            /!*<div className="absolute spin-logo">*!/*/}
                {/*            /!*    <img className="" src="./img/home/logo-test.svg" alt="smile" loading="lazy"/>*!/*/}
                {/*            /!*</div>*!/*/}
                {/*        </div>*/}
                {/*        <div className="col-span-1">*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="container-fluid">

                {/*Lastest on this blog*/}
                <div className="recently-update">
                    <div className="heading_3 mb-4">Most useful articles</div>
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
                                        <div className="article-info py-1 mb-1">
                                            <div className="flex mb-1">
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                <div className="category-destination">
                    <div className="destination-title mb-5">
                        <div className="flex justify-center">
                            {/*breadcrumb*/}
                            <div className="flex self-center">
                                <div className="heading_3">Popular Destinations</div>
                            </div>
                            {/*Change layout*/}
                            <div className="self-center flex ml-auto">
                                <a href="">View all</a>
                                <div className="ml-1">
                                    <img 
                                        className="icon-ssm" 
                                        src="./img/icon/arrow-right-black.svg"
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
                                    src="./img/home/category1.jpg"
                                    alt="smile"
                                    loading="lazy"
                                    height={100}
                                    width={100}/>
                            </div>
                            <div className="category-des-content">
                                <div className="heading_4 top-destination-title py-3">Drink & Coffee</div>
                                <div className="flex py-2 sub-title">
                                    <div className="flex">
                                        <div className="flex article-count pr-1">
                                            <div>10 Blogs Article</div>
                                        </div>
                                        <div className="flex location-count pl-1">
                                            <div>20 Location</div>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <a className="text-link" href="#">View all</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-2 h-popular-des-ct">
                            <div className="des-ct-img overflow-hidden">
                                <img
                                    className="w-full"
                                    src="./img/home/category.jpg"
                                    alt="smile"
                                    loading="lazy"
                                    height={100}
                                    width={100}
                                />
                            </div>
                            <div className="category-des-content">
                                <div className="heading_4 top-destination-title py-3">Drink & Coffee</div>
                                <div className="flex py-2 sub-title">
                                    <div className="flex">
                                        <div className="flex article-count pr-1">
                                            <div>10 Blogs Article</div>
                                        </div>
                                        <div className="flex location-count pl-1">
                                            <div>20 Location</div>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <a className="text-link" href="#">View all</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-span-4 md:col-span-2 relative h-popular-des-ct rounded-md">*/}
                        {/*    <div className="des-ct-img">*/}
                        {/*        <img className="w-full" src="./img/home/category.jpg" alt="smile" loading="lazy"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="absolute text-white category-des-content">*/}
                        {/*        <div className="heading_4 text-center">Drink & Coffee</div>*/}
                        {/*        <div className="flex justify-center mt-2">*/}
                        {/*            <div className="flex article-count pr-3">*/}
                        {/*                <div className="pr-1">*/}
                        {/*                    icon*/}
                        {/*                </div>*/}
                        {/*                <div>10 Blogs Article</div>*/}
                        {/*            </div>*/}
                        {/*            <div className="flex location-count pl-3">*/}
                        {/*                <div className="pr-1">*/}
                        {/*                    <img className="icon-sm" src="./img/icon/map-pin.svg" alt="smile" loading="lazy"/>*/}
                        {/*                </div>*/}
                        {/*                <div>20 Location</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-span-4 md:col-span-2 relative h-popular-des-ct rounded-md">*/}
                        {/*    <div className="des-ct-img">*/}
                        {/*        <img className="w-full" src="./img/home/category.jpg" alt="smile" loading="lazy"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="absolute text-white category-des-content">*/}
                        {/*        <div className="heading_4 text-center">Drink & Coffee</div>*/}
                        {/*        <div className="flex justify-center mt-2">*/}
                        {/*            <div className="flex article-count pr-3">*/}
                        {/*                <div className="pr-1"></div>*/}
                        {/*                <div>10 Blogs Article</div>*/}
                        {/*            </div>*/}
                        {/*            <div className="flex location-count pl-3">*/}
                        {/*                <div className="pr-1">*/}
                        {/*                    <img className="icon-sm" src="./img/icon/map-pin.svg" alt="smile" loading="lazy"/>*/}
                        {/*                </div>*/}
                        {/*                <div>20 Location</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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
                                        <div className="article-info py-1 mb-1">
                                            <div className="flex mb-1">
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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
                                                <div className="mr-auto small-text">Drink & Coffee</div>
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

                    {/*<div className="grid grid-cols-12 gap-4 recently-update-blog">*/}
                    {/*    <div className="col-span-12 md:col-span-6 lg:col-span-3">*/}
                    {/*        <div>*/}
                    {/*            <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className="article-info py-1 mb-1">*/}
                    {/*                <div className="flex mb-1">*/}
                    {/*                    <div className="mr-auto small_text">Drink & Coffee</div>*/}
                    {/*                    <div className="small_text">November 8, 2023</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="heading_6">Top 5 beautiful Coffee Shop in HaNoi</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex">*/}
                    {/*                <div className="mr-auto"><a href="#">Read more</a></div>*/}
                    {/*                <div>Share</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-12 md:col-span-6 lg:col-span-3">*/}
                    {/*        <div>*/}
                    {/*            <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className="article-info py-1 mb-1">*/}
                    {/*                <div className="flex mb-1">*/}
                    {/*                    <div className="mr-auto small_text">Drink & Coffee</div>*/}
                    {/*                    <div className="small_text">November 8, 2023</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex">*/}
                    {/*                <div className="mr-auto"><a href="#">Read more</a></div>*/}
                    {/*                <div>Share</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-12 md:col-span-6 lg:col-span-3">*/}
                    {/*        <div>*/}
                    {/*            <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className="article-info py-1 mb-1">*/}
                    {/*                <div className="flex mb-1">*/}
                    {/*                    <div className="mr-auto small_text">Drink & Coffee</div>*/}
                    {/*                    <div className="small_text">November 8, 2023</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex">*/}
                    {/*                <div className="mr-auto"><a href="#">Read more</a></div>*/}
                    {/*                <div>Share</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-12 md:col-span-6 lg:col-span-3">*/}
                    {/*        <div>*/}
                    {/*            <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className="article-info py-1 mb-1">*/}
                    {/*                <div className="flex mb-1">*/}
                    {/*                    <div className="mr-auto small_text">Drink & Coffee</div>*/}
                    {/*                    <div className="small_text">November 8, 2023</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex">*/}
                    {/*                <div className="mr-auto"><a href="#">Read more</a></div>*/}
                    {/*                <div>Share</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="home-about">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-8 py-6 about-intro">
                            <div className="relative">
                                <div className="heading_1">
                                    “Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.”
                                </div>
                                <div className="absolute heading_6 mt-auto">Hello & Welcome!</div>
                            </div>
                        </div>
                        <div className="col-span-4 about-content py-6">
                            <div>Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut
                                sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus. Diam nec ut sed est sit
                                in tortor. Blandit consequat quisque vitae ornare.</div>
                            <div className="mt-6">
                                <Link href={ROUTER.ABOUT}>
                                    <button className="my-out-line-btn" type="submit">MORE ABOUT ME</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-contact-me">
                    <div className="contact-inner">
                        <div className="">
                            <div className="heading_3 mb-3">Connect with me</div>
                            <div className=""><a href="#">Nthduong898@gmail.com</a></div>
                            <div><a href="#">https://nthuyduong.github.io</a></div>
                        </div>
                    </div>
                </div>
                {/*<div className="contact-me ">*/}
                {/*    <div className="contact-me-inner">*/}
                {/*        <div className="heading_3 md:mb-4">Work With Me</div>*/}
                {/*        <div className="mb-3">Are you interested in collaborating? Contact me for more information or hire me for a UI freelance,*/}
                {/*            please visit my portfolio <a>https://nthuyduong.github.io.</a></div>*/}
                {/*        <div className="medium_text">Get in touch: Nthduong898@gmail.com</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="subscribe-blog">
                    <div className="grid grid-cols-6">
                        <div className="col-span-2"></div>
                        <div className="col-span-2">
                            <div className="">
                                <div className="heading_3 text-center mb-5">Sign Up For Newsletters</div>
                                <div>
                                    <div className="email-signup my-input mb-3">
                                        <input className="w-full" placeholder="Email address"/>
                                    </div>
                                    <button className="w-full my-btn-pr" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;