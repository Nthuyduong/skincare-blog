import React, {useEffect, useState} from "react";
import Link from 'next/link'
import { ROUTER } from "../utils/constants";

const Sub_destination = () => {

    // const [show, setShow] = useState(false);
    // const controlTitlebar = () => {
    //     if(window.scrollY > 280) {
    //         setShow(true)
    //     }
    //     else{
    //         setShow(false)
    //     }
    // }
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', controlTitlebar)
    //     return () => {
    //         window.removeEventListener('scroll', controlTitlebar)
    //     }
    // }, [])
    return (
        <div className="sub-des-page">
            <div className="sub-des-inner">
                <div className="container-fluid m-w mx-auto my-0">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-2 left-menu dark:border-r dark:!border-ccc">
                            <div className="left-menu-inner">
                                <ul className="menu-fixed">
                                    <li className="pb-2"><a href="#">All articles</a></li>
                                    <li className="pb-2 my-2"><a href="#">Recently update</a></li>
                                    <li className="pb-2"><a href="#">Most useful</a></li>
                                    <li className="pb-2 my-2"><a href="#">Oldest articles</a></li>
                                    <li className="pb-2"><a href="#">Already read</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-10 right-all-posts">
                            <div className="relative title-page">
                                <img className="w-100" src="./img/subdes/sub-banner.png" alt="smile" loading="lazy"/>
                                <div className="absolute main-title">
                                    <div className="heading !text-black mb-2">Testings & Reviews</div>
                                    <div className="!text-black">Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque vitae ornare diam netus tellus. </div>
                                </div>
                            </div>
                            <div className="destination-title border-y border-ccc my-5 py-3">
                                <div className="flex justify-center">
                                    {/*breadcrumb*/}
                                    <div className="flex self-center">
                                        <ul className="flex">
                                            <li><a href="#">Home</a></li>
                                            <li className="mx-2">/</li>
                                            <li><a href="#">Guides & Tutorials</a></li>
                                            <li className="mx-2">/</li>
                                            <li><a href="#">How to clean</a></li>
                                        </ul>
                                    </div>
                                    <div className="self-center flex ml-auto">
                                        <div className="flex justify-center">
                                            {/*<div className="flex des-count pr-3">*/}
                                            {/*    <div className="pr-1">*/}
                                            {/*        <img className="icon-sm" src="./img/icon/grid.svg" alt="#" loading="lazy"></img>*/}
                                            {/*    </div>*/}
                                            {/*    <div>4 Categories</div>*/}
                                            {/*</div>*/}
                                            <div className="flex location-count pl-3">
                                                <div className="pr-1">
                                                    <img className="icon-sm" src="./img/icon/book-open.svg" alt="#" loading="lazy"></img>
                                                </div>
                                                <div>50 Articles</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="all-post">
                                <div className="grid grid-cols-3 gap-4 mb-3">
                                    <div className="col-span-1">
                                        <div>
                                            <div>
                                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">November 8, 2023</div>
                                                    </div>
                                                    <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div>
                                            <div>
                                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">November 8, 2023</div>
                                                    </div>
                                                    <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div>
                                            <div>
                                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">November 8, 2023</div>
                                                    </div>
                                                    <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-3">
                                    <div className="col-span-1">
                                        <div>
                                            <div>
                                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">November 8, 2023</div>
                                                    </div>
                                                    <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div>
                                            <div>
                                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">November 8, 2023</div>
                                                    </div>
                                                    <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div>
                                            <div>
                                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">November 8, 2023</div>
                                                    </div>
                                                    <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-3">
                                    <div className="col-span-1">
                                        <div>
                                            <div>
                                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">November 8, 2023</div>
                                                    </div>
                                                    <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div>
                                            <div>
                                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">November 8, 2023</div>
                                                    </div>
                                                    <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div>
                                            <div>
                                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                            </div>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">November 8, 2023</div>
                                                    </div>
                                                    <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                                </div>
                                            </div>
                                        </div>
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

export default Sub_destination;