import {useDispatch} from "react-redux";
import {showModal} from "../../store/modal/modal.action";
import {ROUTER} from "../../utils/constants";
import React from "react";
import Link from 'next/link'
import {useState} from "react";
import {useRouter} from 'next/router';
import pagination from "../../components/common/pagination";
import {usePost} from "../../store/post/usePost";
import {useSearchParams} from "next/navigation";
import {useEffect} from "react";

const Adminpostpage = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const { fetchBlogPosts, posts, paginate } = usePost();

    useEffect(() => {
        const page = searchParams.get('page');
        fetchBlogPosts(page || 1);
    }, []);

    const handlePageClick = (go) => {
        router.push({
            pathname: ROUTER.ADPOST,
            query: { page : go},
        });
        fetchBlogPosts(go);
    };

    // Delete pop up
    const dispatch = useDispatch();

    const handleDeletePopup = () => {
        dispatch(showModal({
            name: "deletepopup",
            enableClickOutside: true,
        }))
    }

    return(
        <div>
            <div className="post-page">
                <div className="heading_1 mb-6">Post Page</div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2"></div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">
                            <Link href={ROUTER.CREATEPOST}>
                                Create post
                            </Link>
                        </button>
                    </div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">Update post</button>
                    </div>
                    <div className="col-span-1">
                        <button onClick={handleDeletePopup} className="my-btn-pr w-full">Delete post</button>
                    </div>
                </div>
                <div className="my-line my-4"></div>
                <div className="grid grid-cols-5 gap-4 items-end mb-5">
                    <div className="col-span-1">
                        <div className="search-bar-box flex">
                            <input name="findOrder" id="findOrder" className="search-input w-100" type="text"
                                   placeholder="Enter name/id post..."/>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <select className="sl-box">
                            <option value="" defaultValue hidden>Status</option>
                            <option value="">Published</option>
                            <option value="">Draft</option>
                            <option value="">New</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <select className="sl-box">
                            <option value="" defaultValue hidden>Category</option>
                            <option value="">Drink & Coffee</option>
                            <option value="">Food & Cake</option>
                            <option value="">Photo Spots</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label>Start date</label>
                            <input className="sort-date" type="datetime-local" placeholder="dd/mm/yyyy"/>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label>End date</label>
                            <input className="sort-date" type="datetime-local" placeholder="dd/mm/yyyy"/>
                        </div>
                    </div>
                </div>
                {/*POST TABLE*/}
                <div className="admin-tbl">
                    <div className="flex tbl-row admin-tbl-title">
                        <div className="select-all">
                            <input type="checkbox"/>
                        </div>
                        <div className="cell-ssm">ID</div>
                        <div className="cell-sm">Date</div>
                        <div className="cell">Post title</div>
                        <div className="cell">Author</div>
                        <div className="cell">Action</div>
                        <div className="cell"></div>
                    </div>
                    <div className="post-list">
                        {(posts || []).map((post, index) => {
                            return (
                                <div className="flex tbl-row" key={index}>
                                    <div className="select-all">
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="cell-ssm">{post.id}</div>
                                    <div className="cell-sm">{post.publish_date}</div>
                                    <div className="cell">{post.title}</div>
                                    <div className="cell">{post.author}</div>
                                    <div className="cell">
                                        <select className="sl-box">
                                            <option value="" defaultValue hidden>Choose status</option>
                                            <option value="">Published</option>
                                            <option value="">Draft</option>
                                        </select>
                                    </div>
                                    <div className="cell">
                                        <div className="flex justify-center">
                                            <img className="icon-sm" src="../img/icon/zoom-in.svg" alt="smile" loading="lazy"/>
                                            <img className="icon-sm mx-2" src="../img/icon/edit.svg" alt="smile" loading="lazy"/>
                                            <img className="icon-sm" src="../img/icon/trash.svg" alt="smile" loading="lazy"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/*Pagination*/}

        </div>
    )
}
export default Adminpostpage;