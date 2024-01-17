import React from "react";

const About = () => {
    return (
        <div>
            <div className="about-banner">
                <img className="w-full" src="./img/about/banner.png" alt="smile" loading="lazy"/>
            </div>
            <div className="about-blog-page container-fluid m-w mx-auto my-0">
                <div className="about-intro">
                    <div className="intro-decor absolute">
                        <img className="w-full" src="./img/about/decor.svg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="intro-inner grid grid-cols-6 gap-4 ">
                        <div className=""></div>
                        <div className="col-span-4 intro-content heading_5 text-center z-30">
                            “Beauty's essence lies in purity – a pledge to clear, healthy skin. For women who understand that
                            the radiance of their skin reflects the purity of their beauty, the journey starts with maintaining
                            a clean canvas. True beauty springs from skin health, illuminating both external radiance and inner beauty.
                            Cleanse, nourish, and care for your skin, observing the transformation as beauty becomes pure – both outwardly
                            and within”
                        </div>
                        <div className=""></div>
                    </div>
                </div>
                <div className="my-7 border-y border-ccc py-7 about-me p-60 dark:border-t dark:border-ccc">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-5">
                            <img className="w-full" src="./img/about/abt-me.jpg" alt="smile" loading="lazy"/>
                        </div>
                        <div className="col-span-7 about-right flex">
                            <div className="about-content m-auto dark:!text-black">
                                <div className="heading_3 mb-2">About Me</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque
                                    vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                    Blandit consequat quisque.
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                    quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut
                                    sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus. Diam nec ut sed est sit
                                    in tortor. Blandit consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*What we do new*/}
                <div className="wedo-new dark:boder-b dark:border-ccc">
                    <div className="md:grid md:grid-cols-12 gap-5">
                        <div className="md:col-span-4">
                            <div className="md:pr-5 p-4 dark:border-333 border mb-4 border-solid border-999 md:border-none">
                                <div className="heading_3 mb-3">What we do</div>
                                <div>Are you interested in collaborating? Do you want to be a part of us? Join with us now!</div>
                                <div className="mt-4">
                                    <button className="w-full my-out-line-btn dark:border-white" type="submit">Join with us</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8 wedo-first dark:border-l dark:border-ccc">
                            <div className="md:grid md:grid-cols-8">
                                <div className="col-span-8 md:col-span-4">
                                    <div className="we-do-card px-4 mb-4 mx-3">
                                        <div>
                                            <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div className="">
                                            <div className="heading_5 my-2">
                                                Making My Passion
                                            </div>
                                            <div>
                                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque
                                                vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-8 md:col-span-4">
                                    <div className="we-do-card md:border-x card-right px-4 ml-3 dark:border-x dark:border-ccc">
                                        <div>
                                            <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div className="">
                                            <div className="heading_5 my-2">
                                                Sharing Destinations
                                            </div>
                                            <div>
                                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque
                                                vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="decor-line mx-3 mb-4 dark:bg-ccc"></div>
                            <div className="md:grid md:grid-cols-8">
                                <div className="col-span-8 md:col-span-4">
                                    <div className="we-do-card px-4 mb-4 mx-3">
                                        <div>
                                            <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div className="">
                                            <div className="heading_5 my-2">
                                                Connect People
                                            </div>
                                            <div>
                                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque
                                                vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-8 md:col-span-4">
                                    <div className="we-do-card card-right px-4 ml-3 dark:border-x dark:border-ccc">
                                        <div>
                                            <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div className="">
                                            <div className="heading_5 my-2">
                                                Making My Passion
                                            </div>
                                            <div>
                                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque
                                                vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*What we do old*/}
                {/*<div className="what-we-do">*/}
                {/*    <div className="grid grid-cols-12 gap-4">*/}
                {/*        <div className="col-span-12 md:col-span-4 we-do">*/}
                {/*            <div>*/}
                {/*                <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>*/}
                {/*            </div>*/}
                {/*            <div className="heading_5 my-2">*/}
                {/*                Making My Passion*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque*/}
                {/*                vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in.*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-span-12 md:col-span-4 we-do">*/}
                {/*            <div>*/}
                {/*                <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>*/}
                {/*            </div>*/}
                {/*            <div className="heading_5 my-2">*/}
                {/*                Sharing All Destinations*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque*/}
                {/*                vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in.*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-span-12 md:col-span-4 we-do">*/}
                {/*            <div>*/}
                {/*                <img className="" src="./img/about/do.svg" alt="smile" loading="lazy"/>*/}
                {/*            </div>*/}
                {/*            <div className="heading_5 my-2">*/}
                {/*                Connect With You*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque*/}
                {/*                vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in.*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="about-blog py-7 dark:border-b dark:border-ccc">
                    <div className="grid grid-cols-12 about-blog-inner flex gap-4">
                        <div className="col-span-12 md:col-span-6 about-content m-auto md:p-5">
                            <div className="heading_3 mb-2">About blog</div>
                            <div className="">
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut
                                sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus. Diam nec ut
                                sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 img-abt-blog">
                            <img className="w-100" src="./img/about/abt-blog.png" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="blog-mission py-7">
                    <div className="grid grid-cols-12 mission-inner flex gap-5">
                        <div className="col-span-12 md:col-span-6 img-mission">
                            <img className="w-100" src="./img/about/mission.jpg" alt="smile" loading="lazy"/>
                        </div>
                        <div className="col-span-12 md:col-span-6 mission-content m-auto md:p-5">
                            <div className="heading_3 mb-2">My mission</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut
                                sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus. Diam nec ut
                                sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-me ">
                    <div className="contact-me-inner dark:!text-black">
                        <div className="heading_3 md:mb-4">Work With Me</div>
                        <div className="mb-3">Are you interested in collaborating? Contact me for more information or hire me for a UI freelance,
                            please visit my portfolio <a>https://nthuyduong.github.io.</a></div>
                        <div className="medium_text">Get in touch: Nthduong898@gmail.com</div>
                    </div>
                </div>
                {/*<div className="subscribe-blog">*/}
                {/*    <div className="grid grid-cols-6">*/}
                {/*        <div className="md:col-span-2"></div>*/}
                {/*        <div className="col-span-6 md:col-span-2">*/}
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
                {/*        <div className="md:col-span-2"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default About;