import React, {useRef} from "react";
import {useState} from "react";
import {ROUTER} from "../utils/constants";
import Link from "next/link";

const Skintype = () => {

    // FAQs
    const faqData = [
        {
            question: 'What is your skin type?',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'Recommend products to treat you dry skin',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'Did you have acne in the pass?',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'How did you do to treat your acne?',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'The must-have skincare products you need?',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'What is your current skincare routine?',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'Do you alter your skincare routine with each changing season?',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'A different method to achieve healthy and beautiful skin',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleCollapse = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqElements = faqData.map((faq, index) => (
        <div key={index} className={`my-collapse dark:border-b dark:border-ccc ${activeIndex === index ? 'expanded' : ''}`}>
            <div className="mb-1 question-container flex" onClick={() => toggleCollapse(index)}>
                <div className="question mr-auto medium_text">
                    {faq.question}
                </div>
                <div class="btn-question">
                <svg role="presentation" focusable="false" width="12" height="9" class="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                    <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5"></path>
                </svg>
                </div>
            </div>
            <div className={`content-container`}>
                <p>{faq.answer}</p>
            </div>
        </div>
    ));
    return (
        <div className="skintype-page">
            <div className="container-fluid">
                <div className="pt-5 head-content pb-5">
                    <div className="heading text-center">Skin type & History</div>
                    <div className="grid grid-cols-5">
                        <div className="col-span-1"></div>
                        <div className="col-span-3 heading_6 text-center">
                            Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                            consequat quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
                <div className="mt-5 skin-bar dark:border-ccc pb-3">
                    <div className="flex">
                        <div className="mr-auto">Scroll to explore</div>
                        <div className="">
                            <img className="h-4" src="./img/icon/chevron-down-black.svg" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="mt-5 all-faq">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-4">
                            <div className="pr-5">
                                <div className="heading_3 mb-3">Connect with me</div>
                                <div>Are you interested in collaborating? Do you want to be a part of us? Join with us now!</div>
                                <div className="mt-4">
                                    <button className="w-full my-out-line-btn dark:border-ccc" type="submit">Join with us</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="">
                                {faqElements}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-products mt60">
                    <div className="content main">
                        <div className="mb-2 heading_3">All products I’ve used</div>
                        <div className="flex">
                            <div className="mr-auto">Are you interested in collaborating? Do you want to be a part of us? Join with us now!</div>
                            <div>
                                <a className="text-link" href="#">View all</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 mt-5">
                        <div className="col-span-3">
                            <div>
                                <div>
                                    <img className="w-full" src="./img/skintype/1.png" alt="smile" loading="lazy"/>
                                </div>
                                <div className="mt-3">
                                    <div className="small_text mb-1">
                                        Testings & Reviews
                                    </div>
                                    <div className="medium_text">
                                        <Link href={ROUTER.TESTREVIEW}>
                                            BHA Paula's Choice
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <div>
                                    <img className="w-full" src="./img/skintype/2.png" alt="smile" loading="lazy"/>
                                </div>
                                <div className="mt-3">
                                    <div className="small_text mb-1">Testings & Reviews</div>
                                    <div className="medium_text">
                                        <Link href={ROUTER.TESTREVIEW}>
                                            BHA Paula's Choice
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <div>
                                    <img className="w-full" src="./img/skintype/3.png" alt="smile" loading="lazy"/>
                                </div>
                                <div className="mt-3">
                                    <div className="small_text mb-1">Testings & Reviews</div>
                                    <div className="medium_text">
                                        <Link href={ROUTER.TESTREVIEW}>
                                            BHA Paula's Choice
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <div>
                                    <img className="w-full" src="./img/skintype/4.png" alt="smile" loading="lazy"/>
                                </div>
                                <div className="mt-3">
                                    <div className="small_text mb-1">Testings & Reviews</div>
                                    <div className="medium_text">
                                        <Link href={ROUTER.TESTREVIEW}>
                                            BHA Paula's Choice
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="must-read mt60">*/}
                {/*    <div className="flex mb-5 items-center">*/}
                {/*        <div className="mr-auto">*/}
                {/*            <div className="heading_3">Must-read topic to shine your skin</div>*/}
                {/*        </div>*/}
                {/*        <div className="">*/}
                {/*            <a className="text-link" href="#">View all</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="grid grid-cols-4 gap-4">*/}
                {/*        <div className="col-span-4 md:col-span-2 h-popular-des-ct">*/}
                {/*            <div className="des-ct-img overflow-hidden">*/}
                {/*                <img*/}
                {/*                    className="w-full"*/}
                {/*                    src="./img/home/category1.jpg"*/}
                {/*                    alt="smile"*/}
                {/*                    loading="lazy"*/}
                {/*                    height={100}*/}
                {/*                    width={100}/>*/}
                {/*            </div>*/}
                {/*            <div className="category-des-content">*/}
                {/*                <div className="heading_4 top-destination-title py-2">How to clean</div>*/}
                {/*                <div className="flex py-2 sub-title">*/}
                {/*                    <div className="flex">*/}
                {/*                        <div className="flex pr-1">*/}
                {/*                            <div>10 Blogs Article</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="ml-auto">*/}
                {/*                        <a className="text-link" href="#">View all</a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-span-4 md:col-span-2 h-popular-des-ct">*/}
                {/*            <div className="des-ct-img overflow-hidden">*/}
                {/*                <img*/}
                {/*                    className="w-full"*/}
                {/*                    src="./img/home/category.jpg"*/}
                {/*                    alt="smile"*/}
                {/*                    loading="lazy"*/}
                {/*                    height={100}*/}
                {/*                    width={100}*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className="category-des-content">*/}
                {/*                <div className="heading_4 top-destination-title py-2">Shopping guide</div>*/}
                {/*                <div className="flex py-2 sub-title">*/}
                {/*                    <div className="flex">*/}
                {/*                        <div className="flex pr-1">*/}
                {/*                            <div>10 Blogs Article</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="ml-auto">*/}
                {/*                        <a className="text-link" href="#">View all</a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Skintype;