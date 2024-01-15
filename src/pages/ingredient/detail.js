import React from "react";
import Ingredient from "./index";

const IngredientDetail = () => {
    return (
        <div className="detail-ingredient pt-7">
            <div className="container-fluid mx-auto m-w my-0">
                {/*BANNER*/}
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-6">
                        <img className="w-full" src="/img/ingredient/ingredient1.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-6 flex items-center">
                        <div className="">
                            {/*breadscrumb*/}
                            <div className="flex pb-3">
                                <ul className="flex">
                                    <li><a href="src/pages/ingredient/ingredients#index.js">Home</a></li>
                                    <li className="mx-2">/</li>
                                    <li><a href="src/pages/ingredient/ingredients#index.js">Guides & Tutorials</a></li>
                                </ul>
                            </div>
                            <div className="heading_2 mb-3">Alpha Hydroxy Acid</div>
                            <div>
                                Iou want to dig a bit deeper and really understand retinol, you have to start with tretinoin.
                                We have written a nice geeky descriptio
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-1"></div>
                    <div className="col-span-10">

                    </div>
                    <div className="col-span-1"></div>
                </div>
            </div>
        </div>
    )
}
export default IngredientDetail;