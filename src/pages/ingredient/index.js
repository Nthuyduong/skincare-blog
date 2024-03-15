import React from "react";
import Link from 'next/link'
import { ROUTER } from "../../utils/constants";

const Ingredient = () => {
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
                        <div className="flex mb-4">
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
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="single-ingredient">
                        <div className="flex items-baseline">
                            <div className="heading_5 mb-4 pr-2">A</div>
                            <div className="ingre-decor bg-ccc w-full"></div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-3">
                                <div>
                                    <Link href={ROUTER.INGREDIENTDETAIL}>Allantoin</Link>
                                </div>
                                <div className="">Alcohol Denat</div>
                                <div>Almond Oil</div>
                                <div>Aloe Vera</div>
                                <div>Alpha Hydroxy Acid</div>
                            </div>
                            <div className="col-span-3">
                                <div>Allantoin</div>
                                <div>Alcohol Denat</div>
                                <div>Almond Oil</div>
                                <div>Aloe Vera</div>
                                <div>Alpha Hydroxy Acid</div>
                            </div>
                            <div className="col-span-3">
                                <div>Allantoin</div>
                                <div>Alcohol Denat</div>
                                <div>Almond Oil</div>
                                <div>Aloe Vera</div>
                                <div>Alpha Hydroxy Acid</div>
                            </div>
                            <div className="col-span-3"><div>Allantoin</div>
                                <div>Alcohol Denat</div>
                                <div>Almond Oil</div>
                                <div>Aloe Vera</div>
                                <div>Alpha Hydroxy Acid</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ingredient;