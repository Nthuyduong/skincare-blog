import React from "react";

const ModalSubcate = () => {
    return (
        <div>
            <div>
                <div className="mb-3">
                    <div className="mb-1">Sub-category name</div>
                    <div className="search-bar-box">
                        <input name="category-name" id="cate-name" className="w-full" type="text"
                               placeholder="Enter name"/>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="mb-1">Category</div>
                    <div className="">
                        <select className="sl-box">
                            <option>Category 1</option>
                            <option>Category 2</option>
                            <option>Category 3</option>
                            <option>Category 4</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className="mb-1">Desciption</div>
                    <div className="search-bar-box">
                        <textarea className="w-full" rows="5"></textarea>
                    </div>
                </div>
            </div>
            <div className="callback-btn">
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-1">
                        <button className="my-out-line-btn w-full">Cancel</button>
                    </div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSubcate;