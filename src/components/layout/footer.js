import { ROUTER } from "../../utils/constants";
import Link from 'next/link'
import React from "react";

const Footer = () => {
    return (
        <div className="blog-footer" id="blog-footer">
            <div className="blog-footer-inner border-t md:border-y dark:border-ccc border-999">
                <div className="grid grid-cols-12">
                    {/*<div className="sub-menu">*/}
                    {/*    <div className="mb-3">POPULAR</div>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <Link href={ROUTER.HOME} className="nav-link">Weading Photo Spots</Link>*/}
                    {/*        </li>*/}
                    {/*        <li className="">*/}
                    {/*            <Link href={ROUTER.HOME} className="nav-link">Ceramic Handmade Shop</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link href={ROUTER.HOME} className="nav-link">National Library</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link href={ROUTER.HOME} className="nav-link">Gusto Chela Coffee</Link>*/}
                    {/*        </li>*/}

                    {/*    </ul>*/}
                    {/*</div>*/}
                    <div className="md:col-span-4 col-span-12 flex justify-center border-b md:border-b-0 dark:border-ccc md:border-r md:!border-ccc footer-logo items-center p-4 lg:p-5">
                        <img className="h-fit md:w-2/5 w-2/5 dark:hidden" src="/img/footer-logo.svg" alt="smile" loading="lazy"/>
                        <img className="h-fit md:w-2/5 w-2/5 dark:block hidden" src="/img/footer-logo-2.svg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="md:col-span-4 flex items-center md:!px-5 col-span-12 footer-info md:p-4 p-3 lg:p-5 flex border-b border-ccc md:!border-b-0 md:border-r md:border-ccc">
                        <div className="grid grid-cols-4 w-full">
                            <div className="col-span-2 text-center md:text-left">
                                <div className="sub-menu">
                                    <div className="mb-3">INTEREST</div>
                                    <ul>
                                        <li>
                                            <Link href={ROUTER.ABOUT} className="nav-link">Sun care</Link>
                                        </li>
                                        <li>
                                            <Link href={ROUTER.DESTINATION} className="nav-link">Skincare Routine</Link>
                                        </li>
                                        <li>
                                            <Link href={ROUTER.GALLERY} className="nav-link">Nuturish</Link>
                                        </li>
                                        <li>
                                            <Link href={ROUTER.GALLERY} className="nav-link">Skincare Ingredients</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-2 text-center md:text-left">
                                <div className="sub-menu">
                                    <div className="mb-3">INFO</div>
                                    <ul>
                                        <li>
                                            <Link href={ROUTER.CONTACT} className="nav-link">About</Link>
                                        </li>
                                        <li>
                                            <Link href={ROUTER.CONTACT} className="nav-link">Contact me</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 flex items-center col-span-12 footer-sub p-3 md:p-4 lg:p-5">
                        <div className="">
                            <div className="mb-2">Enter your email address to receive new posts in your inbox and seasonal newsletters with
                                extra goodies!</div>
                            <div>
                                <div className="flex sub-input dark:border-b dark:border-ccc">
                                    <div className="w-full">
                                        <input className="w-full py-1 pr-1" placeholder="Email address"/>
                                    </div>
                                    <button className="" type="submit">
                                        <img className="w-full dark:hidden" src="../img/icon/arrow-right-circle.svg" alt="smile" loading="lazy"/>
                                        <img className="w-full hidden dark:block" src="../img/icon/arrow-right-circle-white.svg" alt="smile" loading="lazy"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy py-2">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="text-center copy-right dark:!text-999">COPYRIGHT © 2023 · Nthduong Blog. ALL RIGHTS RESERVED</div>
                    </div>
                    {/*<div className="col-span-3">*/}
                    {/*    <div className="my-social flex w-full">*/}
                    {/*        <div>*/}
                    {/*            <Link href="#">Instagram</Link>*/}
                    {/*        </div>*/}
                    {/*        <div className="mx-3">*/}
                    {/*            <Link href="#">Pinterest</Link>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <Link href="#">Behance</Link>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}
export default Footer;