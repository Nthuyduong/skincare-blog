import React from "react";

const ModalCategory = () => {

    return (
        <div className="">
            <div>
                <div className="mb-3">
                    <div className="mb-1">Category name</div>
                    <div className="search-bar-box">
                        <input name="category-name" id="cate-name" className="w-full" type="text"
                               placeholder="Enter name"/>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="mb-1">Category slug</div>
                    <div className="search-bar-box">
                        <input name="category-slug" id="cate-slug" className="w-full" type="text"
                               placeholder="Enter slug"/>
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
                        <button className="my-btn-pr w-full">Add new category</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCategory;