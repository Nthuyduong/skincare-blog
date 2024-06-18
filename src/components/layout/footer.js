import { ROUTER } from "../../utils/constants";
import Link from 'next/link'
import React, { useState } from "react";
import { useApp } from "@hooks/useApp";
import { useModal } from '@hooks/modal';

const Footer = () => {

    const {
        hide,
        show,
        showLoading,
        addToast
    } = useModal();
    
    // const { subscribe } = useApp();

    // const [email, setEmail] = useState('');
    // const [error, setError] = useState(null);

    // const checkEmail = (email) => {
    //     const re = /\S+@\S+\.\S+/;
    //     return re.test(email);
    // }

    // const handleSubscribe = () => {
    //     setError(null);
    //     let errorTmp = {
    //         email: ''
    //     };
    //     let isError = false;
    //     if (!email) {
    //         errorTmp.email = 'Email is required';
    //         isError = true;
    //     }
    //     if (!checkEmail(email)) {
    //         errorTmp.email = 'Email is invalid';
    //         isError = true;
    //     }
    //     if (isError) {
    //         setError(errorTmp);
    //         return;
    //     };
    //     subscribe(email);
    // }

    return (
        <div className="blog-footer bg-tertiary md:pt-0 pt-5 mt-2" id="blog-footer">
            <div className="blog-footer-inner border-solid border-ccc">
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
                    <div className="md:col-span-4 col-span-12 flex justify-center border-b md:border-b-0 border-ccc md:border-r footer-logo items-center p-4 lg:p-5 border-solid">
                        <img className="h-fit md:w-2/5 w-2/5" src="/img/footer-logo.svg" alt="smile" loading="lazy"/>
                        {/* <img className="h-fit md:w-2/5 w-2/5 dark:block hidden" src="/img/footer-logo-2.svg" alt="smile" loading="lazy"/> */}
                    </div>
                    <div className="md:col-span-4 flex items-center md:!px-5 col-span-12 footer-info md:p-4 p-3 lg:p-5 flex border-b border-ccc md:!border-b-0 md:border-r md:border-ccc border-solid">
                        <div className="grid grid-cols-4 w-full">
                            <div className="col-span-2 text-center md:text-left">
                                <div className="sub-menu">
                                    <div className="text-textcolor mb-3">INTEREST</div>
                                    <ul>
                                        <li className="mb-1">
                                            <Link href={'/categories/guides-and-tutorial/sun-care'} className="text-textcolor nav-link w-full block">Sun care</Link>
                                        </li>
                                        <li className="mb-1">
                                            <Link href={'/categories/guides-and-tutorial/skincare-routine'} className="text-textcolor nav-link w-full block">Skincare Routine</Link>
                                        </li>
                                        <li className="mb-1">
                                            <Link href={'/categories/guides-and-tutorial/nourish-beauty'} className="text-textcolor nav-link w-full block">Nourish beauty</Link>
                                        </li>
                                        <li>
                                            <Link href={ROUTER.INGREDIENT} className="text-textcolor nav-link w-full block">Skincare Ingredients</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-2 text-center md:text-left">
                                <div className="sub-menu">
                                    <div className="mb-3 text-textcolor ">INFO</div>
                                    <ul>
                                        <li className="mb-1">
                                            <Link href={ROUTER.ABOUT} className="text-textcolor nav-link w-full block">About</Link>
                                        </li>
                                        <li>
                                            <Link href={ROUTER.CONTACT} className="text-textcolor nav-link w-full block">Contact me</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 flex items-center col-span-12 footer-sub p-3 md:p-4 lg:p-5">
                        <div className="">
                            <div className="mb-2 text-textcolor">Enter your email address to receive new posts in your inbox and seasonal newsletters!</div>
                            <div>
                                <div className="">
                                    <div className="w-full flex dark:border-999 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc focus-visible:outline-none">
                                        <input 
                                            className="w-full py-1 pr-2 w-full"
                                            placeholder="Join Radiance Aura Newsletters"
                                            // onChange={(e) => setEmail(e.target.value)}
                                            // onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                                            onClick={() => show({
                                                name: 'newsletters',
                                                data: {
                                                    message: 'This is a notice modal',
                                                },
                                                position: 'right',
                                                mobilePosition: 'right',
                                            })}
                                        />
                                        <button
                                            className=""
                                            type="submit"
                                            // onClick={handleSubscribe}
                                            onClick={() => show({
                                                name: 'newsletters',
                                                data: {
                                                    message: 'This is a notice modal',
                                                },
                                                position: 'right',
                                                mobilePosition: 'right',
                                            })}
                                        >
                                            <img className="w-full dark:hidden" src="../img/icon/arrow-right-circle.svg" alt="smile" loading="lazy"/>
                                            <img className="w-full hidden dark:block" src="../img/icon/arrow-right-circle-white.svg" alt="smile" loading="lazy"/>
                                        </button>
                                    </div>
                                    {/* {error?.email && <div className="mt-1 small_text text-red mb-3">{error?.email}</div>} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy py-2 md:border-t border-ccc dark:border-999 border-solid">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="text-center small_text copy-right text-textcolor">COPYRIGHT © 2024 · Radiance Aura Blog. ALL RIGHTS RESERVED</div>
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