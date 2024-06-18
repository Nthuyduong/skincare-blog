import React, { useState, useEffect } from "react";
import Ingredient from "../index";
import { getIngredientByIdApi, getIngredientBySlugApi } from "@services/ingredients"
import { BASE_URL } from "@utils/apiUtils";
import { useRouter } from 'next/router';
import { useAnimation } from "@hooks/useAnimation";
import Head from "next/head";

const IngredientDetail = ({ ingredientProps , slug , isCrs }) => {

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

    return (
        <>
            <Head>
                <title>{ingredient?.meta_title ?? 'Ingredient'}</title>
                <meta name="description" content={ingredient?.meta_description ?? 'Ingredient'} />
            </Head>
            <div className="detail-ingredient pt-7">
                <div className="mx-auto m-w my-0">
                    {/*BANNER*/}
                    <div className="md:grid grid-cols-12">
                        <div className="col-span-2 hidden sm:block"></div>
                        <div className="col-span-8 sm:col-span-8 px-3 sm:px-0">
                            <div className="grid grid-cols-8 gap-5">
                                <div className="col-span-12 sm:col-span-3 border border-solid border-ccc !border-999">
                                    <img className="w-full dark:hidden" src={BASE_URL + '/storage/' + ingredient?.featured_img} alt="smile" loading="lazy"/>
                                    <img className="w-full dark:block hidden" src={BASE_URL + '/storage/' + ingredient?.featured_img2} alt="smile" loading="lazy"/>
                                </div>
                                <div className="col-span-12 sm:col-span-5 flex items-center">
                                    <div className="">
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
                                        <h1 className="heading_2 mb-2">{ingredient?.name}</h1>
                                        <h3>{ingredient?.description}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 hidden sm:block"></div>
                    </div>
                    <div className="mt-5 border-t border-ccc">
                        <div className="grid grid-cols-12">
                            <div className="col-span-2 hidden sm:block"></div>
                            <div className="col-span-12 sm:col-span-8 px-3 sm:px-0">
                                {/*Ingredient detail*/}
                                <div className="">
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
                                                                    <div className="heading_6 mr-2">{index +1}/</div>
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
                    </div>
                </div>
            </div>
        </>
    )
}

IngredientDetail.getInitialProps = async({ req, res, query }) => {
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