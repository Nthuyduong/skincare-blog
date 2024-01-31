import React, { useEffect, useRef, useState } from "react";
import { throttle } from '@utils/common';
import { getBlogBySlugApi } from "@services/blog";
import { BASE_URL } from "@utils/apiUtils";

const ArticleDetail = ({ blog }) => {
    const refContent = useRef(null);
    const refTable = useRef(null);
    const refProcess = useRef(null);

    useEffect(() => {
        if (refContent.current) {
            const headings = refContent.current.querySelectorAll("h2");
            const list = refTable.current;
            if(list) {
                headings.forEach((heading) => {
                    heading.id = heading.textContent.replace(/\s+/g, '-').toLowerCase();
    
                    const li = document.createElement("li");
                    li.classList.add("cursor-pointer");
                    li.textContent = heading.textContent;
                    list.appendChild(li);
                    li.addEventListener("click", () => {
                        heading.scrollIntoView({ behavior: "smooth" });
                    });
                });
            }
           
            const handleScroll = throttle(() => {
                if(refContent.current) {
                    let process = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
                    if (process < 0) {
                        process = 0;
                    } else if (process > 100) {
                        process = 100;
                    }
                    if (process <= 0) {
                        refProcess.current.style.display = 'none';
                    } else {
                        refProcess.current.style.display = 'block';
                        refProcess.current.style.width = `${process}%`;
                    }
                }
            }, 1);
            window.addEventListener('scroll', handleScroll)
        }
        
    }, [blog])

    return (
        <div className="article-single-post">
            <div className="process-bar w-full">
                <div ref={refProcess} className='process-content'></div>
            </div>
            <div className="test-review-page w-full">
                {/*website banner*/}
                <div className="md:block hidden review-banner w-full">
                    <div className="relative">
                        <div className="container-fluid banner-left dark:text-black m-w mx-auto">
                            <div className="grid grid-cols-12">
                                <div className="col-span-5">
                                    {/*breadcrumb*/}
                                    <div className="mb-3 my-breadcrumb">
                                        <ul className="flex">
                                            <li><a href="#">Home</a></li>
                                            <li className="mx-2">/</li>
                                            <li><a href="#">Skincare Nerd</a></li>
                                            <li className="mx-2">/</li>
                                            <li><a href="#">Nuturish</a></li>
                                        </ul>
                                    </div>
                                    <div className="heading_2 mb-2">{blog?.title}</div>
                                    <div className="medium_text mb-4">Uncover the secret to daily beautiful, radiant skin:
                                        happiness. Explore how joy transforms your beauty routine, embracing your natural glow with each passing day</div>
                                    <div className="small_text">Writen by: Nthduong</div>
                                    <div className="small_text my-1">Publish date: 16/01/2024</div>
                                    <div className="small_text">About 10 minutes to read</div>
                                    <div className="medium_text mt-4">Is this article helpful?</div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-right">
                            <img className="w-full object-cover" src={BASE_URL + '/storage/' + blog?.banner_img} alt="smile" loading="lazy" />
                        </div>
                    </div>
                </div>
                {/*Mobile banner*/}
                <div className="md:hidden block">
                    <div className="banner-top py-4 bg-primary text-black">
                        <div className="container-fluid">
                            {/*breadcrumb*/}
                            <div className="mb-3 my-breadcrumb">
                                <ul className="flex">
                                    <li><a href="#">Home</a></li>
                                    <li className="mx-2">/</li>
                                    <li><a href="#">Skincare Nerd</a></li>
                                    <li className="mx-2">/</li>
                                    <li><a href="#">Nuturish</a></li>
                                </ul>
                            </div>
                            <div className="heading_2 mb-2">Drinking Water and Improving Skin</div>
                            <div className="medium_text mb-4">Uncover the secret to daily beautiful, radiant skin:
                                happiness. Explore how joy transforms your beauty routine, embracing your natural glow with each passing day</div>
                            <div className="small_text">Writen by: Nthduong</div>
                            <div className="small_text my-1">Publish date: 16/01/2024</div>
                            <div className="small_text">About 10 minutes to read</div>
                            <div className="medium_text mt-4">Is this article helpful?</div>
                        </div>
                    </div>
                    <div className="banner-bottom">
                        <img className="w-full" src={BASE_URL + '/storage/desktop/' + blog?.banner_img} alt="smile" loading="lazy" />
                    </div>
                </div>
            </div>
            <div className="container-fluid m-w mx-auto my-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-1"></div>
                    <div className="col-span-12 article-out">
                        <div className="article-summary mb-4">
                            <div className="">{blog?.summary}</div>
                            {/*<div className="font-medium mb-2">*/}
                            {/*    We all know how stress can negatively impact our skin, leading to issues like breakouts,*/}
                            {/*    dark circles, and dryness. Chronic stress takes a toll on our skin health. However, the*/}
                            {/*    positive effects of happiness on our skin often go unnoticed. Happiness is a crucial factor*/}
                            {/*    in achieving a naturally radiant complexion that lasts.*/}
                            {/*</div>*/}
                            {/*<div className="font-medium">*/}
                            {/*    In this post, we'll delve into how stress affects the skin negatively, explore the ways in*/}
                            {/*    which happiness can enhance your skin, and discuss practical tips for prioritizing joy in*/}
                            {/*    your daily life. Our aim is to empower you with insights that contribute to long-lasting skin wellness*/}
                            {/*</div>*/}
                        </div>
                        {/*menu*/}
                        <div className="catalog w-full my-3">
                            <div className="list dark:!border-999">
                                <div className="list-title heading_4 mb-3">In this post</div>
                                <div className="all-list">
                                    {/* table of content */}
                                    <ul className="list-here" ref={refTable} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1"></div>
                    {/*<div className="col-span-3 article-sidebar">*/}
                    {/*    <div className="sidebar">*/}
                    {/*        <div className="article-recently">*/}
                    {/*            <div className="heading_4 mb-3">Recently update</div>*/}
                    {/*            <div>*/}
                    {/*                <ul>*/}
                    {/*                    <li><a href="#">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</a></li>*/}
                    {/*                    <li className="my-1"><a href="#">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</a></li>*/}
                    {/*                    <li><a href="#">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</a></li>*/}
                    {/*                    <li className="mt-1"><a href="#">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</a></li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        /!*<div>*!/*/}
                    {/*        /!*    <div className="mt-4">*!/*/}
                    {/*        /!*        <img className="w-100" src="./img/article/myimg.jpg" alt="smile" loading="lazy"/>*!/*/}
                    {/*        /!*    </div>*!/*/}
                    {/*        /!*    <div className="text-center welcome-content">*!/*/}
                    {/*        /!*        <div className="heading_4 mb-2">Welcome to blog!</div>*!/*/}
                    {/*        /!*        <div>Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit*!/*/}
                    {/*        /!*            consequat quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque*!/*/}
                    {/*        /!*            sed. Diam nec ut sed est sit in tortor.</div>*!/*/}
                    {/*        /!*    </div>*!/*/}
                    {/*        /!*</div>*!/*/}
                    {/*        <div className="my-4">*/}
                    {/*            <div className="heading_4 mb-3">Sign up for email</div>*/}
                    {/*            <div>*/}
                    {/*                <div className="email-signup my-input mb-3 ">*/}
                    {/*                    <input className="w-full p-2" placeholder="Email address"/>*/}
                    {/*                </div>*/}
                    {/*                <button className="w-full my-btn-pr" type="submit">Subscribe</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="pb-4">*/}
                    {/*            <div className="heading_4 mb-2">Recommended</div>*/}
                    {/*            <div className="re-article">*/}
                    {/*                <div className="mt-2">*/}
                    {/*                    <img className="w-100" src="./img/article/recommend.jpg" alt="smile" loading="lazy"/>*/}
                    {/*                </div>*/}
                    {/*                <div className="my-1">*/}
                    {/*                    <div className="flex mb-1">*/}
                    {/*                        <div className="mr-auto">Music & Art</div>*/}
                    {/*                        <div>November 6, 2023</div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="heading_6">Top 4 Ceramic Shop in Hanoi</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="re-article">*/}
                    {/*                <div className="mt-4">*/}
                    {/*                    <img className="w-100" src="./img/article/recommend.jpg" alt="smile" loading="lazy"/>*/}
                    {/*                </div>*/}
                    {/*                <div className="my-1">*/}
                    {/*                    <div className="flex mb-1">*/}
                    {/*                        <div className="mr-auto">Music & Art</div>*/}
                    {/*                        <div>November 6, 2023</div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="heading_6">Top 4 Ceramic Shop in Hanoi</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="share-on-social">*/}
                    {/*            <div className="text-center heading_5 mb-2">Share it on</div>*/}
                    {/*            <div className="flex justify-center">*/}
                    {/*                <div className="">f</div>*/}
                    {/*                <div className="mx-2">i</div>*/}
                    {/*                <div className="">b</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-span-1"></div>*/}
                </div>
            </div>
            <div className="my-article w-full">
                <div
                    className="main-article w-full"
                    ref={refContent}
                    dangerouslySetInnerHTML={{
                        __html: blog?.content
                    }}
                />
                <div className="container-fluid m-w mx-auto my-0 helpful-rate mt-5">
                    <div className="flex w-full pt-3 border-t border-ccc">
                        <div className="medium_text mr-3">
                            <a href="#">Was this helpful?</a>
                        </div>
                        <div className="flex items-center">
                            <div className="thumb mr-3">
                                <img className="icon-ssm" src="/img/icon/thumbs-up.svg" alt="smile" loading="lazy"/>
                            </div>
                            <div className="thumb">
                                <img className="icon-ssm" src="/img/icon/thumbs-down.svg" alt="smile" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    {/*Suggest more article*/}
                    <div className="suggest-article py-7">
                        <div className="heading_2">Related Articles</div>
                        <div></div>
                    </div>
                    {/*Comment section*/}
                    <div className="comment py-7">
                        <div className="flex">
                            <div className="heading_2 mb-4">Comments</div>
                            <div className="ml-auto">
                                <select className="cmt-select dark:border dark:border-white">
                                    <option value="">Newest comments</option>
                                    <option value="">Oldest comments</option>
                                </select>
                            </div>
                        </div>
                        <div className="comment-main">
                            <div className="flex">
                                <div className="flex">
                                    <div className="mr-2">
                                        <img className="w-full rounded-3xl" src="./img/article/avata.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div>
                                        <div className="medium_text">Nthuyduong</div>
                                        <div>3 days ago</div>
                                    </div>
                                </div>
                                <div className="flex ml-auto">
                                    <div className="mr-2">10</div>
                                    <div>heart</div>
                                </div>
                            </div>
                            <div className="mt-2">
                                Baking time will vary if you change the pan size. Every oven is different so I can’t say
                                for certain what you’ll need to adjust it to. Be  sure to check on the cakes while they are baking.
                            </div>
                            <div className="mt-3"><a className="text-link" href="#">Reply</a></div>
                        </div>
                        <div className="comment-border"></div>
                        <div className="comment-main">
                            <div className="flex">
                                <div className="flex">
                                    <div className="mr-2">
                                        <img className="w-full rounded-3xl" src="./img/article/avata.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div>
                                        <div className="medium_text">Nthuyduong</div>
                                        <div>3 days ago</div>
                                    </div>
                                </div>
                                <div className="flex ml-auto">
                                    <div className="mr-2">10</div>
                                    <div>heart</div>
                                </div>
                            </div>
                            <div className="mt-2">
                                Baking time will vary if you change the pan size. Every oven is different so I can’t say
                                for certain what you’ll need to adjust it to. Be  sure to check on the cakes while they are baking.
                            </div>
                            <div className="mt-3"><a className="text-link" href="#">Reply</a></div>
                        </div>
                        <div className="comment-border"></div>
                        <div className="comment-main">
                            <div className="flex">
                                <div className="flex">
                                    <div className="mr-2">
                                        <img className="w-full rounded-3xl" src="./img/article/avata.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div>
                                        <div className="medium_text">Nthuyduong</div>
                                        <div>3 days ago</div>
                                    </div>
                                </div>
                                <div className="flex ml-auto">
                                    <div className="mr-2">10</div>
                                    <div>heart</div>
                                </div>
                            </div>
                            <div className="mt-2">
                                Baking time will vary if you change the pan size. Every oven is different so I can’t say
                                for certain what you’ll need to adjust it to. Be  sure to check on the cakes while they are baking.
                            </div>
                            <div className="mt-3"><a className="text-link" href="#">Reply</a></div>
                        </div>
                        <div className="comment-border"></div>
                        <div className="comment-main">
                            <div className="flex">
                                <div className="flex">
                                    <div className="mr-2">
                                        <img className="w-full rounded-3xl" src="./img/article/avata.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div>
                                        <div className="medium_text">Nthuyduong</div>
                                        <div className="">3 days ago</div>
                                    </div>
                                </div>
                                <div className="flex ml-auto">
                                    <div className="mr-2">10</div>
                                    <div>heart</div>
                                </div>
                            </div>
                            <div className="mt-2">
                                Baking time will vary if you change the pan size. Every oven is different so I can’t say
                                for certain what you’ll need to adjust it to. Be  sure to check on the cakes while they are baking.
                            </div>
                            <div className="mt-3"><a className="text-link" href="#">Reply</a></div>
                        </div>
                        {/*paginate*/}
                        <div className="mt-5 paginate flex w-full justify-center">
                            <a>
                                Previous
                                <span></span>
                            </a>
                            <div className="mx-2 pagi-item p-3 rounded-full flex">1</div>
                            <div className="pagi-item p-3 rounded-full flex">2</div>
                            <div className="mx-2 pagi-item p-3 rounded-full flex">3</div>
                            <a>
                                Next
                                <span></span>
                            </a>
                        </div>
                    </div>
                    {/*Leave a comment*/}
                    <div className="leavecmt">
                        <div className="mb-5 text-center">
                            <div className="heading_2 mb-2">Leave a comment</div>
                            <div>Your email address will not be published. Required fields are marked *</div>
                        </div>
                        <div className="">
                            <div className="grid grid-cols-12 gap-3">
                                <div className="md:col-span-6 col-span-12">
                                    <div className="my-input md:mb-3 dark:border-white">
                                        <input className="w-full p-1" placeholder="Your name"/>
                                    </div>
                                </div>
                                <div className="md:col-span-6 col-span-12">
                                    <div className="my-input mb-3 dark:border-white">
                                        <input className="w-full p-1" placeholder="Email address *"/>
                                    </div>
                                </div>
                            </div>
                            <div className="my-input mb-3 user-cmt dark:border-white">
                                <textarea rows="5" className="w-full p-1" placeholder="Message *"></textarea>
                            </div>
                            <div className="flex justify-center dark:border dark:border-white">
                                <button className="w-3/12 my-btn-pr" type="submit">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const { slug } = query;
    const res = await getBlogBySlugApi(slug);

    return {
        props: {
            blog: res?.data
        }
    }
}

export default ArticleDetail;