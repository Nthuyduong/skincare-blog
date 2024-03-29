import React, { useState, useEffect } from "react";
import Ingredient from "../index";
import {getIngredientByIdApi} from "@services/ingredients"
import { BASE_URL } from "@utils/apiUtils";
import { useRouter } from 'next/router';

const IngredientDetail = ({ ingredientProps , id , isCrs }) => {

    const router = useRouter();

    const [active, setActive] = useState(null);

    const [ingredient, setIngredient] = useState(ingredientProps);

    useEffect(() => {
        if (isCrs) {
            fetchData();
        }
    }, [router.asPath]);

    const fetchData = async () => {
        const res = await getIngredientByIdApi(id);
        setIngredient(res?.data || {})
    }

    const handleActive = (index) => {
        if (active == index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <div className="detail-ingredient pt-7">
            <div className="mx-auto m-w my-0">
                <div className="mb-5 border-b border-ccc">
                    {/*breadscrumb*/}
                    <div className="flex pb-3">
                        <ul className="flex">
                            <li><a href="src/pages/ingredient/ingredients#index.js">Home</a></li>
                            <li className="mx-2">/</li>
                            <li><a href="src/pages/ingredient/ingredients#index.js">Guides & Tutorials</a></li>
                        </ul>
                    </div>
                </div>
                {/*BANNER*/}
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-6 flex items-center">
                        <div className="">

                            <div className="heading_2 mb-3">{ingredient?.name}</div>
                            <div>
                                Iou want to dig a bit deeper and really understand retinol, you have to start with tretinoin.
                                We have written a nice geeky descriptio
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <img className="w-full" src="/img/ingredient/ingredient1.jpg" alt="smile" loading="lazy"/>
                        {/*<img className="dark:block hidden w-full" src="/img/ingredients/ingredient1.jpg" alt="smile" loading="lazy"/>*/}
                    </div>
                </div>
                <div className="mt-5 border-t border-ccc">
                    {/*Ingredient detail*/}
                    <div className="">
                        {
                            ingredient?.details ? (
                                ingredient.details.map((item, index) => {
                                    return (
                                        <div className={`my-collapse dark:border-b dark:border-ccc ${active === index ? 'expanded' : ''}`}>
                                            <div className="mb-1 question-container flex" onClick={() => {handleActive(index)}}>
                                                <div className="question mr-auto medium_text">
                                                    <div className="flex">
                                                        <div className="heading_5 mr-2">{index +1}</div>
                                                        <div className="heading_5">{item?.name}</div>
                                                    </div>
                                                </div>
                                                <div className="btn-question flex justify-center items-center">
                                                    <svg role="presentation" focusable="false" width="12" height="9" className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className={`content-container`}>
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
            </div>
        </div>
    )
}

IngredientDetail.getInitialProps = async({ req, res, query }) => {
    const { id } = query;
    if (typeof window != 'undefined') {
        return {
            ingredientProps: {},
            isCrs: true,
            id,
        }
    }
    try {
        const response = await fetch(`${BASE_URL}/api/ingredients/${id}`);

        const resData = await response.json();
        return {
            ingredientProps: resData?.data || {},
            isCrs: false,
            id,
        }
        
    } catch (error) {
        return {
            ingredientProps: {},
            isCrs: true,
            id,
        }
    }
}

export default IngredientDetail;