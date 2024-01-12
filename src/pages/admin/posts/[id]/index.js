import React, {Component, useState, useEffect} from 'react';

import { usePost } from '@hooks/usePost';
import Link from 'next/link';

const EditPost = ({ id }) => {

    const { getBlogById, post } = usePost();

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [summary, setsummary] = useState('');

    useEffect(() => {
        getBlogById(id);
    }, []);

    useEffect(() => {
        setTitle(post.title || '');
        setSlug(post.slug || '');
        setsummary(post.summary || '');
    }, [post]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openNav = () => {
        setIsMenuOpen(true);
    };

    const closeNav = () => {
        setIsMenuOpen(false);
    };


    const handleClick = () => {
        createBlogPost({
            title: title,
            slug: slug,
            summary: summary,
            content: '',
            content_draft: '',
        })
    }

    return(
        <div className="create-new-post">
            <div className="create-post-top">
                <div className="pt-5">
                    <div className="heading_1">Update post</div>
                    <div>Upload new blog article here!</div>
                </div>
                <div className="flex justify-end gap-4 create-function pb-4">
                    <div className="col-span-2">
                        <button 
                            className="my-btn-pr w-full"
                            onClick={() => {handleClick()}}
                        >
                            Create post
                        </button>
                    </div>
                    <div className="col-span-2">
                        <button className="w-full my-btn-pr w-full">
                            <Link href={`/article/${post.slug}`}>Preview post</Link>
                        </button>
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
                <div className="gap-4 flex">
                    <div className="create-content pt-4">
                        <div className='input-wrp'>
                            <div className="mb-1">Title</div>
                            <div className="search-bar-box">
                                <input 
                                    name="category-slug"
                                    className="w-full" 
                                    type="text"
                                    placeholder="Enter title"
                                    onChange={(e) => {setTitle(e.target.value)}}
                                    value={title}
                                />
                            </div>
                        </div>
                        <div className='input-wrp'>
                            <div className="mb-1">Slug</div>
                            <div className="search-bar-box">
                                <input 
                                    name="category-slug"
                                    className="w-full" 
                                    type="text"
                                    placeholder="Enter title"
                                    onChange={(e) => {setSlug(e.target.value)}}
                                    value={slug}
                                />
                            </div>
                        </div>
                        <div className='input-wrp'>
                            <div className="mb-1">summary</div>
                            <div className="search-bar-box">
                                <textarea 
                                    className="w-full" 
                                    rows="5"
                                    placeholder="Enter summary"
                                    onChange={(e) => {setsummary(e.target.value)}}
                                    value={summary}
                                ></textarea>
                            </div>
                        </div>
                        <div className="text-editor-wrp">
                        </div>
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
EditPost.getInitialProps = async ({ query }) => {
    const { id } = query
    console.log(query)
    return { id }
}
export default EditPost;

