import React from "react";
import { ROUTER } from "../utils/constants";
import Link from 'next/link'

const About = () => {
    return (
        <div>
            <div className="pb-8 pt-6 relative">
                <div className="m-w flex justify-center mx-auto gap-6">
                    <div className="hidden sm:block pt-8">
                        <img className="w-full" src="./img/about1.png" alt="smile" loading="lazy"/>
                    </div>
                    <div className="">
                        <img className="w-full" src="./img/about2.png" alt="smile" loading="lazy"/>
                    </div>
                    <div className="pt-8">
                        <img className="w-full" src="./img/about3.png" alt="smile" loading="lazy"/>
                    </div>
                </div>
                <div className="absolute t-0 pt-8">
                    <div className="text-center animate slideInUp animate--delay-medium">
                        <img className="dark:hidden" src="./img/Purity.png" alt="smile" loading="lazy" />
                        <img className="dark:block hidden" src="./img/Purity2.png" alt="smile" loading="lazy" />
                    </div>
                </div>
            </div>
            {/* <div className="about-banner">
                <img className="w-full" src="./img/about/banner.png" alt="smile" loading="lazy"/>
            </div> */}
            <div className="about-blog-page m-w mx-auto my-0">
                <div className="about-intro">
                    {/*<div className="intro-decor absolute">*/}
                    {/*    <img className="w-full" src="./img/about/decor.svg" alt="smile" loading="lazy"/>*/}
                    {/*</div>*/}
                    <div className="intro-inner grid grid-cols-6 gap-4 ">
                        <div className=""></div>
                        <div className="animate slideInUp col-span-4 intro-content heading_5 text-center z-30">
                            “Beauty's essence lies in purity – a pledge to clear, healthy skin. For women who understand that
                            the radiance of their skin reflects the purity of their beauty, the journey starts with maintaining
                            a clean canvas. True beauty springs from skin health, illuminating both external radiance and inner beauty.
                            Cleanse, nourish, and care for your skin, observing the transformation as beauty becomes pure – both outwardly
                            and within”
                        </div>
                    </div>
                </div>
                <div className="relative mt-8 px-4">
                    <div className="flex gap-4 max-w-[468px] mx-auto relative z-10">
                        <div><img className="w-full pt-4" src="./img/about4.jpg" alt="smile" loading="lazy"/></div>
                        <div><img className="w-full" src="./img/about5.jpg" alt="smile" loading="lazy"/></div>
                        <div><img className="w-full pt-4" src="./img/about6.jpg" alt="smile" loading="lazy"/></div>
                    </div>
                    <div className="absolute top-0 l-0 w-full h-full flex justify-center items-center">
                        <div className="max-w-[840px] h-fit">
                            <img className="w-full dark:hidden" src="./img/Skincare Blog.png" alt="smile" loading="lazy"/>
                            <img className="w-full hidden dark:block" src="./img/Skincare Blog2.png" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="my-7 border-solid border-y border-ccc py-8 about-me p-60 dark:border-t dark:border-ccc">
                    <div className="md:grid md:grid-cols-12 gap-4">
                        <div className="md:col-span-4 md:mb-0 mb-4 animate slideInUp animate--delay-fast">
                            <img className="w-full" src="./img/about/abt-me1.png" alt="smile" loading="lazy"/>
                        </div>
                        <div className="md:col-span-6 about-right flex">
                            <div className="about-content mt-auto dark:!text-white">
                                <div className="heading_3 mb-3 animate slideInUp animate--delay-medium">About Us</div>
                                <div className="animate slideInUp animate--delay-slow">
                                    Welcome to our skincare blog, where we're here to help, connect, and share useful tips
                                    and information for everyone seeking beautiful and resilient skin. We genuinely care
                                    about your skincare journey and are committed to assisting you in achieving your goals.
                                    Together, let's embrace beauty and confidence, always with love and authenticity.
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-2 animate slideInUp animate--delay-fast">
                            <img className="w-full" src="./img/about/abt-me2.jpg" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
                {/*What we do new*/}
                <div className="wedo-new dark:border-solid dark:boder-b dark:border-ccc">
                    <div className="md:grid md:grid-cols-12 gap-5">
                        <div className="md:col-span-4">
                            <div className="md:pr-5 py-4 pr-4 dark:border-333 border mb-4 border-solid border-999 md:border-none">
                                <div className="heading_3 mb-3 animate slideInUp">What we do</div>
                                <div className="animate slideInUp animate--delay-fast">Are you interested in collaborating? Do you want to be a part of us? Join with us now!</div>
                                <div className="mt-4 animate slideInUp animate--delay-medium">
                                    <Link href={ROUTER.CONTACT} className="dark:text-white nav-link flex"><div className="w-full my-out-line-btn dark:border-white text-center">Join with us</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8 wedo-first md:border-solid md:border-l md:border-ccc">
                            <div className="md:grid md:grid-cols-8">
                                <div className="col-span-8 md:col-span-4">
                                    <div className="we-do-card pl-4 mb-4 mx-3">
                                        <div className="animate slideInUp animate--delay-slow">
                                            <div>
                                                <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div className="">
                                                <div className="heading_5 my-2">
                                                    Making My Passion
                                                </div>
                                                <div>
                                                    Dive into the story of starting this skincare blog, fueled by genuine
                                                    passion. Share the personal connection to the beauty world and the
                                                    inspiration creating a space for fellow enthusiasts.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-8 md:col-span-4">
                                    <div className="we-do-card card-right px-4 ml-3 md:border-solid md:border-x md:border-ccc">
                                        <div className="animate slideInUp animate--delay-slow">
                                            <div>
                                                <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div className="">
                                                <div className="heading_5 my-2">
                                                    Share useful info and tips
                                                </div>
                                                <div>
                                                    At our skincare blog, we're all about sharing helpful info and tips.
                                                    Discover the best ways to choose and use products for a glowing and healthy
                                                    skin journey. Your go-to source for easy-to-follow advice.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:block hidden decor-line mx-3 mb-4 dark:border-solid dark:bg-ccc"></div>
                            <div className="md:grid md:grid-cols-8">
                                <div className="col-span-8 md:col-span-4">
                                    <div className="we-do-card pl-4 mx-3">
                                        <div className="animate slideInUp animate--delay-slow">
                                            <div>
                                                <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div className="">
                                                <div className="heading_5 my-2">
                                                    Better together
                                                </div>
                                                <div>
                                                    Explore shared growth on my skincare blog. The post uncovers how exchanging
                                                    experiences benefits not just you, but also contributes to my ongoing
                                                    evolution within the skincare community
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-8 md:col-span-4">
                                    <div className="we-do-card h-full card-right px-4 ml-3 md:border-solid md:border-x md:border-ccc">
                                        <div className="animate slideInUp animate--delay-slow">
                                            <div>
                                                <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div className="">
                                                <div className="heading_5 my-2">
                                                    Connecting Skincare-e
                                                </div>
                                                <div>
                                                    Join fellow skincare enthusiasts as we share tips and info for healthy,
                                                    radiant skin. Let's journey together towards beauty and confidence,
                                                    enhancing your glow inside and out
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="about-blog py-7 border-solid border-b border-ccc">*/}
                {/*    <div className="grid grid-cols-12 about-blog-inner flex gap-4">*/}
                {/*        <div className="col-span-12 md:col-span-6 about-content m-auto md:p-5">*/}
                {/*            <div className="heading_3 mb-2">About blog</div>*/}
                {/*            <div className="">*/}
                {/*                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat*/}
                {/*                quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut*/}
                {/*                sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus. Diam nec ut*/}
                {/*                sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus.*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-span-12 md:col-span-6 img-abt-blog">*/}
                {/*            <img className="w-100" src="./img/about/abt-blog.png" alt="smile" loading="lazy"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="blog-mission pt-7 pb-9">
                    <div className="grid grid-cols-12 gap-4 mission-inner flex">

                        <div className="col-span-12 md:col-span-6 mission-content m-auto md:py-5 md:mr-5 h-full flex items-center">
                            <div className="text-black dark:!text-white">
                                <div className="heading_3 mb-2 animate slideInUp animate--delay-medium">Our mission</div>
                                <div className="animate slideInUp animate--delay-slow">
                                    At Radiance Aura, our mission is straightforward: to support you on your skincare journey with
                                    practical advice, genuine connection, and a treasure trove of helpful information. We're dedicated
                                    to helping you uncover the secrets to radiant, resilient skin that's uniquely yours. With a focus on
                                    authenticity and care, we aim to inspire confidence and celebrate your natural beauty. Together,
                                    let's embark on this transformative journey, embracing your radiance with warmth and sincerity every step of the way.
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-span-12 md:col-span-3 img-mission">
                            <img className="w-100" src="./img/about/mission.jpg" alt="smile" loading="lazy"/>
                        </div>
                        <div className="col-span-12 md:col-span-3 img-mission">
                            <img className="w-100" src="./img/about/mission2.jpg" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
                {/*<div className="contact-me p-5 md:p-8">*/}
                {/*    <div className="contact-me-inner p-5 md:p-7 bg-white dark:text-black">*/}
                {/*        <div className="heading_3 mb-3 md:mb-4">Work With Me</div>*/}
                {/*        <div className="mb-3">Are you interested in collaborating? Contact me for more information or hire me for a UI freelance,*/}
                {/*            please visit my portfolio <a>https://nthuyduong.github.io.</a></div>*/}
                {/*        <div className="medium_text">Get in touch: Nthduong898@gmail.com</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="subscribe-section">
                    <div className="bg-primary p-5">
                        <div className="flex">
                            <div className="hidden md:block">
                                <img className="w-full" src="./img/home/subscribe.png" alt="smile" loading="lazy"/>
                            </div>
                            <div className="ml-5 text-black flex items-center md:pr-8">
                                <div>
                                    <div className="mb-3 heading_2 animate slideInUp">Subscribe for newsletters</div>
                                    <div className="animate slideInUp animate--delay-medium">
                                        Receive the latest updates straight to your inbox. Get stories, exclusive offers, and promotions when you sign up.
                                    </div>
                                    <div className="mt-4 animate slideInUp animate--delay-slow">
                                        <button className="px-4 my-btn-pr dark:border-white" type="submit">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;