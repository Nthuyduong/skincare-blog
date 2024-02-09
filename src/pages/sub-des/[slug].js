import React from "react";
import { getCategoryByIdApi } from "@services/categories";
import { fetchBlogPostsApi } from "@services/blog";
import { formatDate } from "@utils/format";
import { BASE_URL } from "@utils/apiUtils";
import Link from "next/link";

const Sub_destination = ({ category, posts }) => {

    const getImagePreview = (url) => {
        if (url) {
            return BASE_URL + '/storage/desktop/' + url;
        }
        return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
    }

    return (
        <div className="sub-des-page">
            <div className="sub-des-inner">
                <div className="container-fluid m-w mx-auto my-0">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-2 left-menu dark:border-r dark:!border-ccc">
                            <div className="left-menu-inner">
                                <ul className="menu-fixed">
                                    <li className="pb-2"><a href="#">All articles</a></li>
                                    <li className="pb-2 my-2"><a href="#">Recently update</a></li>
                                    <li className="pb-2"><a href="#">Most useful</a></li>
                                    <li className="pb-2 my-2"><a href="#">Oldest articles</a></li>
                                    <li className="pb-2"><a href="#">Already read</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-10 right-all-posts">
                            <div className="relative title-page">
                                <img className="w-100" src="../img/subdes/sub-banner.png" alt="smile" loading="lazy"/>
                                <div className="absolute main-title">
                                    <div className="heading !text-black mb-2">{category.name}</div>
                                    <div className="!text-black">{category.description}</div>
                                </div>
                            </div>
                            <div className="destination-title border-y border-ccc my-5 py-3">
                                <div className="flex justify-center">
                                    {/*breadcrumb*/}
                                    <div className="flex self-center">
                                        <ul className="flex">
                                            <li><a href="#">Home</a></li>
                                            
                                            {category.parent && (
                                                <>
                                                    <li className="mx-2">/</li>
                                                    <li><a href={`/categories/${category.parent.id}`}>{category.parent.name}</a></li>
                                                </>
                                            )}
                                            <li className="mx-2">/</li>
                                            <li><a href='#'>{category.name}</a></li>
                                        </ul>
                                    </div>
                                    <div className="self-center flex ml-auto">
                                        <div className="flex justify-center">
                                            {/*<div className="flex des-count pr-3">*/}
                                            {/*    <div className="pr-1">*/}
                                            {/*        <img className="icon-sm" src="./img/icon/grid.svg" alt="#" loading="lazy"></img>*/}
                                            {/*    </div>*/}
                                            {/*    <div>4 Categories</div>*/}
                                            {/*</div>*/}
                                            <div className="flex location-count pl-3">
                                                <div className="pr-1">
                                                    <img className="icon-sm" src="./img/icon/book-open.svg" alt="#" loading="lazy"></img>
                                                </div>
                                                <div>50 Articles</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="all-post">
                                <div className="grid grid-cols-12 gap-5">
                                    {posts.map((post, index) => (
                                        <div className="col-span-6 md:col-span-3" key={index}>
                                            <img className="w-full" src={getImagePreview(post.featured_img)} alt="smile" loading="lazy"/>
                                            <div>
                                                <div className="py-1 mb-1">
                                                    <div className="mb-1">
                                                        <div className="small_text">{formatDate(post.publish_date)}</div>
                                                    </div>
                                                    <div className="medium_text">
                                                        <Link href={`/article/${post.slug}`}>{post.title}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const { slug, page } = query;

    const res = await Promise.all([
        getCategoryByIdApi(slug),
        fetchBlogPostsApi(page ?? 1)
    ])
    const category = res[0]?.data || {};
    const posts = res[1]?.results || [];
    const pagination = res[1]?.paginate || {};
    return {
        props: {
            category,
            posts,
        }
    }
}

export default Sub_destination;