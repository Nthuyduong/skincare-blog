import React from "react";

const SkincareIngredients = () => {
    return(
        <div className="pt-5">
            <div className="heading_1 mb-6">Skincare Ingredients</div>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                    <button className="my-btn-pr w-full">New Ingredient</button>
                </div>
                <div className="col-span-1">
                    <button className="my-btn-pr w-full">Update Ingredient</button>
                </div>
                <div className="col-span-1">
                    <button className="my-btn-pr w-full">Delete Ingredient</button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <div className="search-bar-box flex">
                        <input name="findOrder" id="findOrder" className="search-input w-full" type="text"
                               placeholder="Enter name/id ingredient..."/>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="col-span-1">
                        <select className="sl-box">
                            <option value="" defaultValue hidden>Sorter</option>
                            <option value="">Alphabetical Asc. (A - Z)</option>
                            <option value="">Alphabetical Dsc. (Z - A)</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="col-span-1">
                        <select className="sl-box">
                            <option value="" defaultValue hidden>Status</option>
                            <option value="">Published</option>
                            <option value="">Draft</option>
                            <option value="">New</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
            <div className="my-line my-4"></div>
            <div className="admin-tbl">
                <div className="flex tbl-row admin-tbl-title">
                    <div className="select-all">
                        <input type="checkbox"/>
                    </div>
                    <div className="cell-ssm">ID</div>
                    <div className="cell-sm">Date</div>
                    <div className="cell-ssm">Ingredient</div>
                    <div className="cell">Name</div>
                    <div className="cell">Description</div>
                    <div className="cell-sm">Status</div>
                    <div className="cell-sm">Action</div>
                </div>
                <div className="post-list">
                    <div className="flex tbl-row">
                        <div>
                            <input type="checkbox"/>
                        </div>
                        <div className="cell-ssm">ID</div>
                        <div className="cell-sm"></div>
                        <div className="cell-ssm">A</div>
                        <div className="cell">Alpha Hydroxy Acid</div>
                        <div className="cell">Description goes here</div>
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
                                <img className="icon-sm" src="../img/icon/zoom-in.svg" alt="smile" loading="lazy"/>
                                <img className="icon-sm mx-2" src="../img/icon/edit.svg" alt="smile" loading="lazy"/>
                                <img className="icon-sm" src="../img/icon/trash.svg" alt="smile" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex tbl-row">
                        <div>
                            <input type="checkbox"/>
                        </div>
                        <div className="cell-ssm">ID</div>
                        <div className="cell-sm"></div>
                        <div className="cell-ssm">B</div>
                        <div className="cell">BHA</div>
                        <div className="cell">
                            Description goes here
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
                                <img className="icon-sm" src="../img/icon/zoom-in.svg" alt="smile" loading="lazy"/>
                                <img className="icon-sm mx-2" src="../img/icon/edit.svg" alt="smile" loading="lazy"/>
                                <img className="icon-sm" src="../img/icon/trash.svg" alt="smile" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex tbl-row">
                        <div>
                            <input type="checkbox"/>
                        </div>
                        <div className="cell-ssm">ID</div>
                        <div className="cell-sm"></div>
                        <div className="cell-ssm">R</div>
                        <div className="cell">Retinol</div>
                        <div className="cell">
                            Description goes here
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
                                <img className="icon-sm" src="../img/icon/zoom-in.svg" alt="smile" loading="lazy"/>
                                <img className="icon-sm mx-2" src="../img/icon/edit.svg" alt="smile" loading="lazy"/>
                                <img className="icon-sm" src="../img/icon/trash.svg" alt="smile" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkincareIngredients;