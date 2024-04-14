import React, {useState, useEffect} from "react";
import {getCategoryByIdApi} from "@services/categories";
import {fetchBlogPostsByCategoryApi, fetchBlogPostsApi} from "@services/blog";
import {formatDate} from "@utils/format";
import {BASE_URL} from "@utils/apiUtils";
import Link from "next/link";
import {useRouter} from 'next/router';

const Sub_destination = ({categoryProps, postsProps, isCsr, slug, page}) => {

    const router = useRouter();

    const [category, setCategory] = useState(categoryProps);
    const [posts, setPosts] = useState(postsProps);
    const [postsCol, setPostsCol] = useState([]);

    useEffect(() => {
        if (isCsr) {
            fetchDataCsr();
        }
    }, [router.asPath]);

    useEffect(() => {
        const col = [[], [], [], []];
        let check = 0;
        for (let i = 0; i < posts.length; i ++) {
            col[check].push(posts[i]);
            check ++;
            if (check == 4) {
                check = 0;
            }
        }
        setPostsCol(col);
    }, [posts]);

    const fetchDataCsr = async () => {
        const res = await Promise.all([
            getCategoryByIdApi(slug),
            // fetchBlogPostsByCategoryApi(slug)
            fetchBlogPostsApi(page)
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
                        <div className="col-span-12 right-all-posts">
                            <div className="relative title-page overflow-hidden">
                                <img
                                    className="absolute w-100 w-auto h-full md:h-auto md:w-full"
                                    src="../img/subdes/sub-banner.png"
                                    alt="smile"
                                    loading="lazy"
                                />
                                <div className="relative pl-7 py-4 md:py-8">
                                    <div className="heading !text-black mb-2">{category.name}</div>
                                    <div className="!text-black">{category.description}</div>
                                </div>
                            </div>
                            <div className="destination-title border-solid border-y border-ccc md:my-5 py-3">
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
                                            <div className="flex location-count">
                                                {/* <div className="pr-1">
                                                    <img className="icon-sm" src="./img/icon/book-open.svg" alt="#"
                                                         loading="lazy"></img>
                                                </div> */}
                                                <div>50 Articles</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="all-post">
                                <div className="grid grid-cols-4 gap-4">
                                    {postsCol.map((col, index) => (
                                        <div className="grid-col" key={index}>
                                            {col.map((post, index) => (
                                                <div className="grid-item border-b border-ccc" key={index}>
                                                    <img
                                                        className={`w-full object-cover`}
                                                        src={getImagePreview(post.featured_img)}
                                                        alt="smile"
                                                        loading="lazy"
                                                        height={200}
                                                        width={200}
                                                    />
                                                    
                                                    <div className="py-1 mb-1">
                                                        {/*<div className="mb-1">*/}
                                                        {/*    /!*<div*!/*/}
                                                        {/*    /!*    className="small_text">{formatDate(post.publish_date)}*!/*/}
                                                        {/*    /!*</div>*!/*/}
                                                        {/*</div>*/}
                                                        <div className="medium_text">
                                                            <Link href={`/article/${post.slug}`}>{post.title}</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Sub_destination.getInitialProps = async ({query}) => {
    const {slug, page} = query;

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
            fetch(`${BASE_URL}/api/categories/${slug}`, {cache: 'force-cache'}),
            // fetch(`${BASE_URL}/api/blogs/category/${slug}?page=${page ?? 1}`)
            fetch(`${BASE_URL}/api/blogs?page=${page ?? 1}`)
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