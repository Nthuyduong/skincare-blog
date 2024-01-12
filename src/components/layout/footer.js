import { ROUTER } from "../../utils/constants";
import Link from 'next/link'
import React from "react";

const Footer = () => {
    return (
        <div className="blog-footer" id="blog-footer">
            <div className="blog-footer-inner">
                <div className="grid grid-cols-12 gap-4">
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
                    <div className="col-span-4 flex justify-center footer-logo">
                        <img className="w-2/5 dark:hidden" src="/img/footer-logo.svg" alt="smile" loading="lazy"/>
                        <img className="w-2/5 dark:block" src="/img/footer-logo-2.svg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-4 footer-info flex">
                        <div className="mr-5">
                            <div className="sub-menu">
                                <div className="mb-3">INTEREST</div>
                                <ul>
                                    <li>
                                        <Link href={ROUTER.ABOUT} className="nav-link">About us</Link>
                                    </li>
                                    <li>
                                        <Link href={ROUTER.DESTINATION} className="nav-link">Destinations</Link>
                                    </li>
                                    <li>
                                        <Link href={ROUTER.GALLERY} className="nav-link">Our Gallery</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <div className="sub-menu">
                                <div className="mb-3">INFO</div>
                                <ul>
                                    <li>
                                        <Link href={ROUTER.CONTACT} className="nav-link">Contact me</Link>
                                    </li>
                                    <li>
                                        <Link href={ROUTER.CONTACT} className="nav-link">Work with me</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 footer-sub">
                        <div className="mb-2">Enter your email address to receive new posts in your inbox and seasonal newsletters with
                            extra goodies!</div>
                        <div>
                            <div className="flex sub-input dark:border-b dark:border-ccc">
                                <div className="w-full">
                                    <input className="w-full py-1 pr-1" placeholder="Email address"/>
                                </div>
                                <button className="" type="submit">
                                    <img className="w-full dark:hidden" src="../img/icon/arrow-right-circle.svg" alt="smile" loading="lazy"/>
                                    <img className="w-full dark:block" src="../img/icon/arrow-right-circle-white.svg" alt="smile" loading="lazy"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-sub">
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