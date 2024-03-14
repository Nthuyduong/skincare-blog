import React from "react";
import Link from 'next/link'
import { ROUTER } from "../../utils/constants";

const Ingredient = () => {
    return (
        <div>
            <div className="container-fluid m-w mx-auto my-0 pt-60">
                <div className="grid grid-cols-12">
                    <div className="col-span-9">
                        <div className="heading pb-4">Skincare Ingredients</div>
                        <div>Browse our dictionary for all the skincare ingredients in your favorite products, with trusted
                            insights from dermatologists, cosmetic chemists, and more.</div>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2">
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
                        <div className="flex">
                            <div className="ingredient py-4 pr-4 heading_5">A</div>
                            <div className="ingredient p-4 heading_5">B</div>
                            <div className="ingredient p-4 heading_5">C</div>
                            <div className="ingredient p-4 heading_5">D</div>
                            <div className="ingredient p-4 heading_5">E</div>
                            <div className="ingredient p-4 heading_5">F</div>
                            <div className="ingredient p-4 heading_5">G</div>
                            <div className="ingredient p-4 heading_5">H</div>
                            <div className="ingredient p-4 heading_5">I</div>
                            <div className="ingredient p-4 heading_5">J</div>
                            <div className="ingredient p-4 heading_5">K</div>
                            <div className="ingredient p-4 heading_5">L</div>
                        </div>
                        <div className="flex">
                            <div className="ingredient py-4 pr-4 heading_5">M</div>
                            <div className="ingredient p-4 heading_5">N</div>
                            <div className="ingredient p-4 heading_5">O</div>
                            <div className="ingredient p-4 heading_5">P</div>
                            <div className="ingredient p-4 heading_5">Q</div>
                            <div className="ingredient p-4 heading_5">R</div>
                            <div className="ingredient p-4 heading_5">S</div>
                            <div className="ingredient p-4 heading_5">T</div>
                            <div className="ingredient p-4 heading_5">U</div>
                            <div className="ingredient p-4 heading_5">V</div>
                            <div className="ingredient p-4 heading_5">W</div>
                            <div className="ingredient p-4 heading_5">X</div>
                            <div className="ingredient p-4 heading_5">Z</div>
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