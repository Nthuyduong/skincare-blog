import {ROUTER} from "../utils/constants";
import Link from "next/link";
import React, {useRef, useState} from "react";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import('@components/common/slider'), { ssr: false });

const Testreview = () => {

    // tabs
    const tabsRef = useRef([
        { title: 'Description'},
        { title: 'Who should use?'},
        { title: 'How to use'},
        { title: 'My skin result'},
        { title: 'Reviews'},
    ]);

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    //hàm map để thực hiện lặp qua các mảng
    const renderTabs = () => {
        return tabsRef.current.map((tab, index) => (
            <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={`my-tabs text-center py-2 px-3 ${activeTab === index ? 'active' : ''}`}
            >
                {tab.title}
            </div>
        ));
    };

    return (
        <div className="test-review-page">
            {/*website banner*/}
            <div className="md:block hidden review-banner w-full">
                <div className="relative">
                    <div className="container-fluid banner-left dark:text-black m-w mx-auto">
                        <div className="grid grid-cols-12">
                            <div className="col-span-5">
                                {/*breadcrumb*/}
                                <div className="mb-3 my-breadcrumb">
                                    <ul className="flex">
                                        <li><a href="#">Home</a></li>
                                        <li className="mx-2">/</li>
                                        <li><a href="#">Skincare Nerd</a></li>
                                        <li className="mx-2">/</li>
                                        <li><a href="#">Nuturish</a></li>
                                    </ul>
                                </div>
                                <div className="heading_2 mb-2">Drinking Water and Improving Skin</div>
                                <div className="medium_text mb-4">Uncover the secret to daily beautiful, radiant skin:
                                    happiness. Explore how joy transforms your beauty routine, embracing your natural glow with each passing day</div>
                                <div className="small_text">Writen by: Nthduong</div>
                                <div className="small_text my-1">Publish date: 16/01/2024</div>
                                <div className="small_text">About 10 minutes to read</div>
                                <div className="medium_text mt-4">Is this article helpful?</div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-right">
                        <img className="w-full" src="/img/article/waterbanner.jpg" alt="smile" loading="lazy"/>
                    </div>
                </div>
            </div>
            {/*Mobile banner*/}
            <div className="md:hidden block">
                <div className="banner-top py-4 bg-primary text-black">
                    <div className="container-fluid">
                        {/*breadcrumb*/}
                        <div className="mb-3 my-breadcrumb">
                            <ul className="flex">
                                <li><a href="#">Home</a></li>
                                <li className="mx-2">/</li>
                                <li><a href="#">Skincare Nerd</a></li>
                                <li className="mx-2">/</li>
                                <li><a href="#">Nuturish</a></li>
                            </ul>
                        </div>
                        <div className="heading_2 mb-2">Drinking Water and Improving Skin</div>
                        <div className="medium_text mb-4">Uncover the secret to daily beautiful, radiant skin:
                            happiness. Explore how joy transforms your beauty routine, embracing your natural glow with each passing day</div>
                        <div className="small_text">Writen by: Nthduong</div>
                        <div className="small_text my-1">Publish date: 16/01/2024</div>
                        <div className="small_text">About 10 minutes to read</div>
                        <div className="medium_text mt-4">Is this article helpful?</div>
                    </div>
                </div>
                <div className="banner-bottom">
                    <img className="w-full" src="/img/article/waterbanner.jpg" alt="smile" loading="lazy"/>
                </div>
            </div>
            <div className="container-fluid main-content m-w mx-auto my-0">
                <div className="ntd-tabs">
                    <div className="flex tabs-all-here">
                        {renderTabs()}
                    </div>
                    <div className="mt-4">
                        {activeTab === 0 && (
                            <div className="">
                                <div>Why is it different</div>
                                <div>SKIN PERFECTING 2% BHA Gel Exfoliant is a leave-on, water-light formula that gently and
                                    naturally exfoliates dead skin, just like your skin did when you were younger. This creates
                                    an immediate and dramatic improvement in skin's appearance and feel. Your skin will look more
                                    radiant and smooth, with diminished pore size, while softening the appearance of wrinkles.
                                    This exfoliant has a pH range of 3.2–3.8.</div>
                                <div>What does it do?</div>
                                <div>Works to create a younger appearance, revealing a glowing, smoother radiance, and diminishes
                                    pores, smooths bumps, and minimizes lines and wrinkles. It also provides long-lasting
                                    hydration for healthier-looking skin. It’s suitable even for skin prone to milia.</div>
                                <div>Ingredient</div>
                                <div>Water, Methylpropanediol, Butylene Glycol, (hydration), Polysorbate 20 (texture-enhancing),
                                    Salicylic Acid (beta hydroxy acid/exfoliant), Phytosphingosine (skin-renewing), Hydroxyethylcellulose
                                    (texture-enhancing), Vitis Vinifera Seed Extract (grape extract/antioxidant), Camellia Sinensis
                                    Flower/Leaf/Stem Extract (green tea/antioxidant) Epilobium Angustifolium Flower/Leaf/Stem
                                    Extract (willow herb/skin-soothing), Bisabolol (skin-soothing), Sodium Hydroxide (pH-adjusting),
                                    Tetrasodium EDTA (stabilizer).</div>
                                <div>Storage Information</div>
                                <div>Dry, cool place. Avoid direct sunlight, where there is high temperature or humidity.
                                    Close the lid after use</div>
                            </div>
                        )}
                        {activeTab === 1 && (
                            <div className="">

                            </div>
                        )}
                        {activeTab === 2 && (
                            <div>
                                <div>
                                    Regardless of which exfoliant you choose, it is important that you use it after cleansing and
                                    toning. Other products in your routine, such as a serum and a day or night cream, should be
                                    applied after your exfoliant, starting from thinnest to thickest texture. An occasional-use
                                    rinse-off BHA peel should be applied to cleansed skin and rinsed after several minutes.
                                    Pat skin dry and follow with the rest of your routine. Please note you should not use the
                                    rinse-off peel on the same day as your other leave-on exfoliants.</div>
                                <div>Tips to achieve the best results with a BHA exfoliant</div>
                                <div>
                                    <ul>
                                        <li>You don’t have to wait until your skin has absorbed the different products in your
                                            routine. The BHA will still work if you apply other products immediately before or after.</li>
                                        <li>Exfoliants can be applied to the skin under and around your eyes, but not underneath your eyebrows.</li>
                                        <li>While daily exfoliation works best for most people, exfoliating every other day may be a better option for you.
                                            Take some time to experiment.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="heading_3 mb-4">Reader's Favorite</div>
                    <div className="">
                        <Slider
                            configs={{
                                sliderPerRow: 4,
                                sliderPerRowMobile: 2.5,
                                allowDrag: true,
                                duration: 400,
                                auto: false,
                                autoDuration: 1000,
                                gap: 40,
                                gapMobile: 10,
                            }}
                        >
                            <div className="justify-center">
                                <div className="col-span-12 md:col-span-4">
                                    <div>
                                        <Link href={ROUTER.ARTICLE}>
                                            <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="article-info py-1 mb-1">
                                            <div className="flex mb-1">
                                                <div className="mr-auto small-text">Drink & Coffee</div>
                                                <div className="small_text">November 8, 2023</div>
                                            </div>
                                            <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                        </div>
                                        <div className="flex">
                                            <div className=""><a className="text-link" href="#">Read more</a></div>
                                            <div className="ml-auto">Share</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center">
                                <div className="col-span-12 md:col-span-4">
                                    <div>
                                        <Link href={ROUTER.ARTICLE}>
                                            <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="article-info py-1 mb-1">
                                            <div className="flex mb-1">
                                                <div className="mr-auto small-text">Drink & Coffee</div>
                                                <div className="small_text">November 8, 2023</div>
                                            </div>
                                            <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                        </div>
                                        <div className="flex">
                                            <div className=""><a className="text-link" href="#">Read more</a></div>
                                            <div className="ml-auto">Share</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center">
                                <div className="col-span-12 md:col-span-4">
                                    <div>
                                        <Link href={ROUTER.ARTICLE}>
                                            <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="article-info py-1 mb-1">
                                            <div className="flex mb-1">
                                                <div className="mr-auto small-text">Drink & Coffee</div>
                                                <div className="small_text">November 8, 2023</div>
                                            </div>
                                            <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                        </div>
                                        <div className="flex">
                                            <div className=""><a className="text-link" href="#">Read more</a></div>
                                            <div className="ml-auto">Share</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center">
                                <div className="col-span-12 md:col-span-4">
                                    <div>
                                        <Link href={ROUTER.ARTICLE}>
                                            <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="article-info py-1 mb-1">
                                            <div className="flex mb-1">
                                                <div className="mr-auto small-text">Drink & Coffee</div>
                                                <div className="small_text">November 8, 2023</div>
                                            </div>
                                            <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                        </div>
                                        <div className="flex">
                                            <div className=""><a className="text-link" href="#">Read more</a></div>
                                            <div className="ml-auto">Share</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center">
                                <div className="col-span-12 md:col-span-4">
                                    <div>
                                        <Link href={ROUTER.ARTICLE}>
                                            <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="article-info py-1 mb-1">
                                            <div className="flex mb-1">
                                                <div className="mr-auto small-text">Drink & Coffee</div>
                                                <div className="small_text">November 8, 2023</div>
                                            </div>
                                            <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                        </div>
                                        <div className="flex">
                                            <div className=""><a className="text-link" href="#">Read more</a></div>
                                            <div className="ml-auto">Share</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center">
                                <div className="col-span-12 md:col-span-4">
                                    <div>
                                        <Link href={ROUTER.ARTICLE}>
                                            <img className="w-full" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="article-info py-1 mb-1">
                                            <div className="flex mb-1">
                                                <div className="mr-auto small-text">Drink & Coffee</div>
                                                <div className="small_text">November 8, 2023</div>
                                            </div>
                                            <div className="medium_text">Top 5 beautiful Coffee Shop in HaNoi</div>
                                        </div>
                                        <div className="flex">
                                            <div className=""><a className="text-link" href="#">Read more</a></div>
                                            <div className="ml-auto">Share</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testreview;