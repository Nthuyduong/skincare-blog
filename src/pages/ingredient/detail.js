import React, {useState} from "react";
import Ingredient from "./index";

const IngredientDetail = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndex1, setActiveIndex1] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);
    const [activeIndex3, setActiveIndex3] = useState(null);
    const [activeIndex4, setActiveIndex4] = useState(null);


    const toggleCollapse = () => {
        setActiveIndex((prevIndex) => (prevIndex === null ? 0 : null));
    };
    const toggleCollapse1 = () => {
        setActiveIndex1((prevIndex) => (prevIndex === null ? 0 : null));
    };
    const toggleCollapse2 = () => {
        setActiveIndex2((prevIndex) => (prevIndex === null ? 0 : null));
    };
    const toggleCollapse3 = () => {
        setActiveIndex3((prevIndex) => (prevIndex === null ? 0 : null));
    };
    const toggleCollapse4 = () => {
        setActiveIndex4((prevIndex) => (prevIndex === null ? 0 : null));
    };

    return (
        <div className="detail-ingredient pt-7">
            <div className="container-fluid mx-auto m-w my-0">
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

                            <div className="heading_2 mb-3">Alpha Hydroxy Acid</div>
                            <div>
                                Iou want to dig a bit deeper and really understand retinol, you have to start with tretinoin.
                                We have written a nice geeky descriptio
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <img className="w-full" src="/img/ingredient/ingredient1.jpg" alt="smile" loading="lazy"/>
                        {/*<img className="dark:block hidden w-full" src="/img/ingredient/ingredient1.jpg" alt="smile" loading="lazy"/>*/}
                    </div>
                </div>
                <div className="mt-5 border-t border-ccc">
                    {/*Ingredient detail*/}
                    <div className="">
                        <div className={`my-collapse dark:border-b dark:border-ccc ${activeIndex === 0 ? 'expanded' : ''}`}>
                            <div className="mb-1 question-container flex" onClick={toggleCollapse}>
                                <div className="question mr-auto medium_text">
                                    <div className="flex">
                                        <div className="heading_5 mr-2">01/</div>
                                        <div className="heading_5">What is it?</div>
                                    </div>
                                </div>
                                <div className="btn-question flex justify-center items-center">
                                    <svg role="presentation" focusable="false" width="12" height="9" className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className={`content-container`}>
                                <div>Answer</div>
                            </div>
                        </div>

                        <div className={`my-collapse dark:border-b dark:border-ccc ${activeIndex1 === 0 ? 'expanded' : ''}`}>
                            <div className="mb-1 question-container flex" onClick={toggleCollapse1}>
                                <div className="question mr-auto medium_text">
                                    <div className="flex">
                                        <div className="heading_5 mr-2">02/</div>
                                        <div className="heading_5">Quick facts</div>
                                    </div>
                                </div>
                                <div className="btn-question flex justify-center items-center">
                                    <svg role="presentation" focusable="false" width="12" height="9" className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className={`content-container`}>
                                <div>Answer</div>
                            </div>
                        </div>

                        <div className={`my-collapse dark:border-b dark:border-ccc ${activeIndex2 === 0 ? 'expanded' : ''}`}>
                            <div className="mb-1 question-container flex" onClick={toggleCollapse2}>
                                <div className="question mr-auto medium_text">
                                    <div className="flex">
                                        <div className="heading_5 mr-2">03/</div>
                                        <div className="heading_5">Benefits</div>
                                    </div>
                                </div>
                                <div className="btn-question flex justify-center items-center">
                                    <svg role="presentation" focusable="false" width="12" height="9" className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className={`content-container`}>
                                <div>Answer</div>
                            </div>
                        </div>
                        <div className={`my-collapse dark:border-b dark:border-ccc ${activeIndex3 === 0 ? 'expanded' : ''}`}>
                            <div className="mb-1 question-container flex" onClick={toggleCollapse3}>
                                <div className="question mr-auto medium_text">
                                    <div className="flex">
                                        <div className="heading_5 mr-2">03/</div>
                                        <div className="heading_5">Side effects</div>
                                    </div>
                                </div>
                                <div className="btn-question flex justify-center items-center">
                                    <svg role="presentation" focusable="false" width="12" height="9" className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className={`content-container`}>
                                <div>Answer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IngredientDetail;