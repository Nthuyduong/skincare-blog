import { useDispatch } from "react-redux";
import { showModal } from "@store/modal/modal.action";
import React, { useEffect,
    useState } from "react";

const Admincomment = () => {

    return(
        <div>
            <div className="category-page pt-5">
                <div className="heading_1 mb-6">Comment page</div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <div className="flex">
                            <input name="findOrder" id="findOrder" className="border-solid border border-ccc dark:border-999 py-1 px-2 search-input w-full" type="text"
                                   placeholder="Enter name/id post..."/>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <select className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full">
                            <option value="" defaultValue hidden>Status</option>
                            <option value="">Published</option>
                            <option value="">Hidden</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">Hidden comment</button>
                    </div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">Delete comment</button>
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
                        <div className="cell-sm">User name</div>
                        <div className="cell">Email address</div>
                        <div className="cell">Comment</div>
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
                                    <div className="cell-sm">User name</div>
                                    <div className="cell txt-overflow">Email</div>
                                    <div className="cell">
                                        Comments go here
                                    </div>
                                    <div className="cell-sm">
                                        <select className="sl-box">
                                            <option value="" defaultValue hidden>Choose status</option>
                                            <option value="">Published</option>
                                            <option value="">Hidden</option>
                                        </select>
                                    </div>
                                    <div className="cell-sm">
                                        <div className="flex justify-center">
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
export default Admincomment;