import { ROUTER } from "../../utils/constants";
import Link from 'next/link'
import React, { useState } from "react";
import { useApp } from "@hooks/useApp";

const Footer = () => {
    const { subscribe } = useApp();

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const checkEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSubscribe = () => {
        setError(null);
        let errorTmp = {
            email: ''
        };
        let isError = false;
        if (!email) {
            errorTmp.email = 'Email is required';
            isError = true;
        }
        if (!checkEmail(email)) {
            errorTmp.email = 'Email is invalid';
            isError = true;
        }
        if (isError) {
            setError(errorTmp);
            return;
        };
        subscribe(email);
    }

    return (
        <div className="blog-footer" id="blog-footer">
            <div className="blog-footer-inner border-solid border-t md:border-y dark:border-999 border-ccc">
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
                    <div className="md:col-span-4 col-span-12 flex justify-center border-b md:border-b-0 border-ccc md:border-r md:!border-999 footer-logo items-center p-4 lg:p-5 border-solid">
                        <img className="h-fit md:w-2/5 w-2/5 dark:hidden" src="/img/footer-logo.svg" alt="smile" loading="lazy"/>
                        <img className="h-fit md:w-2/5 w-2/5 dark:block hidden" src="/img/footer-logo-2.svg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="md:col-span-4 flex items-center md:!px-5 col-span-12 footer-info md:p-4 p-3 lg:p-5 flex border-b border-ccc md:!border-b-0 md:border-r md:border-ccc md:!border-999 border-solid">
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
                            <div className="mb-2">Enter your email address to receive new posts in your inbox and seasonal newsletters!</div>
                            <div>
                                <div className="">
                                    <div className="w-full flex dark:border-999 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc focus-visible:outline-none">
                                        <input 
                                            className="w-full py-1 pr-2 w-full"
                                            placeholder="Email address"
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                                        />
                                        <button
                                            className=""
                                            type="submit"
                                            onClick={handleSubscribe}
                                        >
                                            <img className="w-full dark:hidden" src="../img/icon/arrow-right-circle.svg" alt="smile" loading="lazy"/>
                                            <img className="w-full hidden dark:block" src="../img/icon/arrow-right-circle-white.svg" alt="smile" loading="lazy"/>
                                        </button>
                                    </div>
                                    {error?.email && <div className="mt-1 small_text text-red mb-3">{error?.email}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy py-2">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="text-center small_text copy-right dark:!text-999 text-333">COPYRIGHT © 2023 · Nthduong Blog. ALL RIGHTS RESERVED</div>
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