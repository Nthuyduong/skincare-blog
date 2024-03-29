import Link from 'next/link'
import {ROUTER} from "../utils/constants";
import { useApp } from "@hooks/useApp";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { BASE_URL } from "@utils/apiUtils";

const Search = () => {

    const router = useRouter();

    useEffect(() => {
        const { keyword } = router.query;
        if (keyword) {
            setKeywordType(keyword);
            handleSearch(keyword);
        }
    }, [router.query]);

    const { handleSearch, setKeyword, loadMore, results, keyword } = useApp();

    const [keywordType, setKeywordType] = useState();

    const handleSearchPage = () => {
        handleSearch(keywordType);
    };

    return (
        <div>
            <div className="m-w mx-auto my-0">
                <div className="heading_1 text-center mb-5 pt-7">Search Results for: {keywordType}</div>
                <div className="grid grid-cols-12">
                    <div className="col-span-3"></div>
                    <div className="col-span-6">
                        <div className="">
                            {/*<div className="flex align-middle mr-2">*/}
                            {/*    <img className="icon-ssm" src="./img/icon/search.svg" alt="smile" loading="lazy"/>*/}
                            {/*</div>*/}
                            <div className="my-search-bar">
                                <input
                                    className="w-full pr-1 py-1 focus-visible:outline-none focus:border-b dark:focus:border-white focus:border-333 border-b border-ccc border-solid"
                                    placeholder="Enter any word and hit enter"
                                    onChange={(e) => {setKeywordType(e.target.value)}}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearchPage()}
                                    value={keywordType}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3"></div>
                </div>
                {/*RESULTS HERE*/}
                <div className="search-result mt-6">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="col-span-8">
                            {/*Ingredient result*/}
                            <div className="border-solid border-b border-ccc !border-999 pb-6">
                                <div className="border-solid border-ccc !border-999 border p-4">
                                    <div className="mb-1">Ingredient</div>
                                    <div className="heading_2 mb-3">Niacinamide</div>
                                    <div className="flex">
                                        <div className="mr-1 border-solid border-r border-ccc !border-999 pr-1">By Nthduong</div>
                                        <div>Publish date: 10/02/2024</div>
                                    </div>
                                </div>
                            </div>
                            {(results || []).map((result, index) => {
                                return (
                                    <div className="search-result border-solid border-b border-ccc !border-999 py-6" key={index}>
                                        <div className="grid grid-cols-8 gap-4">
                                            <div className="col-span-2">
                                                <img className="w-full" src={BASE_URL + '/storage/' + result?.featured_img} alt="smile" loading="lazy"/>
                                            </div>
                                            <div className="col-span-6">
                                                <div className="">Drink & Coffee</div>
                                                <div className="heading_5 my-1">{ result.title }</div>
                                                <div className="flex mb-1">
                                                    <div>By Nthduong</div>
                                                    <div className="flex ml-3">
                                                        <div>{ result.estimate_time }</div>
                                                    </div>
                                                </div>
                                                <div className="search-result-content mb-2 truncate">
                                                    { result.summary }
                                                </div>
                                                <div>
                                                    <div className="ml-auto w-fit">
                                                        <Link href={ROUTER.ARTICLE}>
                                                            Read more
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
