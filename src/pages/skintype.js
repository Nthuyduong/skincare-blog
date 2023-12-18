import React from "react";

const Skintype = () => {
    return (
        <div className="skintype-page">
            <div className="container-fluid">
                <div className="pt-5 head-content pb-5">
                    <div className="heading text-center">Skin type & History</div>
                    <div className="grid grid-cols-5">
                        <div className="col-span-1"></div>
                        <div className="col-span-3 heading_6 text-center">
                            Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                            consequat quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
                <div className="mt-5 skin-bar pb-3">
                    <div className="flex">
                        <div className="mr-auto">Scroll to explore</div>
                        <div className="">
                            <img className="h-4" src="./img/icon/chevron-down-black.svg" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="mt-5 all-faq">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-4">
                            <div className="pr-5">
                                <div className="heading_3 mb-3">What we do</div>
                                <div>Are you interested in collaborating? Do you want to be a part of us? Join with us now!</div>
                                <div className="mt-4">
                                    <button className="w-full my-out-line-btn" type="submit">Join with us</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="collapse">
                                <div className=""></div>
                                <div className="content"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-products mt60">
                    <div className="content main">
                        <div className="mb-2 heading_3">All products I’ve used</div>
                        <div className="flex">
                            <div className="mr-auto">Are you interested in collaborating? Do you want to be a part of us? Join with us now!</div>
                            <div>
                                <a className="text-link" href="#">View all</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 mt-5">
                        <div className="col-span-3">
                            <div>
                                <div>
                                    <img className="w-full" src="./img/skintype/1.png" alt="smile" loading="lazy"/>
                                </div>
                                <div className="mt-3">
                                    <div className="small_text mb-1">Testings & Reviews</div>
                                    <div className="medium_text">BHA Paula's Choice</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <div>
                                    <img className="w-full" src="./img/skintype/2.png" alt="smile" loading="lazy"/>
                                </div>
                                <div className="mt-3">
                                    <div className="small_text mb-1">Testings & Reviews</div>
                                    <div className="medium_text">BHA Paula's Choice</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <div>
                                    <img className="w-full" src="./img/skintype/3.png" alt="smile" loading="lazy"/>
                                </div>
                                <div className="mt-3">
                                    <div className="small_text mb-1">Testings & Reviews</div>
                                    <div className="medium_text">BHA Paula's Choice</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <div>
                                    <img className="w-full" src="./img/skintype/4.png" alt="smile" loading="lazy"/>
                                </div>
                                <div className="mt-3">
                                    <div className="small_text mb-1">Testings & Reviews</div>
                                    <div className="medium_text">BHA Paula's Choice</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="must-read mt60">*/}
                {/*    <div className="flex mb-5 items-center">*/}
                {/*        <div className="mr-auto">*/}
                {/*            <div className="heading_3">Must-read topic to shine your skin</div>*/}
                {/*        </div>*/}
                {/*        <div className="">*/}
                {/*            <a className="text-link" href="#">View all</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="grid grid-cols-4 gap-4">*/}
                {/*        <div className="col-span-4 md:col-span-2 h-popular-des-ct">*/}
                {/*            <div className="des-ct-img overflow-hidden">*/}
                {/*                <img*/}
                {/*                    className="w-full"*/}
                {/*                    src="./img/home/category1.jpg"*/}
                {/*                    alt="smile"*/}
                {/*                    loading="lazy"*/}
                {/*                    height={100}*/}
                {/*                    width={100}/>*/}
                {/*            </div>*/}
                {/*            <div className="category-des-content">*/}
                {/*                <div className="heading_4 top-destination-title py-2">How to clean</div>*/}
                {/*                <div className="flex py-2 sub-title">*/}
                {/*                    <div className="flex">*/}
                {/*                        <div className="flex pr-1">*/}
                {/*                            <div>10 Blogs Article</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="ml-auto">*/}
                {/*                        <a className="text-link" href="#">View all</a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-span-4 md:col-span-2 h-popular-des-ct">*/}
                {/*            <div className="des-ct-img overflow-hidden">*/}
                {/*                <img*/}
                {/*                    className="w-full"*/}
                {/*                    src="./img/home/category.jpg"*/}
                {/*                    alt="smile"*/}
                {/*                    loading="lazy"*/}
                {/*                    height={100}*/}
                {/*                    width={100}*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className="category-des-content">*/}
                {/*                <div className="heading_4 top-destination-title py-2">Shopping guide</div>*/}
                {/*                <div className="flex py-2 sub-title">*/}
                {/*                    <div className="flex">*/}
                {/*                        <div className="flex pr-1">*/}
                {/*                            <div>10 Blogs Article</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="ml-auto">*/}
                {/*                        <a className="text-link" href="#">View all</a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Skintype;