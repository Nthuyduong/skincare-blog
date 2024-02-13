import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {showModal} from "../../../store/modal/modal.action";
import { useCategory } from "@hooks/useCategory";

const Index = () => {

    const { categories, paginate, fetchCategories } = useCategory();

    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategories(1, true);
    }, []);

    const handleAddSubCate = (id = null) => {
        // gọi action show modal loading
        dispatch(showModal({
            title:id? "Update subcategory" : "Create subcategory",
            name: "subcate",
            enableClickOutside: true,
            data: {
                id: id,
            },
            confirmCallback: () => {
                fetchCategories(1, false);
            },
        }))
    }

    return(
        <div>
            <div className="category-page pt-5">
                <div className="heading_1 mb-6">Sub-Category page</div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">

                    </div>
                    <div className="col-span-1">

                    </div>
                    <div className="col-span-1">
                        <button onClick={() => {handleAddSubCate()}} className="my-btn-pr w-full">New Subcategory</button>
                    </div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">Delete category</button>
                    </div>
                </div>
                <div className="my-line my-4"></div>
                <div className="grid grid-cols-3 gap-4 mb-5">
                    <div className="col-span-1">
                        <div className="search-bar-box flex">
                            <input name="findOrder" id="findOrder" className="search-input w-full" type="text"
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
                            <option value="" defaultValue hidden>Sort by category</option>
                            <option value="">Published</option>
                            <option value="">Draft</option>
                            <option value="">New</option>
                        </select>
                    </div>
                </div>
                <div className="admin-tbl">
                    <div className="flex tbl-row admin-tbl-title">
                        <div className="select-all">
                            <input type="checkbox"/>
                        </div>
                        <div className="cell-ssm">ID</div>
                        <div className="cell">Name</div>
                        <div className="cell">Description</div>
                        <div className="cell">Sub-category</div>
                        <div className="cell">Total post</div>
                        <div className="cell">Status</div>
                        <div className="cell">Action</div>
                    </div>
                    {categories.map((category, index) => {
                        return (
                            <div className="post-list">
                                <div className="flex tbl-row">
                                    <div>
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="cell-ssm">{category.id}</div>
                                    <div className="cell">{category.name}</div>
                                    <div className="cell">Post title</div>
                                    <div className="cell">Author</div>
                                    <div className="cell"></div>
                                    <div className="cell">
                                        <select className="sl-box">
                                            <option value="" defaultValue hidden>Choose status</option>
                                            <option value="">Published</option>
                                            <option value="">Draft</option>
                                            <option value="">New</option>
                                        </select>
                                    </div>
                                    <div className="cell">
                                        <div className="flex justify-center">
                                            {/*<img className="icon-sm" src="../img/icon/zoom-in.svg" alt="smile" loading="lazy"/>*/}
                                            <img
                                                onClick={() => {handleAddSubCate(category.id)}}
                                                className="icon-sm mx-2"
                                                src="../img/icon/edit.svg"
                                                alt="smile" loading="lazy"
                                            />
                                            <img className="icon-sm" src="../img/icon/trash.svg" alt="smile" loading="lazy"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Index;