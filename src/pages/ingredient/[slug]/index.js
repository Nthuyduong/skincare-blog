import React, { useState, useEffect, useRef } from "react";
import Ingredient from "../index";
import { getIngredientByIdApi, getIngredientBySlugApi } from "@services/ingredients"
import { BASE_URL } from "@utils/apiUtils";
import { useRouter } from 'next/router';
import { useAnimation } from "@hooks/useAnimation";
import Head from "next/head";

const IngredientDetail = ({ ingredientProps, slug, isCrs }) => {

    const { handleAccordion } = useAnimation();

    const router = useRouter();

    const [ingredient, setIngredient] = useState(ingredientProps);

    useEffect(() => {
        if (isCrs) {
            fetchData();
        }
    }, [router.asPath]);

    const fetchData = async () => {
        const res = await getIngredientBySlugApi(slug);
        setIngredient(res?.data || {})
    }

    useEffect(() => {
        if (isCrs) {
            handleAccordion();
        }
    }, [ingredient]);

    // TEST
    const [clickedIndex, setClickedIndex] = useState(0);
    const contentRefs = useRef([]);

    const handleClick = (index) => {
        setClickedIndex(index);
        if (contentRefs.current && contentRefs.current[index]) {

            if (index >= clickedIndex) {
                contentRefs.current[index].scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({
                    top: contentRefs.current[index].offsetTop - 90,
                    behavior: 'smooth'
                });
            }

        }
    };


    // Test image change when scroll

    // const [isScaled, setIsScaled] = useState(false);
    // const prevScrollY = useRef(0);

    // const handleScroll = () => {
    //     const currentScrollY = window.scrollY;

    //     if (currentScrollY > prevScrollY.current) {
    //         // Scrolling down
    //         setIsScaled(true);
    //     } else {
    //         // Scrolling up
    //         setIsScaled(false);
    //     }

    //     prevScrollY.current = currentScrollY;
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <>
            <Head>
                <title>{ingredient?.meta_title ?? 'Ingredient'}</title>
                <meta name="description" content={ingredient?.meta_description ?? 'Ingredient'} />
            </Head>
            <div className="detail-ingredient pt-7">
                <div className="mx-auto m-w my-0">
                    {/*BANNER*/}
                    {/* <div className="md:grid grid-cols-12">
                        <div className="col-span-2 hidden sm:block"></div>
                        <div className="col-span-8 sm:col-span-8 px-3 sm:px-0">
                            <div className="grid grid-cols-8 gap-5">
                                <div className="col-span-12 sm:col-span-3 border border-solid border-ccc !border-999">
                                    <img className="w-full dark:hidden" src={BASE_URL + '/storage/' + ingredient?.featured_img} alt="smile" loading="lazy" />
                                    <img className="w-full dark:block hidden" src={BASE_URL + '/storage/' + ingredient?.featured_img2} alt="smile" loading="lazy" />
                                </div>
                                <div className="col-span-12 sm:col-span-5 flex items-center">

                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 hidden sm:block"></div>
                    </div> */}
                    <div className="border-t border-ccc">
                        <div className="sm:hidden grid grid-cols-12">
                            <div className="col-span-2 hidden sm:block"></div>
                            <div className="col-span-12 sm:col-span-8 px-3 sm:px-0">
                                {/*breadscrumb*/}
                                <div className="md:hidden flex pb-3">
                                    <ul className="flex body_text">
                                        <li><a href="src/pages/ingredient/ingredients#index.js">Home</a></li>
                                        <li className="sm:mx-2 mx-1">/</li>
                                        <li><a href="src/pages/ingredient/ingredients#index.js">Skincare ingredients</a></li>
                                        <li className="sm:mx-2 mx-1">/</li>
                                        <li><a href="src/pages/ingredient/ingredients#index.js">{ingredient?.name}</a></li>
                                    </ul>
                                </div>
                                {/* BANNER IN MOBILE */}
                                <div className="mb-4 border border-solid border-ccc !border-999 banner-image block md:hidden">
                                    <img
                                        className="`w-full dark:hidden"
                                        src={BASE_URL + '/storage/' + ingredient?.featured_img}
                                        alt="smile"
                                        loading="lazy"
                                    />
                                    <img
                                        className="w-full dark:block hidden"
                                        src={BASE_URL + '/storage/' + ingredient?.featured_img2}
                                        alt="smile"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="md:hidden block mb-6">
                                            <h1 className="heading_3 mb-4">{ingredient?.name}</h1>
                                            {/* <h3>{ingredient?.description}</h3> */}
                                        </div>
                                {/*Ingredient detail*/}
                                <div className="mb-6">
                                    {
                                        ingredient?.details ? (
                                            ingredient.details.map((item, index) => {
                                                return (
                                                    <div
                                                        className={`my-collapse border-b dark:border-999 border-ccc border-solid`}
                                                        key={index}
                                                    >
                                                        <div className="mb-1 question-container flex">
                                                            <div className="question mr-auto medium_text">
                                                                <div className="flex">
                                                                    <div className="heading_6 mr-2">{index + 1}/</div>
                                                                    <div className="heading_6">{item?.name}</div>
                                                                </div>
                                                            </div>
                                                            <div className="btn-question flex justify-center items-center">
                                                                <svg role="presentation" focusable="false" width="12" height="9" className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                                    <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className={`content-container pl-3`}>
                                                            <div
                                                                className="whitespace-pre-line"
                                                            >{item?.content}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : ''
                                    }
                                </div>
                            </div>
                            <div className="col-span-2 hidden sm:block"></div>
                        </div>

                        {/* NEW ingredient DETAILS */}
                        <div className="hidden sm:block mt-4">
                            <div className="md:grid grid-cols-12 md:gap-6">
                                <div className="col-span-5 lg:col-span-6 ">
                                    <div className="sticky top-[70px]">
                                        <div className="md:block hidden">
                                            {/*breadscrumb*/}
                                            <div className="flex pb-3">
                                                <ul className="flex body_text">
                                                    <li><a href="src/pages/ingredient/ingredients#index.js">Home</a></li>
                                                    <li className="sm:mx-2 mx-1">/</li>
                                                    <li><a href="src/pages/ingredient/ingredients#index.js">Skincare ingredients</a></li>
                                                    <li className="sm:mx-2 mx-1">/</li>
                                                    <li><a href="src/pages/ingredient/ingredients#index.js">{ingredient?.name}</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                        {/*BANNER*/}
                                        <div className="md:grid grid-cols-12">
                                            <div className="col-span-10">
                                                {/* <div className={`border border-solid border-ccc !border-999 banner-image ${isScaled ? 'scale-down' : ''}`}> */}
                                                {/* <div className="border border-solid border-ccc !border-999 banner-image">
                                                    <img
                                                        className="`w-full dark:hidden"
                                                        src={BASE_URL + '/storage/' + ingredient?.featured_img}
                                                        alt="smile"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        className="w-full dark:block hidden"
                                                        src={BASE_URL + '/storage/' + ingredient?.featured_img2}
                                                        alt="smile"
                                                        loading="lazy"
                                                    />
                                                </div> */}
                                            </div>
                                            <div className="col-span-2"></div>
                                        </div>

                                        <div className="md:block hidden">
                                            <h1 className="heading_3 mb-4">{ingredient?.name}</h1>
                                            {/* <h3>{ingredient?.description}</h3> */}
                                        </div>
                                        <div className="py-3 border-t border-solid border-ccc flex items-center">
                                            <div className="medium_text">Detailed Ingredient Information</div>
                                            <div className="ml-auto">(04)</div>
                                        </div>
                                        <div className="">
                                            {
                                                ingredient?.details ? (
                                                    ingredient.details.map((item, index) => {
                                                        return (
                                                            <div className="py-3 border-t border-solid border-ccc">
                                                                <div
                                                                    key={index}
                                                                    className={`flex items-center ${clickedIndex === index ? 'click' : ''}`}
                                                                    onClick={() => handleClick(index)}
                                                                >
                                                                    <div className="spot"></div>
                                                                    <div className="flex">
                                                                        <div className="medium_text mr-2">{index + 1}/</div>
                                                                        <div className="medium_text">{item?.name}</div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                ) : ''
                                            }
                                            <div className="md:grid grid-cols-12 mt-5 lg:mb-0 mb-6">
                                                <div className="col-span-12 lg:col-span-8">
                                                    {/* <div className={`border border-solid border-ccc !border-999 banner-image ${isScaled ? 'scale-down' : ''}`}> */}
                                                    <div className="border border-solid border-ccc !border-999 banner-image">
                                                        <img
                                                            className="`w-full dark:hidden"
                                                            src={BASE_URL + '/storage/' + ingredient?.featured_img}
                                                            alt="smile"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            className="w-full dark:block hidden"
                                                            src={BASE_URL + '/storage/' + ingredient?.featured_img2}
                                                            alt="smile"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="md:block hidde col-span-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-7 lg:col-span-6">

                                    {
                                        ingredient?.details ? (
                                            ingredient.details.map((item, index) => {
                                                return (
                                                    <div
                                                        className="mb-4"
                                                        key={index}
                                                        ref={(el) => (contentRefs.current[index] = el)}
                                                    >
                                                        <div className="flex mb-2">
                                                            <div className="heading_5 mr-2">{index + 1}/</div>
                                                            <div className="heading_5">{item?.name}</div>
                                                        </div>
                                                        <div>{item?.content}</div>
                                                    </div>
                                                )
                                            })
                                        ) : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

IngredientDetail.getInitialProps = async ({ req, res, query }) => {
    const { slug } = query;
    if (typeof window != 'undefined') {
        return {
            ingredientProps: {},
            isCrs: true,
            slug,
        }
    }
    try {
        const response = await fetch(`${BASE_URL}/api/ingredients/slug/${slug}`);

        const resData = await response.json();
        return {
            ingredientProps: resData?.data || {},
            isCrs: false,
            slug,
        }

    } catch (error) {
        return {
            ingredientProps: {},
            isCrs: true,
            slug,
        }
    }
}

export default IngredientDetail;