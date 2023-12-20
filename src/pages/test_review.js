import {ROUTER} from "../utils/constants";
import Link from "next/link";
import React, {useRef, useState} from "react";

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
                className={`my-tabs text-center py-2 ${activeTab === index ? 'active' : ''}`}
            >
                {tab.title}
            </div>
        ));
    };

    return (
        <div className="test-review-page">
            <div className="review-banner">
                <div className="relative">
                    <div className="container-fluid banner-left">
                        <div className="grid grid-cols-12">
                            <div className="col-span-5">
                                {/*breadcrumb*/}
                                <div className="mb-3 my-breadcrumb">
                                    <ul className="flex">
                                        <li><a href="#">Home</a></li>
                                        <li className="mx-2">/</li>
                                        <li><a href="#">Tests and Reviews</a></li>
                                        <li className="mx-2">/</li>
                                        <li><a href="#">Paula's Choice 2% BHA liquid exfoliant</a></li>
                                    </ul>
                                </div>
                                <div className="heading_3 mb-2">What does Paula's Choice 2% BHA liquid exfoliant do?</div>
                                <div className="medium_text mb-3">Sharing my skincare journey from the past to the present, along with my routine. I hope it provides helpful insights for you!</div>
                                <div className="small_text">Writen by: Nthduong</div>
                                <div className="small_text">16/01/2024</div>
                                <div className="small_text">About 10 minutes to read</div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-right">
                        <img className="w-full" src="./img/testnreview/t1.png" alt="smile" loading="lazy"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="flex">
                    {renderTabs()}
                </div>
                <div className="mt-4">
                    {activeTab === 0 && (
                        <div className="">

                        </div>
                    )}
                    {activeTab === 1 && (
                        <div className="">

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Testreview;