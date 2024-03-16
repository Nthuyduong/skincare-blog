import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { ROUTER, ALPHABET } from "../../utils/constants";
import { BASE_URL } from "@utils/apiUtils";
import { useRouter } from 'next/router';
import { getAllWithoutPagination } from "@services/ingredients";

const sortByAlphabet = (ingredients) => {
    const resultsObject = {};
    ingredients.forEach((item) => {
        if (!resultsObject[item.name.charAt(0).toUpperCase()]) {
            resultsObject[item.name.charAt(0).toUpperCase()] = [item];
        } else {
            resultsObject[item.name.charAt(0).toUpperCase()].push(item);
        }
    });

    let index = Object.keys(resultsObject).sort()
    let sortedArrayOfObject = index.map((v) => {
        return {key: v, value: resultsObject[v]}
    })

    return sortedArrayOfObject;
}

const Ingredient = ({ ingredientsProps = [], isCrs }) => {
    const router = useRouter();

    const [ingredients, setIngredients] = useState(ingredientsProps || []);
    const [active, setActive] = useState(null);

    useEffect(() => {
        if (isCrs) {
            fetchData();
        }
    }, [router.asPath]);

    useEffect(() => {
        console.log((ingredients || []).filter(ingredient => !active || (active && ingredient.key == active)))
        
    }, [ingredients]);

    const fetchData = async () => {
        const res = await getAllWithoutPagination();
        setIngredients(sortByAlphabet(res?.data || []));
    }

    const handleActive = (index) => {
        if (active == index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <div>
            <div className="px-3 md:px-0 m-w mx-auto my-0 pt-60 pt-6">
                <div className="md:grid md:grid-cols-12">
                    <div className="col-span-12 md:col-span-9">
                        <div className="heading mb-3 md:mb-4">Skincare Ingredients</div>
                        <div>Browse our dictionary for all the skincare ingredients in your favorite products, with trusted
                            insights from dermatologists, cosmetic chemists, and more.</div>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="hidden md:col-span-2">
                        <img className="w-full dark:hidden" src="/img/icon/enzymes.svg" alt="smile" loading="lazy"/>
                        <img className="w-full dark:block hidden" src="/img/icon/enzymes_white.svg" alt="smile" loading="lazy"/>
                    </div>
                </div>
                {/*breadcrumb*/}
                <div className="py-6">
                    <div className="flex self-center border-solid border-y border-ccc dark:border-999 py-3 w-full">
                        <div className="mr-auto">
                            <ul className="flex">
                                <li><a href="src/pages/ingredient/ingredients#index.js">Home</a></li>
                                <li className="mx-2">/</li>
                                <li><a href="src/pages/ingredient/ingredients#index.js">Skincare nerd</a></li>
                                <li className="mx-2">/</li>
                                <li><a href="src/pages/ingredient/ingredients#index.js">Skincare ingredients</a></li>
                            </ul>
                        </div>
                        <div className="">30 Ingredients</div>
                    </div>
                </div>
                {/**/}
                <div className="">
                    <div className="heading_4">Find an ingredient by its first letter:</div>
                    <div className="pt-5">
                        <div className="pb-3 flex mb-4 gap-5 md:flex-wrap md:w-3/5 overflow-x-auto">
                            {ALPHABET.map((item, index) => (
                                <div 
                                    className={`ingredient heading_5 cursor-pointer border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-white ${active == item ? 'border-solid border-b' : ''}`} 
                                    key={index}
                                    onClick={() => {handleActive(item)}}
                                >{item}</div>
                            ))}
                        </div>
                        
                        {/* <div className="flex mb-4">
                            <div className="ingredient pr-4 pr-4 heading_5">A</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-white">B</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">C</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">D</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">E</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">F</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">G</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">H</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">I</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">J</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">K</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">L</div>
                        </div>
                        <div className="flex">
                            <div className="ingredient pr-4 pr-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">M</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">N</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">O</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">P</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">Q</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">R</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">S</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">T</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">U</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">V</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">W</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">X</div>
                            <div className="ingredient px-4 heading_5 pb-1 border-b border-transparent active:border-b active:border-solid active:border-333 dark:active-border-fff dark:hover:text-ccc hover:text-999 dark:active:text-333 active:text-whit">Z</div>
                        </div> */}
                    </div>
                </div>
                <div className="mt-5">
                    {(ingredients || []).filter(ingredient => !active || (active && ingredient.key == active)).map((item, index) => (
                        <div className="single-ingredient mb-4" key={index}>
                            <div className="flex items-baseline">
                                <div className="heading_5 mb-4 pr-2">{item.key}</div>
                                <div className="ingre-decor bg-ccc w-full"></div>
                            </div>
                            <div className="grid grid-cols-12">
                                {item.value.map((value, index) => (
                                    <div className="col-span-3" key={index}>
                                        <div>
                                            <Link href={`/ingredient/${value.id}`}>{value.name}</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Ingredient.getInitialProps = async ({ query }) => {
    if (typeof window != 'undefined') {
        return {
            ingredientsProps: [],
            isCrs: true,
        }
    }
    try {
        const response = await fetch(`${BASE_URL}/api/ingredients/getAll`);
        const resData = await response.json();
        const ingredients = await sortByAlphabet(resData.data || []);
        return {
            ingredientsProps: ingredients || [],
            isCrs: false,
        }
    } catch (error) {
        console.log(error)
        return {
            ingredientsProps: [],
            isCrs: true,
        }
    }
}

export default Ingredient;