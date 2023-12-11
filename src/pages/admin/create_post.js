import React, {Component, useState} from 'react';
import Test from "../test";

const Createpost = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openNav = () => {
        setIsMenuOpen(true);
    };

    const closeNav = () => {
        setIsMenuOpen(false);
    };

    return(
        <div className="create-new-post">
            <div className="create-post-top">
                <div className="pt-5">
                    <div className="heading_1">Create new post</div>
                    <div>Upload new blog article here!</div>
                </div>
                <div className="grid grid-cols-12 gap-4 create-function pb-4 mb-4">
                    <div className="col-span-5">

                    </div>
                    <div className="col-span-2">
                        <button className="w-full my-btn-pr w-full">Preview post</button>
                    </div>
                    <div className="col-span-2">
                        <button className="w-full my-btn-pr w-full">Publish post</button>
                    </div>
                    <div className="col-span-2">
                        <button className="w-full my-btn-pr w-full">Delete post</button>
                    </div>
                    <div className="col-span-1">
                        <button onClick={openNav} className="">Setting</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="gap-4">
                    <div className="create-content">
                        <Test/>
                    </div>
                    <div className={`setting-bar ${
                        isMenuOpen ? 'open' : ''
                    }`}>
                        <div className="post-side-setting">
                            <div className="flex">
                                <div className="heading_4 mr-auto">Blog settings</div>
                                <button className="close" onClick={closeNav}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="my-3">
                                <div className="mb-1">Blog URL blog</div>
                                <div className="search-bar-box">
                                    <input name="category-slug" id="cate-slug" className="w-full" type="text"
                                           placeholder="Enter URL blog"/>
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-1">Categories</div>
                                <div className="search-bar-box">
                                    <input name="category-slug" id="cate-slug" className="w-full" type="text"
                                           placeholder="Choose category"/>
                                </div>
                            </div>
                            <div className="my-3">
                                <div className="mb-1">Tags</div>
                                <div className="search-bar-box">
                                    <input name="category-slug" id="cate-slug" className="w-full" type="text"
                                           placeholder="Choose category"/>
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-1">Date create</div>
                                <div className="search-bar-box">
                                    <input name="category-slug" id="cate-slug" className="w-full" type="date"
                                           placeholder="Choose category"/>
                                </div>
                            </div>
                            <div className="my-3">
                                <div className="mb-1">Author</div>
                                <div className="search-bar-box">
                                    <input name="category-slug" id="cate-slug" className="w-full" type="date"
                                           placeholder="Choose category"/>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Blog Excerpt</div>
                                <div className="search-bar-box">
                                    <textarea className="w-full" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createpost;

