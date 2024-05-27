import React, { useEffect, useRef, useState } from "react";
import { throttle } from '@utils/common';
import { getBlogBySlugApi } from "@services/blog";
import Link from "next/link";
import { ROUTER } from "../../../utils/constants";
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import { BLOG_STATUS } from "../../../utils/constants";
const Slider = dynamic(() => import("../../../components/common/slider"), { ssr: false });
import { formatDate } from "@utils/format";
import Head from "next/head";
import { usePost } from "@hooks/usePost";
import { BASE_URL } from "../../../utils/apiUtils";
import { fetchRelatedBlogPostsApi } from "@services/blog";

const ArticleDetail = ({ blogProps, isCrs, slug }) => {

    const { updateBlogViewCount } = usePost();
    
    const router = useRouter();

    const refContent = useRef(null);
    const refTable = useRef(null);
    const refProcess = useRef(null);
    const [blog, setBlog] = useState(blogProps);
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => {
        if (isCrs) {
            fetchDataCsr();
        }
    }, [router.asPath]);

    const fetchDataCsr = async () => {
        const res = await getBlogBySlugApi(slug);
        setBlog(res?.data || {});
    }

    const fetchRelatedBlogs = async () => {
        const res = await fetchRelatedBlogPostsApi(blog.id);
        setRelatedBlogs(res?.data || []);
    }

    useEffect(() => {
        if (blog?.status == BLOG_STATUS.HIDDEN) {
            router.push('/404');
        }
        function handleCatalog() {
            if (refContent.current) {
                const headings = refContent.current.querySelectorAll("h2");
                console.log(headings);
                const list = refTable.current;
                list.innerHTML = '';
                if(list) {
                    if (headings.length === 0) {
                        if (list.closest('.catalog')) {
                            list.closest('.catalog').style.display = 'none';
                        }
                    } else {
                        if (list.closest('.catalog')) {
                            list.closest('.catalog').style.display = 'block';
                        }
                    }
                    headings.forEach((heading) => {
                        heading.id = heading.textContent.replace(/\s+/g, '-').toLowerCase();
                        const li = document.createElement("li");
                        li.classList.add("cursor-pointer");
                        li.textContent = heading.textContent;
                        list.appendChild(li);
                        li.addEventListener("click", () => {
                            heading.scrollIntoView({ behavior: "smooth" });
                        });
                    });
                }
            }
        }
        
        function functionScoll() {
            const handleScroll = throttle(() => {
                if(refContent.current) {
                    let process = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
                    if (process < 0) {
                        process = 0;
                    } else if (process > 100) {
                        process = 100;
                    }
                    if (process <= 0) {
                        refProcess.current.style.display = 'none';
                    } else {
                        refProcess.current.style.display = 'block';
                        refProcess.current.style.width = `${process}%`;
                        refProcess.current.style.height = '0.125rem';
                    }
                }
            }, 1);
            window.addEventListener('scroll', handleScroll)
        }
        handleCatalog();
        functionScoll();
        if (blog?.id) {
            handleUpdateViewCount();
            fetchRelatedBlogs();
        }
        return () => {
            handleCatalog();
            functionScoll();
        }
    }, [blog]);

    const handleUpdateViewCount = async () => {
        await updateBlogViewCount(blog.id);
    }

    return (
        <>
            <Head>
                <title>{blog?.meta_title ?? 'Article'}</title>
                <meta name="description" content={blog?.meta_description} />
            </Head>
            <div className="article-single-post">
                <div className="process-bar w-full">
                    <div ref={refProcess} className='process-content'></div>
                </div>
                <div className="test-review-page w-full">
                    {/*website banner*/}
                    <div className="md:block hidden review-banner w-full">
                        <div className="relative">
                            <div className="banner-left dark:text-black m-w mx-auto px-3">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-5">
                                        {/*breadcrumb*/}
                                        <div className="mb-3 my-breadcrumb">
                                            <ul className="flex">
                                                <li><a href="#">Home</a></li>
                                                {blog?.categories?.[0]?.parent && (
                                                    <>
                                                        <li className="mx-1">/</li>
                                                        <li><a href={`/categories/${blog?.categories?.[0]?.parent?.slug}`}>{blog?.categories?.[0]?.parent?.name}</a></li>
                                                    </>
                                                )}
                                                <li className="mx-1">/</li>
                                                {blog?.categories?.[0] && (
                                                    <>
                                                        <li><a href={`/categories/${blog?.categories?.[0]?.slug}`}>{blog?.categories?.[0]?.name}</a></li>
                                                    </>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="heading_3 mb-3 cursor-text-wrp">{blog?.title}</div>
                                        <div className="mb-4 cursor-text-wrp">{blog?.excerpt}</div>
                                        <div className="small_text mb-1 cursor-text-wrp">Writen by: {blog?.author}</div>
                                        <div className="small_text cursor-text-wrp">About {blog?.estimate_time} minutes to read</div>

                                        <div className="medium_text mt-4">Is this article helpful?</div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-right">
                                <img className="w-full object-cover" src={BASE_URL + '/storage/' + blog?.banner_img} alt="smile" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    {/*Mobile banner*/}
                    <div className="md:hidden block">
                        <div className="banner-top p-4 bg-primary text-black">
                            <div className="">
                                {/*breadcrumb*/}
                                <div className="mb-3 my-breadcrumb">
                                    <ul className="flex">
                                        <li><a href="#">Home</a></li>
                                        {blog?.categories?.[0]?.parent && (
                                            <>
                                                <li className="mx-2">/</li>
                                                <li><a href={`/categories/${blog?.categories?.[0]?.parent?.slug}`}>{blog?.categories?.[0]?.parent?.name}</a></li>
                                            </>
                                        )}
                                        <li className="mx-2">/</li>
                                        {blog?.categories?.[0] && (
                                            <>
                                                <li><a href={`/categories/${blog?.categories?.[0]?.slug}`}>{blog?.categories?.[0]?.name}</a></li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="heading_3 mb-2">{blog?.title}</div>
                                <div className="medium_text mb-4">{blog?.excerpt}</div>
                                <div className="small_text cursor-text-wrp">Writen by: {blog?.author}</div>
                                <div className="small_text my-1 cursor-text-wrp">Publish date: {blog ? formatDate(blog.publish_date) : ''}</div>
                                <div className="small_text cursor-text-wrp">About 10 minutes to read</div>
                                {/* <div className="medium_text mt-4">Is this article helpful?</div> */}
                            </div>
                        </div>
                        <div className="banner-bottom">
                            <img className="w-full" src={BASE_URL + '/storage/desktop/' + blog?.banner_img} alt="smile" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-3 m-w mx-auto w-full my-0">
                    <div className="article-out">
                        <div className="article-summary mb-4">
                            <div className="">{blog?.summary}</div>
                        </div>
                        {/*menu*/}
                        <div className="catalog w-full my-3">
                            <div className="list dark:!border-999">
                                <div className="list-title heading_4 mb-3 cursor-text-wrp">In this post</div>
                                <div className="all-list">
                                    {/* table of content */}
                                    <ul className="list-here" ref={refTable} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-article w-full">
                    <div
                        className="main-article w-full cursor-text-wrp"
                        ref={refContent}
                        dangerouslySetInnerHTML={{
                            __html: blog?.detail?.content
                        }}
                    />
                    <div className="w-full flex justify-center items-center">
                        <div className="px-3 w-full mx-4 m-w mx-auto my-0 helpful-rate mt-6">
                            {/* <div className="flex w-full pt-3 border-solid border-t border-ccc"> */}
                                {/* <div className="medium_text mr-3">
                                    <a href="#">Was this helpful?</a>
                                </div>
                                <div className="flex items-center">
                                    <div className="thumb mr-3">
                                        <img className="icon-ssm" src="/img/icon/thumbs-up.svg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div className="thumb">
                                        <img className="icon-ssm" src="/img/icon/thumbs-down.svg" alt="smile" loading="lazy"/>
                                    </div>
                                </div> */}
                            {/* </div> */}
                            {/*Suggest more article*/}
                            <div className="suggest-article py-7">
                                <div className="heading_3 mb-4">Related Articles</div>
                                <div className="">
                                    <Slider
                                        configs={{
                                            sliderPerRow: 4,
                                            sliderPerRowMobile: 2.5,
                                            allowDrag: true,
                                            duration: 400,
                                            auto: false,
                                            autoDuration: 1000,
                                            gap: 30,
                                            gapMobile: 10,
                                        }}
                                    >
                                        
                                        {relatedBlogs.map((blog, index) => (
                                            <div className="justify-center" key={index}>
                                                <div className="col-span-12 md:col-span-4">
                                                    <div className="hover-img">
                                                        <div className="img-inner">
                                                            <Link href={"/article/" + blog.slug}>
                                                                <img className="set-img" src={BASE_URL + '/storage/' + blog?.featured_img} alt="smile" loading="lazy"/>
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <div className="article-info py-2 mb-1 md:!border-b md:!border-ccc border-b-0">
                                                                <div className="md:flex mb-1">
                                                                    <div className="mr-auto small_text">{ blog.categories.map((category) => {return category.name}).join(' | ') }</div>
                                                                    {/* <div className="small_text">{formatDate(blog.publish_date)}</div> */}
                                                                </div>
                                                                <div className="medium_text">{ blog.title }</div>
                                                            </div>
                                                            <div className="md:flex hidden">
                                                                <div className=""><Link className="text-link" href={"/article/" + blog.slug}>Read more</Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            {/*Comment section*/}
                            {/*<div className="comment py-7">*/}
                            {/*    <div className="flex">*/}
                            {/*        <div className="heading_2 mb-4">Comments</div>*/}
                            {/*        <div className="ml-auto">*/}
                            {/*            <select className="cmt-select dark:border dark:border-white">*/}
                            {/*                <option value="">Newest comments</option>*/}
                            {/*                <option value="">Oldest comments</option>*/}
                            {/*            </select>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="comment-main">*/}
                            {/*        <div className="flex">*/}
                            {/*            <div className="flex">*/}
                            {/*                <div className="mr-2">*/}
                            {/*                    <img className="w-full rounded-3xl" src="./img/article/avata.jpg" alt="smile" loading="lazy"/>*/}
                            {/*                </div>*/}
                            {/*                <div>*/}
                            {/*                    <div className="medium_text">Nthuyduong</div>*/}
                            {/*                    <div>3 days ago</div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="flex ml-auto">*/}
                            {/*                <div className="mr-2">10</div>*/}
                            {/*                <div>heart</div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="mt-2">*/}
                            {/*            Baking time will vary if you change the pan size. Every oven is different so I can’t say*/}
                            {/*            for certain what you’ll need to adjust it to. Be  sure to check on the cakes while they are baking.*/}
                            {/*        </div>*/}
                            {/*        <div className="mt-3"><a className="text-link" href="#">Reply</a></div>*/}
                            {/*    </div>*/}
                            {/*    <div className="comment-border"></div>*/}
                            {/*    <div className="comment-main">*/}
                            {/*        <div className="flex">*/}
                            {/*            <div className="flex">*/}
                            {/*                <div className="mr-2">*/}
                            {/*                    <img className="w-full rounded-3xl" src="./img/article/avata.jpg" alt="smile" loading="lazy"/>*/}
                            {/*                </div>*/}
                            {/*                <div>*/}
                            {/*                    <div className="medium_text">Nthuyduong</div>*/}
                            {/*                    <div>3 days ago</div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="flex ml-auto">*/}
                            {/*                <div className="mr-2">10</div>*/}
                            {/*                <div>heart</div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="mt-2">*/}
                            {/*            Baking time will vary if you change the pan size. Every oven is different so I can’t say*/}
                            {/*            for certain what you’ll need to adjust it to. Be  sure to check on the cakes while they are baking.*/}
                            {/*        </div>*/}
                            {/*        <div className="mt-3"><a className="text-link" href="#">Reply</a></div>*/}
                            {/*    </div>*/}
                            {/*    <div className="comment-border"></div>*/}
                            {/*    <div className="comment-main">*/}
                            {/*        <div className="flex">*/}
                            {/*            <div className="flex">*/}
                            {/*                <div className="mr-2">*/}
                            {/*                    <img className="w-full rounded-3xl" src="./img/article/avata.jpg" alt="smile" loading="lazy"/>*/}
                            {/*                </div>*/}
                            {/*                <div>*/}
                            {/*                    <div className="medium_text">Nthuyduong</div>*/}
                            {/*                    <div>3 days ago</div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="flex ml-auto">*/}
                            {/*                <div className="mr-2">10</div>*/}
                            {/*                <div>heart</div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="mt-2">*/}
                            {/*            Baking time will vary if you change the pan size. Every oven is different so I can’t say*/}
                            {/*            for certain what you’ll need to adjust it to. Be  sure to check on the cakes while they are baking.*/}
                            {/*        </div>*/}
                            {/*        <div className="mt-3"><a className="text-link" href="#">Reply</a></div>*/}
                            {/*    </div>*/}
                            {/*    <div className="comment-border"></div>*/}
                            {/*    <div className="comment-main">*/}
                            {/*        <div className="flex">*/}
                            {/*            <div className="flex">*/}
                            {/*                <div className="mr-2">*/}
                            {/*                    <img className="w-full rounded-3xl" src="./img/article/avata.jpg" alt="smile" loading="lazy"/>*/}
                            {/*                </div>*/}
                            {/*                <div>*/}
                            {/*                    <div className="medium_text">Nthuyduong</div>*/}
                            {/*                    <div className="">3 days ago</div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="flex ml-auto">*/}
                            {/*                <div className="mr-2">10</div>*/}
                            {/*                <div>heart</div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="mt-2">*/}
                            {/*            Baking time will vary if you change the pan size. Every oven is different so I can’t say*/}
                            {/*            for certain what you’ll need to adjust it to. Be  sure to check on the cakes while they are baking.*/}
                            {/*        </div>*/}
                            {/*        <div className="mt-3"><a className="text-link" href="#">Reply</a></div>*/}
                            {/*    </div>*/}
                            {/*    /!*paginate*!/*/}
                            {/*    <div className="mt-5 paginate flex w-full justify-center">*/}
                            {/*        <a>*/}
                            {/*            Previous*/}
                            {/*            <span></span>*/}
                            {/*        </a>*/}
                            {/*        <div className="mx-2 pagi-item p-3 rounded-full flex">1</div>*/}
                            {/*        <div className="pagi-item p-3 rounded-full flex">2</div>*/}
                            {/*        <div className="mx-2 pagi-item p-3 rounded-full flex">3</div>*/}
                            {/*        <a>*/}
                            {/*            Next*/}
                            {/*            <span></span>*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*Leave a comment*/}
                            {/*<div className="leavecmt">*/}
                            {/*    <div className="mb-5 text-center">*/}
                            {/*        <div className="heading_2 mb-2">Leave a comment</div>*/}
                            {/*        <div>Your email address will not be published. Required fields are marked *</div>*/}
                            {/*    </div>*/}
                            {/*    <div className="">*/}
                            {/*        <div className="grid grid-cols-12 gap-3">*/}
                            {/*            <div className="md:col-span-6 col-span-12">*/}
                            {/*                <div className="my-input md:mb-3 dark:border-white">*/}
                            {/*                    <input className="w-full p-1" placeholder="Your name"/>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="md:col-span-6 col-span-12">*/}
                            {/*                <div className="my-input mb-3 dark:border-white">*/}
                            {/*                    <input className="w-full p-1" placeholder="Email address *"/>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="my-input mb-3 user-cmt dark:border-white">*/}
                            {/*            <textarea rows="5" className="w-full p-1" placeholder="Message *"></textarea>*/}
                            {/*        </div>*/}
                            {/*        <div className="flex justify-center dark:border dark:border-white">*/}
                            {/*            <button className="w-3/12 my-btn-pr" type="submit">Subscribe</button>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

ArticleDetail.getInitialProps = async({ req, res, query }) => {
    const { slug } = query;
    if (typeof window != 'undefined') {
        return {
            blogProps: {},
            isCrs: true,
            slug,
        }
    }
    try {
        const response = await fetch(`${BASE_URL}/api/blogs/slug/${slug}`);
        const resData = await response.json();

        return {
            blogProps: resData?.data || {},
            isCrs: false,
            slug,
        }
    } catch (error) {
        return {
            blogProps: {},
            isCrs: true,
            slug,
        }
    }
}

export default ArticleDetail;