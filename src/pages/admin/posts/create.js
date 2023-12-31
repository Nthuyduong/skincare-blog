import React, {Component, useState} from 'react';

import dynamic from 'next/dynamic';

import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)
import { usePost } from '@hooks/usePost';

const CreatePost = () => {

    const { createBlogPost } = usePost();

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [summary, setsummary] = useState('');

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openNav = () => {
        setIsMenuOpen(true);
    };

    const closeNav = () => {
        setIsMenuOpen(false);
    };

    const convertHtml = () => {
        return convertImage(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }

    const convertImage = (htmlText) => {
        return htmlText.replace(/<div style="text-align:none;"><img/g, '<div style="text-align:center;"><img')
    }

    const handleClick = () => {
        createBlogPost({
            title: title,
            slug: slug,
            summary: summary,
            content: convertHtml(convertToRaw(editorState.getCurrentContent())),
            content_draft: convertHtml(convertToRaw(editorState.getCurrentContent())),
        })
    }

    return(
        <div className="create-new-post">
            <div className="create-post-top">
                <div className="pt-5">
                    <div className="heading_1">Create new post</div>
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
                                ></textarea>
                            </div>
                        </div>
                        <div className="text-editor-wrp">
                            <Editor
                                editorState={editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={onEditorStateChange}
                            />
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

export default CreatePost;

