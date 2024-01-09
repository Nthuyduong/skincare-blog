import React from "react";
import Ingredient from "./index";

const IngredientDetail = () => {
    return (
        <div className="article-single-post">
            <div className="test-review-page">
                <div className="review-banner">
                    <div className="relative">
                        <div className="container-fluid banner-left dark:text-black">
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
                                    <div className="heading_3 mb-2">Happiness: The Secret to Beautiful Skin Every Day</div>
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
                            <img className="w-full" src="/img/testnreview/t1.png" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="grid grid-cols-12">
                    <div className="col-span-9 article-out">
                        <div className="article-summary mb-4">
                            <div className="font-medium mb-2">
                                We all know how stress can negatively impact our skin, leading to issues like breakouts,
                                dark circles, and dryness. Chronic stress takes a toll on our skin health. However, the
                                positive effects of happiness on our skin often go unnoticed. Happiness is a crucial factor
                                in achieving a naturally radiant complexion that lasts.
                            </div>
                            <div className="font-medium">
                                In this post, we'll delve into how stress affects the skin negatively, explore the ways in
                                which happiness can enhance your skin, and discuss practical tips for prioritizing joy in
                                your daily life. Our aim is to empower you with insights that contribute to long-lasting skin wellness
                            </div>
                        </div>
                        <div>
                            <div>

                            </div>
                        </div>
                        {/*menu*/}
                        <div className="catalog w-3/5">
                            <div className="list">
                                <div className="list-title heading_6 mb-3">In this post</div>
                                <div className="all-list">
                                    <ul className="list-here">
                                        <li><a>1. What is AHA?</a></li>
                                        <li><a>2. Who should use it?</a></li>
                                        <li><a>3. How to use</a></li>
                                        <li><a>4. Side effect</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="main-article">
                            {/*breadcrumb*/}
                            {/*<div className="mb-4 my-breadcrumb">*/}
                            {/*    <ul className="flex">*/}
                            {/*        <li><a href="#">Home</a></li>*/}
                            {/*        <li className="mx-2">/</li>*/}
                            {/*        <li><a href="#">Destinations</a></li>*/}
                            {/*        <li className="mx-2">/</li>*/}
                            {/*        <li><a href="#">Drink & Coffee</a></li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            {/*<div className="mb-4 heading_2 article-title">*/}
                            {/*    Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips*/}
                            {/*</div>*/}
                            {/*author and more information*/}
                            {/*<div className="my-2 mb-5 sub-main-article py-2">*/}
                            {/*    <div className="flex">*/}
                            {/*        <div className="flex">*/}
                            {/*            <div>By Nthduong</div>*/}
                            {/*            <div className="flex ml-3">*/}
                            {/*                <div className="mr-1">*/}
                            {/*                    <img className="icon-sm" src="./img/icon/clock.svg" alt="smile" loading="lazy"/>*/}
                            {/*                </div>*/}
                            {/*                <div>November 6, 2023</div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="ml-auto">About 10 minutes read</div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="article-content">
                                <div className="grid grid-cols-6 gap-4">
                                    <div className="col-span-3">
                                        <img className="w-full" src="/img/article/article1.png" alt="smile" loading="lazy"/>
                                    </div>
                                    <div className="col-span-3 flex items-center">
                                        <div className="">
                                            <div className="mb-3 heading_5">Stress Negatively Impacts Your Skin</div>
                                            <div className="mb-1">According to WebMD, the mind and the skin are closely related. This explains
                                                why chronic stress harms your skin. For instance, when you are more stressed
                                                and tense, your body in turn releases stress hormones that increase your skin’s
                                                oil production. This increase in oil production then increases your chances of experiencing breakouts.
                                            </div>
                                            <div>
                                                Acne isn’t the only sign of how negative emotions can be seen in the skin.
                                                Eczema, hives, and rosacea are just some skin problems that can result from
                                                negative emotions and stress.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="heading_5 mb-3">How Happiness Improves Your Skin</div>
                                    <div className="">On the other hand, happiness serves as the overarching secret ingredient that
                                        naturally bestows upon you radiant, healthy, and glowing skin. This is because
                                        happiness reduces stress levels, which, as discussed earlier, releases stress
                                        hormones that can lead to various skin problems.
                                    </div>
                                    <div className="my-1">The influence of positive emotions on enhancing your skin is
                                        undeniable. Often referred to as the 'happiness glow,' this theory posits that
                                        positive emotions can contribute to the repair and healing of your skin, resulting
                                        in an effortlessly healthy and radiant appearance.
                                    </div>
                                    <div className="">It's crucial to emphasize that while happiness plays a vital role
                                        in enhancing your skin, you still need to adhere to your daily skincare routine.
                                        This entails removing all your makeup before bedtime, cleansing your face with a
                                        quality cleanser, moisturizing, and, of course, applying SPF. At BB Aesthetic,
                                        we provide a range of gentle cleansers and sunscreens, ensuring you have all the
                                        essential skincare products to maintain your flawless skin.
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 my-5">
                                    <div className="col-span-1"></div>
                                    <div className="col-span-4">
                                        <img className="w-full" src="/img/article/article2.png" alt="smile" loading="lazy"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                </div>

                                <div>


                                </div>
                                <div className="flex helpful-rate mt-4">
                                    <div className="medium_text mr-4">
                                        <a href="#">Was this helpful?</a>
                                    </div>
                                    <div className="flex">
                                        <div className="thumb mr-2">
                                            <img className="icon-ssm" src="./img/icon/thumbs-up.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div className="thumb">
                                            <img className="icon-ssm" src="./img/icon/thumbs-down.svg" alt="smile" loading="lazy"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment p-60">
                            <div className="flex">
                                <div className="heading_3 mb-4">Comments</div>
                                <div className="ml-auto">
                                    <select className="cmt-select">
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
                                    <div className="col-span-6">
                                        <div className="my-input mb-3">
                                            <input className="w-full p-1" placeholder="Your name"/>
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="my-input mb-3">
                                            <input className="w-full p-1" placeholder="Email address *"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-input mb-3 user-cmt">
                                    <textarea rows="5" className="w-full p-1" placeholder="Message *"></textarea>
                                </div>
                                <div className="flex justify-center">
                                    <button className="w-3/12 my-btn-pr" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 article-sidebar">
                        <div className="sidebar">
                            <div className="article-recently">
                                <div className="heading_4 mb-3">Recently update</div>
                                <div>
                                    <ul>
                                        <li><a href="#">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</a></li>
                                        <li className="my-1"><a href="#">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</a></li>
                                        <li><a href="#">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</a></li>
                                        <li className="mt-1"><a href="#">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*<div>*/}
                            {/*    <div className="mt-4">*/}
                            {/*        <img className="w-100" src="./img/article/myimg.jpg" alt="smile" loading="lazy"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="text-center welcome-content">*/}
                            {/*        <div className="heading_4 mb-2">Welcome to blog!</div>*/}
                            {/*        <div>Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit*/}
                            {/*            consequat quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque*/}
                            {/*            sed. Diam nec ut sed est sit in tortor.</div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="my-4">
                                <div className="heading_4 mb-3">Sign up for email</div>
                                <div>
                                    <div className="email-signup my-input mb-3 ">
                                        <input className="w-full p-2" placeholder="Email address"/>
                                    </div>
                                    <button className="w-full my-btn-pr" type="submit">Subscribe</button>
                                </div>
                            </div>
                            <div className="pb-4">
                                <div className="heading_4 mb-2">Recommended</div>
                                <div className="re-article">
                                    <div className="mt-2">
                                        <img className="w-100" src="./img/article/recommend.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div className="my-1">
                                        <div className="flex mb-1">
                                            <div className="mr-auto">Music & Art</div>
                                            <div>November 6, 2023</div>
                                        </div>
                                        <div className="heading_6">Top 4 Ceramic Shop in Hanoi</div>
                                    </div>
                                </div>
                                <div className="re-article">
                                    <div className="mt-4">
                                        <img className="w-100" src="./img/article/recommend.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div className="my-1">
                                        <div className="flex mb-1">
                                            <div className="mr-auto">Music & Art</div>
                                            <div>November 6, 2023</div>
                                        </div>
                                        <div className="heading_6">Top 4 Ceramic Shop in Hanoi</div>
                                    </div>
                                </div>
                            </div>
                            <div className="share-on-social">
                                <div className="text-center heading_5 mb-2">Share it on</div>
                                <div className="flex justify-center">
                                    <div className="">f</div>
                                    <div className="mx-2">i</div>
                                    <div className="">b</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-span-1"></div>*/}
                </div>
            </div>
        </div>
    )
}
export default IngredientDetail;