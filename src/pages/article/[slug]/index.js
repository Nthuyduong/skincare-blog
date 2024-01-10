import React, { useEffect, useRef, useState } from "react";
import { throttle } from '@utils/common';
import { getBlogBySlugApi } from "@services/blog";

const ArticleDetail = ({ slug }) => {

    const [blog, setBlog] = useState({});

    const refContent = useRef(null);
    const refTable = useRef(null);
    const refProcess = useRef(null);

    useEffect(() => {
        getBlogBySlugApi(slug).then((res) => {
            setBlog(res.data);
        });
        const windowHeigh = document.body.scrollHeight;
        const handleScroll = throttle(() => {
            const scrollY = window.scrollY;
            const process = scrollY / windowHeigh * 100;
            console.log(scrollY, windowHeigh)
            if (process <= 0) {
                refProcess.current.style.display = 'none';
            } else {
                refProcess.current.style.display = 'block';
                refProcess.current.style.width = `${process}%`;
            }
        }, 1);
        window.addEventListener('scroll', handleScroll)
    }, []);

    useEffect(() => {
        if (refContent.current) {
            const headings = refContent.current.querySelectorAll("h2, h3");
            const list = refTable.current;
            
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
    }, [blog])

    return (
        <div className="article-single-post">
            <div className="process-bar w-full">
                <div ref={refProcess} className='process-content'></div>
            </div>
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
                            <img className="w-full" src="/img/article/happy.jpg" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="grid grid-cols-12">
                    <div className="col-span-2"></div>
                    <div className="col-span-8 article-out">
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
                        {/*menu*/}
                        <div className="catalog w-5/6">
                            <div className="list dark:!border-999">
                                <div className="list-title heading_6 mb-3">In this post</div>
                                <div className="all-list">
                                    {/* table of content */}
                                    <ul className="list-here" ref={refTable} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2"></div>
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
                <div className="my-article">
                    <div
                        className="main-article"
                        ref={refContent}
                        dangerouslySetInnerHTML={{
                            __html: blog?.content
                        }}
                    />
                    <div className="main-article">
                        <div className="grid grid-cols-12">
                            <div className="col-span-2"></div>
                            <div className="col-span-8">
                                <div className="article-content">
                                    <div className="grid grid-cols-6 gap-4">
                                        <div className="col-span-3">
                                            <img className="w-full" src="/img/article/article1.png" alt="smile" loading="lazy"/>
                                        </div>
                                        <div className="col-span-3 flex items-center">
                                            <div className="">
                                                <div className="mb-4 heading_2">Stress Negatively Impacts Your Skin</div>
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
                                    <div className="p-60">
                                        <div className="heading_2 mb-4">How Happiness Improves Your Skin</div>
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
                                    <div className="">
                                        <img className="w-full" src="/img/article/article2.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div className="p-60">
                                        <div className="heading_2 mb-4">Tips for Making Your Happiness a Daily Priority</div>
                                        <div className="">
                                            <div className="mb-2 heading_5">1/ Smile often: </div>
                                            <div className="">
                                                Studies have shown that genuine smiles release feel-good hormones in the body,
                                                contributing to healthy and radiant skin. You don't have to wait for a random
                                                reason to smile; you can bring a smile to your face by thinking about something
                                                or someone that brings you joy. It could be your toddler, a fond memory, a beloved pet,
                                                or a sweet surprise from a loved one. The act of recalling something that made
                                                you smile triggers the release of those feel-good hormones, making you feel
                                                better—and look better too!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4 pb-60">
                                        <div className="col-span-3 flex items-center">
                                            <div className="">
                                                <div className="mb-2 heading_5">2/ Spend more time face-to-face with loved ones</div>
                                                <div className="">
                                                    Don't let your cell phone create a barrier between you and the people who
                                                    matter most. Set aside time for shared meals, walks, sports events, and
                                                    other activities with those who care about you, and whom you care about.
                                                    Building strong social connections not only benefits your heart, mind,
                                                    and immune system but also contributes to the health of your skin—simply
                                                    by bringing joy into your life. Prioritize moments spent with those who
                                                    love and appreciate you for being yourself. And, if meeting in person isn't
                                                    possible, a FaceTime call with a loved one, like my two-year-old grandson,
                                                    can do wonders to lift your spirits
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-3">
                                            <img className="w-full" src="/img/article/article3.jpg" alt="smile" loading="lazy"/>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="mb-2 heading_5">3/ Manage your stress</div>
                                        <div className="">
                                            However, Cultural Stress—the constant stress of modern living—is a relatively recent
                                            phenomenon, especially in evolutionary terms. Our bodies simply haven't had enough
                                            time to adapt to the all-encompassing, ever-growing stress brought on by contemporary
                                            lifestyles. Consequently, it falls upon us to manage it effectively. This involves
                                            actions like silencing our phones, ensuring adequate sleep and exercise, maintaining
                                            a healthy diet, and incorporating stress management practices into our routine.
                                            These practices can range from morning affirmations, journaling, meditation, yoga,
                                            to inspirational reading—anything that helps slow your breathing, reduce heart rate,
                                            and restore inner calm. Additionally, don't underestimate the rejuvenating power
                                            of physical self-care, such as massage, facials, or indulging in a soothing, candlelit bubble bath.
                                        </div>
                                    </div>
                                    <div className="w-full p-5 bg-primary">
                                        <div className="w-full text-center text-black">
                                            <div className="mb-2 heading_6">“Why have a bad day, when you can have a good day?”</div>
                                            <div className="heading_6">“Life can be good, bad, or indifferent. Focus on the good.”</div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="mb-4 heading_2">Happiness: The Secret Ingredient for Radiant Skin</div>
                                        <div className="">
                                            However, Cultural Stress—the constant stress of modern living—is a relatively recent
                                            phenomenon, especially in evolutionary terms. Our bodies simply haven't had enough
                                            time to adapt to the all-encompassing, ever-growing stress brought on by contemporary
                                            lifestyles. Consequently, it falls upon us to manage it effectively. This involves
                                            actions like silencing our phones, ensuring adequate sleep and exercise, maintaining
                                            a healthy diet, and incorporating stress management practices into our routine.
                                            These practices can range from morning affirmations, journaling, meditation, yoga,
                                            to inspirational reading—anything that helps slow your breathing, reduce heart rate,
                                            and restore inner calm. Additionally, don't underestimate the rejuvenating power
                                            of physical self-care, such as massage, facials, or indulging in a soothing, candlelit bubble bath.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2"></div>
                        </div>
                    </div>
                    <div className="flex helpful-rate mt-5 grid grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="col-span-8">
                            <div className="medium_text mr-4">
                                <a href="#">Was this helpful?</a>
                            </div>
                            <div className="flex">
                                <div className="thumb mr-2">
                                    <img className="icon-ssm" src="/img/icon/thumbs-up.svg" alt="smile" loading="lazy"/>
                                </div>
                                <div className="thumb">
                                    <img className="icon-ssm" src="/img/icon/thumbs-down.svg" alt="smile" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-2"></div>
                    <div className="col-span-8">
                        <div className="comment p-60">
                            <div className="flex">
                                <div className="heading_2 mb-4">Comments</div>
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
                                        <div className="my-input mb-3 dark:border-white">
                                            <input className="w-full p-1" placeholder="Your name"/>
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="my-input mb-3 dark:border-white">
                                            <input className="w-full p-1" placeholder="Email address *"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-input mb-3 user-cmt dark:border-white">
                                    <textarea rows="5" className="w-full p-1" placeholder="Message *"></textarea>
                                </div>
                                <div className="flex justify-center dark:border-white">
                                    <button className="w-3/12 my-btn-pr" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2"></div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const { slug } = query;
    // const res = await getBlogBySlugApi(slug);
    // const res = await fetch('https://app.radiance-aura.blog/api/blogs')
    // console.log(res)
    // const blog = await res.json();

    return {
        props: {
            slug: slug
        }
    }
}

export default ArticleDetail;