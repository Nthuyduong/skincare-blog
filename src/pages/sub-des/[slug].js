import React, { useState, useEffect } from "react";
import { getCategoryByIdApi } from "@services/categories";
import { fetchBlogPostsByCategoryApi, fetchPopularBlogPostsApi } from "@services/blog";
import { BASE_URL } from "@utils/apiUtils";
import Link from "next/link";
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("@components/common/slider"), { ssr: false });
import SkeletonImage from "@components/common/loading/skeletonImage";

const SORT = [
    {
        key: 'publish_date:desc',
        label: 'Date: Newest to Oldest'
    },
    {
        key: 'publish_date:asc',
        label: 'Date: Oldest to Newest'
    },
    {
        key: 'title:asc',
        label: 'Title: A to Z'
    },
    {
        key: 'title:desc',
        label: 'Title: Z to A'
    }
]

const Sub_destination = ({ categoryProps, postsProps, isCsr, slug, page }) => {

    const router = useRouter();

    const [category, setCategory] = useState(categoryProps);
    const [posts, setPosts] = useState(postsProps);
    const [postsCol, setPostsCol] = useState([]);
    const [populars, setPopulars] = useState([]);
    const [sort, setSort] = useState('');
    const [loading, setLoading] = useState(false);

    // button sort
    const [show, setShow] = useState(false);
    const toggleSort = () => {
        setShow(!show);
    };

    useEffect(() => {
        fetchPopular();
        window.addEventListener('scroll', () => {
            setShow(false);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setShow(false);
            });
        }
    }, []);

    const fetchPopular = async () => {
        const res = await fetchPopularBlogPostsApi();
        setPopulars(res);
    }

    useEffect(() => {
        if (isCsr) {
            fetchDataCsr();
        }
    }, [router.asPath]);

    useEffect(() => {
        const col = [[], [], [], []];
        let check = 0;
        for (let i = 0; i < posts.length; i++) {
            col[check].push(posts[i]);
            check++;
            if (check == 4) {
                check = 0;
            }
        }
        setPostsCol(col);
    }, [posts]);

    useEffect(() => {
        if (sort) {
            fetchPost(page);
        }
    }, [sort]);

    const fetchPost = async (page) => {
        setLoading(true);
        const res = await fetchBlogPostsByCategoryApi(slug, page, 10, sort.key);
        setPosts(res?.results || []);
        setLoading(false);
    }

    const handleSort = (key) => {
        setSort(key);
        setShow(false);
    }

    const fetchDataCsr = async () => {
        const res = await Promise.all([
            getCategoryByIdApi(slug),
            fetchBlogPostsByCategoryApi(slug)
            // fetchBlogPostsApi(page)
        ]);
        setCategory(res[0]?.data || {});
        setPosts(res[1]?.results || []);
    }

    const getImagePreview = (url) => {
        if (url) {
            return BASE_URL + '/storage/desktop/' + url;
        }
        return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
    }

    return (
        <div className="sub-des-page">
            <div className="sub-des-inner">
                {/* <div className="bg-tertiary">
                    {populars.length > 0 && (
                        <Slider
                            configs={{
                                sliderPerRow: 1.2,
                                sliderPerRowMobile: 1,
                                allowDrag: true,
                                duration: 500,
                                auto: true,
                                autoDuration: 3000,
                                gap: 0,
                                gapMobile: 10,
                                navigator: false,
                                paginate: false,
                                process: false,
                            }}
                        >
                            {populars.map((post, index) => (
                                <div className="relative title-page overflow-hidden pt-6" key={index}>
                                    <div className="slider-text-banner absolute heading_1 z-10 pt-5 l-0">
                                        Be Confident, Be <br/> Bold and Be You
                                    </div>
                                    <div className="slider-container">
                                        <div className="slider-img">
                                            {post.banner_img ? (
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={BASE_URL + '/storage/' + post?.banner_img}
                                                    alt="smile"
                                                    loading="lazy"
                                                    height={200}
                                                    width={400}
                                                />
                                            ) : (
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={BASE_URL + '/storage/' + category?.featured_img}
                                                    alt="smile"
                                                    loading="lazy"
                                                    height={200}
                                                    width={400}
                                                />
                                            )}
                                        </div>
                                        <div className="slider-content-wrp">
                                            <div className="mb-3 flex justify-between">
                                                <div>
                                                    {post.categories.map((category) => { return category.name }).join(' | ')}
                                                </div>
                                                <div className="small_text">About {post?.estimate_time} minutes to read</div>
                                            </div>
                                            <div className="heading_3 mb-2">{post.title}</div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            ))}
                        </Slider>
                    )}
                </div> */}
                <div className="m-w mx-auto my-0">
                    <div className="">
                        {/*<div className="col-span-2 left-menu dark:border-r dark:!border-ccc">*/}
                        {/*    <div className="left-menu-inner">*/}
                        {/*        <ul className="menu-fixed">*/}
                        {/*            <li className="pb-2"><a href="#">All articles</a></li>*/}
                        {/*            <li className="pb-2 my-2"><a href="#">Recently update</a></li>*/}
                        {/*            <li className="pb-2"><a href="#">Most useful</a></li>*/}
                        {/*            <li className="pb-2 my-2"><a href="#">Oldest articles</a></li>*/}
                        {/*            <li className="pb-2"><a href="#">Already read</a></li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="right-all-posts">
                            <div className="md:grid md:grid-cols-12 gap-4 py-5">
                                <div className="col-span-2"></div>
                                <div className="col-span-8 flex gap-5">
                                    <div>
                                        <img className="w-[340px]" src="/img/subdes/subcate.png" alt="smile" loading="lazy" />
                                    </div>
                                    <div class="flex items-center">
                                        <div>
                                            <div className="heading_2 text-black dark:text-white mb-2">{category.name}</div>
                                            <div class="">
                                                <div className="text-black dark:text-white">
                                                    {category.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2"></div>
                            </div>

                            <div className="md:mb-6 mb-4 destination-title border-solid border-y !border-999 border-ccc md:my-5 py-3">
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    {/*breadcrumb*/}
                                    <div className="flex">
                                        <ul className="flex">
                                            <li><a href="#">Home</a></li>

                                            {category.parent && (
                                                <>
                                                    <li className="mx-2">/</li>
                                                    <li><a
                                                        href={`/categories/${category.parent.id}`}>{category.parent.name}</a>
                                                    </li>
                                                </>
                                            )}
                                            <li className="mx-2">/</li>
                                            <li><a href='#'>{category.name}</a></li>
                                        </ul>
                                    </div>
                                    <div className="flex">
                                        <div className="flex justify-center">
                                            {/*<div className="flex des-count pr-3">*/}
                                            {/*    <div className="pr-1">*/}
                                            {/*        <img className="icon-sm" src="./img/icon/grid.svg" alt="#" loading="lazy"></img>*/}
                                            {/*    </div>*/}
                                            {/*    <div>4 Categories</div>*/}
                                            {/*</div>*/}
                                            <div className="flex location-count relative">
                                                <button
                                                    className="flex"
                                                    type="button"
                                                    onClick={toggleSort}
                                                >
                                                    <span className="mr-3">{sort ? sort.label : 'All articles'}</span>
                                                    <img className="icon-ssm dark:hidden" src="/img/icon/sort-bl.svg" alt="smile" loading="lazy" />
                                                    <img className="icon-ssm hidden dark:block" src="/img/icon/sort-wh.svg" alt="smile" loading="lazy" />
                                                </button>
                                                {show && (
                                                    <div className="absolute mt-3 w-max right-0 p-3 top-full border border-solid border-x border-b !border-999 border-ccc dark:bg-black bg-background">
                                                        <div className="sort-menu-inner">
                                                            <ul className="">
                                                                {SORT.map((item, index) => (
                                                                    <li key={index} className="py-1 cursor-pointer" onClick={() => { handleSort(item) }}>{item.label}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="all-post">
                                <div className="grid grid-cols-4 gap-4">
                                    {loading ? (
                                        <>
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                                <SkeletonImage key={index} />
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {postsCol.map((col, index) => (
                                                <div className="grid-col" key={index}>
                                                    {col.map((post, index) => (
                                                        <div className="grid-item border-b border-ccc" key={index}>
                                                            <Link className="" href={`/article/${post.slug}`}>
                                                                <div className="hover-img">
                                                                    <div className="img-inner">
                                                                        <img
                                                                            className={`w-full object-cover`}
                                                                            src={getImagePreview(post.featured_img)}
                                                                            alt="smile"
                                                                            loading="lazy"
                                                                            height={200}
                                                                            width={200}
                                                                        />
                                                                    </div>

                                                                </div>
                                                            </Link>

                                                            <div className="py-1 mb-5">
                                                                {/*<div className="mb-1">*/}
                                                                {/*    /!*<div*!/*/}
                                                                {/*    /!*    className="small_text">{formatDate(post.publish_date)}*!/*/}
                                                                {/*    /!*</div>*!/*/}
                                                                {/*</div>*/}
                                                                <div>
                                                                    <div className="small_text">Subcategory name</div>
                                                                </div>
                                                                <div className="medium_text my-1">
                                                                    <Link href={`/article/${post.slug}`}>{post.title}</Link>
                                                                </div>
                                                                <div>
                                                                    <div className="small_text">About {post?.estimate_time} minutes to read</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Sub_destination.getInitialProps = async ({ query }) => {
    const { slug, page } = query;

    if (typeof window != 'undefined') {
        return {
            categoryProps: {},
            postsProps: [],
            isCsr: true,
            slug,
            page: page ?? 1,
        }
    }
    try {
        const res = await Promise.all([
            fetch(`${BASE_URL}/api/categories/${slug}`, { cache: 'force-cache' }),
            fetch(`${BASE_URL}/api/blogs/category/${slug}?page=${page ?? 1}`)
            // fetch(`${BASE_URL}/api/blogs?page=${page ?? 1}`)
        ])
        const resData = await Promise.all(res.map(r => r.json()));
        const category = resData[0]?.data || {};
        const posts = resData[1]?.data?.results || [];
        return {
            categoryProps: category ?? {},
            postsProps: posts,
            isCsr: false,
            slug,
            page: page ?? 1,
        }
    } catch (e) {
        return {
            categoryProps: {},
            postsProps: [],
            isCsr: true,
            slug,
            page: page ?? 1,
        }
    }

}

export default Sub_destination;