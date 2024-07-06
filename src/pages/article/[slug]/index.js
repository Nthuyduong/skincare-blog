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
import { fetchCommentByBlogIdApi, createCommentApi, createCommentGuestApi } from "@services/comment";
import Pagination from "@components/common/pagination";
import { useApp } from '@hooks/useApp';
import { getGetLoginUrl } from "@services/auth";
import { prettyDate } from "../../../utils/format";
import { useModal } from '@hooks/modal';
import { useClickOutside } from "@hooks/dom";

const ArticleDetail = ({ blogProps, isCrs, slug }) => {

    const { getUserInfo, user } = useApp();

    const {
        hide,
        show,
    } = useModal();

    

    const { updateBlogViewCount } = usePost();

    const router = useRouter();

    const refContent = useRef(null);
    const refTable = useRef(null);
    const refProcess = useRef(null);
    const [blog, setBlog] = useState(blogProps);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('created_at:desc');
    const [paginate, setPaginate] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // button sort
    const [showShare, setShowShare] = useState(false);
    const toggleShare = () => {
        setShowShare(!showShare);
    };


    const refShare = useClickOutside(() => {
        setShowShare(false);
    });

    const [comment, setComment] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        if (isCrs) {
            fetchDataCsr();
        }
    }, [router.asPath]);

    const fetchComments = async () => {
        const res = await fetchCommentByBlogIdApi(blog.id, page, sort);
        if (res?.status) {
            setComments(res?.data?.results || []);
            setPaginate(res?.data?.paginate || {});
        }
    }
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

                if (list) {
                    list.innerHTML = '';

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
                if (refContent.current) {
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
            fetchComments();
        }
        return () => {
            handleCatalog();
            functionScoll();
        }
    }, [blog, isModalOpen]);

    const handleUpdateViewCount = async () => {
        await updateBlogViewCount(blog.id);
    }

    const handleLogin = async (provider) => {
        const res = await getGetLoginUrl(provider);

        if (res.status) {
            const currentUrl = window.location.href;
            sessionStorage.setItem('redirectUrl', currentUrl);
            window.location.href = res.url;
        }
    }

    const handleSendComment = async () => {
        if (!comment) {
            return;
        }
        if (user) {
            const res = await createCommentApi({
                blog_id: blog.id,
                content: comment
            });
            if (res?.status) {
                setComment('');
                setComments([res?.data, ...comments]);
            }
            return;
        } else {
            const res = await createCommentGuestApi({
                blog_id: blog.id,
                content: comment,
                name: name,
                email: email
            });
            if (res?.status) {
                setComment('');
                setComments([res?.data, ...comments]);
            }
        }
    }

    // display and hide table of content
    const [appear, setAppear] = useState(false);

    const controlBtn = () => {
        if (window.scrollY > 300) {
            setAppear(true)
        } else {
            setAppear(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlBtn)
        return () => {
            window.removeEventListener('scroll', controlBtn)
        }
    }, [])

    const handleShare = (type) => {
        // let url = window.location.href;
        let url = 'https://radiance-aura.blog/article/' + blog.slug;
        switch (type) {
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?url=${url}`;
                break;
            default:
                navigator.clipboard.writeText(url);
                break;
        }
        if (type) {
            window.open(url, '_blank');
        }
    }

    return (
        <>
            <Head>
                <title>{blog?.meta_title ?? 'Article'}</title>
                <meta name="description" content={blog?.meta_description} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.summary} />
                <meta name="twitter:image" content={blog.featured_img} />
            </Head>
            <div className="article-single-post">
                <div className="process-bar w-full">
                    <div ref={refProcess} className='process-content'></div>
                </div>
                <div className="test-review-page w-full">
                    {/*website banner*/}
                    <div className="md:block hidden review-banner bg-primary w-full">
                        <div className="relative">
                            <div className="banner-left dark:text-black m-w mx-auto">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-5">
                                        {/*breadcrumb*/}
                                        <div className="md:mb-5 mb-3 my-breadcrumb">
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
                                        <div className="md:mb-5 mb-4 cursor-text-wrp">{blog?.excerpt}</div>
                                        <div className="small_text mb-1 cursor-text-wrp">Writen by: {blog?.author}</div>
                                        <div className="small_text cursor-text-wrp">About {blog?.estimate_time} minutes to read</div>

                                        {/* <div className="medium_text mt-4">Is this article helpful?</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="banner-right">
                                <picture>
                                    <source srcSet={BASE_URL + '/storage/desktop/' + blog?.banner_img} media="(min-width: 1024px)" />
                                    <source srcSet={BASE_URL + '/storage/tablet/' + blog?.banner_img} media="(min-width: 767px)" />
                                    <img src={BASE_URL + '/storage/mobile/' + blog?.banner_img} alt={blog.title} loading="eager" height={500} width={500} />
                                </picture>
                                {/* <img className="w-full object-cover" src={BASE_URL + '/storage/desktop/' + blog?.banner_img} alt="smile" loading="lazy" /> */}
                            </div>
                        </div>
                    </div>
                    {/*Mobile banner*/}
                    <div className="md:hidden block">
                        <div className="banner-top py-4 bg-primary text-black">
                            <div className="m-w m-auto ">
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
                            <picture>
                                <source srcSet={BASE_URL + '/storage/desktop/' + blog?.banner_img} media="(min-width: 1024px)" />
                                <source srcSet={BASE_URL + '/storage/tablet/' + blog?.banner_img} media="(min-width: 767px)" />
                                <img className="w-full" src={BASE_URL + '/storage/mobile/' + blog?.banner_img} alt={blog.title} loading="eager" height={500} width={500} />
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="container-fluid m-w mx-auto w-full my-0">
                    <div className="article-out">
                        <div className="article-summary mb-4">
                            <div className="">{blog?.summary}</div>
                        </div>
                        {/*menu*/}

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
                    {/* TABLE OF CONTENT TEST */}
                    <div className={`toc-wrapper ${appear && 'toc-show'}`}>
                        <div
                            onClick={toggleModal}
                            className={`toc-btn mb-5 ${isModalOpen ? 'Close' : 'Open'}`}>
                            <div className="collapsed body_text">Table of contents</div>
                        </div>
                        {isModalOpen && (
                            <div className="modal-bg">
                                <div className="toc-content">
                                    <div className="catalog my-3">
                                        <div className="list">
                                            <div className="flex items-center mb-4">
                                                <div className="list-title heading_5 cursor-text-wrp">In this post</div>
                                                <div class="ml-auto cursor-pointer" onClick={toggleModal}>Close</div>
                                            </div>
                                            <div className="all-list">
                                                {/* table of content */}
                                                <ul className="list-here" ref={refTable} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="w-full flex justify-center items-center">
                        <div className="container-fluid w-full mx-4 m-w mx-auto my-0 helpful-rate mt-6">
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
                                            onClick={toggleShare}
                                        >
                                            <span className="mr-3">{sort ? sort.label : 'All articles'}</span>
                                            <img className="icon-ssm dark:hidden" src="/img/icon/sort-bl.svg" alt="smile" loading="lazy" />
                                            <img className="icon-ssm hidden dark:block" src="/img/icon/sort-wh.svg" alt="smile" loading="lazy" />
                                        </button>
                                        {showShare && (
                                            <div ref={refShare} className="absolute mt-3 w-max p-3 top-full border border-solid border-x border-b !border-999 border-ccc dark:bg-black bg-background">
                                                <div className="sort-menu-inner">
                                                    <ul className="">
                                                        <li className="py-1 cursor-pointer" onClick={() => {handleShare()}}>Copy</li>
                                                        <li className="py-1 cursor-pointer" onClick={() => {handleShare('facebook')}}>Facebook</li>
                                                        <li className="py-1 cursor-pointer" onClick={() => {handleShare('twitter')}}>Twitter</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/*Suggest more article*/}
                            <div className="suggest-article py-7">
                                <div className="">
                                    <Slider
                                        configs={{
                                            sliderPerRow: 3,
                                            sliderPerRowMobile: 2.5,
                                            allowDrag: true,
                                            duration: 400,
                                            auto: false,
                                            autoDuration: 1000,
                                            gap: 30,
                                            gapMobile: 10,
                                            title: <div className="heading_3 mb-4">Related Articles</div>,
                                            navigatorTitle: true,
                                            process: true,
                                            navigator: false,
                                        }}
                                    >

                                        {relatedBlogs.map((blog, index) => (
                                            <div className="justify-center pb-1" key={index}>
                                                <div className="col-span-12 md:col-span-4">
                                                    <div className="hover-img">
                                                        <div className="img-inner cursor-pointer" onClick={() => { router.push("/article/" + blog.slug) }}>
                                                            <img className="set-img" src={BASE_URL + '/storage/mobile/' + blog?.featured_img} alt={blog.title} loading="lazy" height={500} width={500} />
                                                        </div>
                                                        <div>
                                                            <div className="article-info py-2 mb-1 md:!border-b md:!border-ccc border-b-0">
                                                                <div className="md:flex mb-1">
                                                                    <div className="mr-auto small_text">{blog.categories.map((category) => { return category.name }).join(' | ')}</div>
                                                                    {/* <div className="small_text">{formatDate(blog.publish_date)}</div> */}
                                                                </div>
                                                                <div className="medium_text">{blog.title}</div>
                                                            </div>
                                                            <div className="md:flex hidden">
                                                                <div className="text-link cursor-pointer" onClick={() => { router.push("/article/" + blog.slug) }} href={"/article/" + blog.slug}>Read more</div>
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
                            {/*
<div className="comment py-7">
    <div className="flex">
        <div className="heading_2 mb-4">Comments</div>
        <div className="ml-auto">
            <select className="cmt-select dark:border dark:border-white">
                <option value="">Newest comments</option>
                <option value="">Oldest comments</option>
            </select>
        </div>
    </div>
    {comments.map((comment, index) => (
        <React.Fragment key={index}>
            <div className="comment-main">
                <div className="flex">
                    <div className="flex">
                        <div className="mr-2">
                            <img className="w-full rounded-3xl" src={comment?.user?.avatar} alt="smile" loading="lazy" />
                        </div>
                        <div>
                            <div className="medium_text">{comment?.name ? comment?.name : comment?.user?.name}</div>
                            <div>{prettyDate(comment?.created_at)}</div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    {comment?.content}
                </div>
            </div>
            <div className="comment-border"></div>
        </React.Fragment>
    ))}
    {paginate.total > 1 && (
        <Pagination
            className="pagination-bar"
            currentPage={paginate?.current}
            totalCount={paginate?.count}
            pageSize={paginate?.limit}
            finalPage={paginate?.last}
            onPageChange={page => handlePageClick(page)}
        />
    )}
</div>
<div className="leavecmt">
    <div className="mb-5 text-center">
        <div className="heading_2 mb-2">Leave a comment</div>
        <div>Your email address will not be published. Required fields are marked *</div>
    </div>
    <div>
        {user ? (
            <div className="flex">
                <div className="h-[40px] w-[40px]">
                    <img className="w-full rounded-3xl" src={user.avatar} alt="smile" loading="lazy" />
                </div>
                <div>{user.name}</div>
            </div>
        ) : (
            <div>
                <div className="mb-3">
                    <input
                        className="py-1 pr-2 border-solid border-b border-ccc dark:border-999 py-1 dark:focus:border-white focus:border-333 w-full focus-visible:outline-none"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="py-1 pr-2 border-solid border-b border-ccc dark:border-999 py-1 dark:focus:border-white focus:border-333 w-full focus-visible:outline-none"
                        placeholder="Email address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
        )}
        <div className="mb-5">
            <textarea
                rows="5"
                className="dark:border-999 dark:focus:border-white focus:border-333 border-solid border-b border-ccc py-1 pr-2 w-full focus-visible:outline-none"
                placeholder="Message *"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
        </div>
        <div>
            <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark ml-1"></span>
                I agree to the terms and conditions
            </label>
        </div>
        <div className="flex justify-center dark:border dark:border-white">
            <button
                className="w-3/12 my-btn-pr"
                type="submit"
                onClick={handleSendComment}
            >Post comment</button>
        </div>
    </div>
</div>
*/}

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

ArticleDetail.getInitialProps = async ({ req, res, query }) => {
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