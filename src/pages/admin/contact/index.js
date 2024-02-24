import { useDispatch } from "react-redux";
import { showModal } from "@store/modal/modal.action";
import React, { useEffect,
    useState } from "react";

const Admincategory = () => {

    // const handleAddCategory = (id = null) => {
    //     // gọi action show modal loading
    //     dispatch(showModal({
    //         title:id? "Update category" : "Create category",
    //         name: "category",
    //         enableClickOutside: true,
    //         data: {
    //             id: id,
    //         },
    //         confirmCallback: () => {
    //             fetchCategories(1, false);
    //         },
    //     }))
    // }

    // const handleDelete = () => {
    //     console.log(selectedCategory);
    //     if (selectedCategory.length === 0){
    //         dispatch(showModal({
    //             name: "notice",
    //             title: "Can't delete category",
    //             enableClickOutside: true,
    //             data: {
    //                 message: "Please select at least one category to delete"
    //             },
    //         }))
    //     }
    //     else{
    //         dispatch(showModal({
    //             name: "notice",
    //             title: "Are your sure...",
    //             enableClickOutside: true,
    //             data: {
    //                 message: "bb"
    //             },
    //         }))
    //     }
    // }

    // const handleSelectedCategory = (e, id) => {
    //     if (e.target.checked){
    //         setSelectedCategory([...selectedCategory, id])
    //     }
    //     else{
    //         setSelectedCategory(selectedCategory.filter(item => item != id))
    //     }
    // }

    return(
        <div>
            <div className="category-page pt-5">
                <div className="heading_1 mb-6">Contact page</div>
                <div className="grid grid-cols-4 gap-4">
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
                        <button className="my-btn-pr w-full">New Category</button>
                    </div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">Delete category</button>
                    </div>
                </div>
                <div className="my-line my-4"></div>
                <div className="admin-tbl">
                    <div className="flex tbl-row admin-tbl-title">
                        <div className="select-all">
                            <input
                                type="checkbox"
                            />
                        </div>
                        <div className="cell-ssm">ID</div>
                        <div className="cell-sm">Customer name</div>
                        <div className="cell">Email address</div>
                        <div className="cell">Message</div>
                        <div className="cell-sm"></div>
                        <div className="cell-sm">Action</div>
                    </div>
                    {/*{categories.map((category, index) => {*/}
                    {/*    return (*/}
                            <div className="post-list">
                                <div className="flex tbl-row">
                                    <div className="">
                                        <input
                                            type="checkbox"
                                            // onChange={(e) => {handleSelectedCategory(e, category.id)}}
                                        />
                                    </div>
                                    <div className="cell-ssm">id</div>
                                    <div className="cell-sm">Name</div>
                                    <div className="cell txt-overflow">Email</div>
                                    <div className="cell">
                                        Customer's message goes here
                                    </div>
                                    <div className="cell-sm">
                                        <select className="sl-box">
                                            <option value="" defaultValue hidden>Choose status</option>
                                            <option value="">Published</option>
                                            <option value="">Draft</option>
                                            <option value="">New</option>
                                        </select>
                                    </div>
                                    <div className="cell-sm">
                                        <div className="flex justify-center">
                                            <img
                                                onClick={() => {handleAddCategory(category.id)}}
                                                className="icon-sm mx-2"
                                                src="../img/icon/edit.svg"
                                                alt="smile"
                                                loading="lazy"
                                            />
                                            <img className="icon-sm" src="../img/icon/trash.svg" alt="smile" loading="lazy"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    {/*    )*/}
                    {/*})}*/}

                </div>
            </div>
        </div>
    )
}
export default Admincategory;