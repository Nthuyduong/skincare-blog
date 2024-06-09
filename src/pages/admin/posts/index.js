import {useDispatch} from "react-redux";
import {showModal} from "@store/modal/modal.action";
import {ROUTER} from "@utils/constants";
import React, { useState } from "react";
import Link from 'next/link'
import { useEffect } from "react";
import { usePost } from "@hooks/usePost";
import { formatDate } from "@utils/format";
import Pagination from "@components/common/pagination";
import { useRouter } from 'next/router';
import { fetchCategoriesApi } from "@services/categories";

const Adminpostpage = ({ page }) => {

    const router = useRouter();

    const { fetchBlogPosts, posts, paginate } = usePost();
    const [filters, setFilters] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const { page, search, status, category_id, publish_from, publish_to } = router.query;
        if (search || status || category_id || publish_from || publish_to) {
            setFilters({ search, status, category_id, publish_from, publish_to });
        }
        fetchBlogPosts(page || 1, { search, status, category_id, publish_from, publish_to });
        fetchCategoriesApi(1, true).then(res => {
            setCategories(res.results || []);
        });
    }, [router.query]);

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
    

    const handleChangeFilter = (e, name) => {
        if (!name) {
            setFilters(null);
            router.replace(ROUTER.ADPOST);
            fetchBlogPosts(1);
            return;
        }
        const value = e.target.value;
        setFilters({ ...filters, [name]: value });
        router.replace({
            pathname: ROUTER.ADPOST,
            query: { page: 1, [name]: value },
        });
        fetchBlogPosts(1, { ...filters, [name]: value });
    }

    return(
        <div>
            <div className="post-page pt-5">
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
                        <div className="flex">
                            <input
                                name="findOrder"
                                id="findOrder"
                                className="w-full py-1 px-2 border border-solid border-ccc dark:border-999 search-input w-100"
                                type="text"
                                placeholder="Enter name/id post..."
                                value={filters?.search}
                                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                                onKeyDown={(e) => {if (e.key === 'Enter') {handleChangeFilter(e, 'search')}}}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <select
                            className="border-solid border dark:border-999 border-ccc py-1 px-2 w-full"
                            onChange={(e) => handleChangeFilter(e, 'status')}
                        >
                            <option value="" defaultValue hidden>Status</option>
                            <option value={0}>Hidden</option>
                            <option value={1}>Show</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <select
                            className="border-solid border dark:border-999 border-ccc py-1 px-2 w-full"
                            onChange={(e) => handleChangeFilter(e, 'category_id')}
                        >
                            <option value="" defaultValue hidden>Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label>Public start</label>
                            <input 
                                className="sort-date"
                                type="datetime-local"
                                placeholder="dd/mm/yyyy"
                                value={filters?.publish_from}
                                onChange={(e) => handleChangeFilter(e, 'publish_from')}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label>Public end</label>
                            <input
                                className="sort-date"
                                type="datetime-local"
                                placeholder="dd/mm/yyyy"
                                value={filters?.publish_to}
                                onChange={(e) => handleChangeFilter(e, 'publish_to')}
                            />
                        </div>
                    </div>
                </div>
                {filters && (<div onClick={handleChangeFilter}>Clear filters</div>)}
                {/*POST TABLE*/}
                <div className="admin-tbl">
                    <div className="flex tbl-row admin-tbl-title">
                        <div className="select-all">
                            <input type="checkbox"/>
                        </div>
                        <div className="cell-ssm">ID</div>
                        <div className="cell-sm">Public date</div>
                        <div className="cell">Post title</div>
                        <div className="cell-sm">Author</div>
                        <div className="cell-sm">Action</div>
                        <div className="cell-sm"></div>
                    </div>
                    <div className="post-list">
                        {(posts)?.map((post, index) => {
                            return (
                                <div className="flex tbl-row" key={index}>
                                    <div className="select-all">
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="cell-ssm">{post.id}</div>
                                    <div className="cell-sm">{ formatDate(post.publish_date,)}</div>
                                    <div className="cell">
                                        <Link href={'/admin/posts/' + post.id}>{post.title}</Link></div>
                                    <div className="cell-sm">{post.author}</div>
                                    <div className="cell-sm">
                                        <select className="sl-box">
                                            <option value="" defaultValue hidden>Choose status</option>
                                            <option value="">Published</option>
                                            <option value="">Draft</option>
                                        </select>
                                    </div>
                                    <div className="cell-sm">
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
            <Pagination
                className="pagination-bar"
                currentPage={paginate?.current}
                totalCount={paginate?.count}
                pageSize={paginate?.limit}
                finalPage={paginate?.last}
                onPageChange={page => handlePageClick(page)}
            />
        </div>
    )
}
Adminpostpage.getInitialProps = async ({ query }) => {
    const { page } = query

    return { page }
}
export default Adminpostpage;
