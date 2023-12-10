import React, { Component } from 'react';

const Createpost = () => {

    return(
        <div>
            <div>
                <div>Create new post</div>
                <div>Upload new blog article here!</div>
            </div>
            <div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-9">

                    </div>
                    <div className="col-span-3">
                        <div className="post-side-setting">
                            <div className="">Blog settings</div>
                            <div className=""></div>
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

