import Link from 'next/link'
import { ROUTER } from "../utils/constants";
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
        router.push(ROUTER.SEARCH + '?keyword=' + keywordType);
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
                            {/*    <img className="icon-ssm" src="./img/icon/Search.svg" alt="smile" loading="lazy"/>*/}
                            {/*</div>*/}
                            <div className="my-search-bar">
                                <input
                                    className="w-full pr-1 py-1 focus-visible:outline-none focus:border-b dark:focus:border-white focus:border-333 border-b border-ccc border-solid"
                                    placeholder="Enter any word and hit enter"
                                    onChange={(e) => { setKeywordType(e.target.value) }}
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
                    <div className="md:grid md:grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="col-span-8">
                            {/*Ingredient result*/}

                            {(results || []).map((result, index) => {
                                if (result.table_name === 'ingredient') {
                                    return (
                                        <Link
                                            href={'/ingredient' + result.slug}
                                            className="border-solid border-b border-ccc !border-999"
                                        >
                                            <div className="border-solid border-ccc !border-999 border p-4 mb-6">
                                                <div className="mb-1 small_text">Skincare Ingredient</div>
                                                <div className="heading_5 mb-3">{result.title}</div>
                                                <div className="">

                                                    <div className="body_text">Publish date: 10/02/2024</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                                return (
                                    <Link
                                        href={'/article/' + result.slug}
                                        className="block search-result border-solid border-b border-ccc !border-999 py-4"
                                        key={index}
                                    >
                                        <div className="grid grid-cols-8 gap-4">
                                            <div className="md:col-span-2 col-span-3">
                                                <img className="w-full" src={BASE_URL + '/storage/' + result?.featured_img} alt="smile" loading="lazy" />
                                            </div>
                                            <div className="md:col-span-6 col-span-5 flex justify-between flex-col">
                                                <div>
                                                    <div className="small_text mb-1">Drink & Coffee</div>
                                                    <div className="heading_5 my-1">{result.title}</div>
                                                    <div className="flex mb-1">

                                                        <div className="flex ml-3">
                                                            <div>{result.estimate_time}</div>
                                                        </div>
                                                    </div>
                                                    <div className="search-result-content mb-2 truncate">
                                                        {result.summary}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="ml-auto w-fit text-link">
                                                        <Link href={'/article/' + result.slug}>
                                                            Read more
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                            {results?.length == 0 && (
                                <div className="text-center p-4 dark:color-black dark:bg-333 bg-primary my-4">
                                    "Sorry, but nothing matched your search terms. Please try again with some different keywords."
                                </div>
                            )}
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
