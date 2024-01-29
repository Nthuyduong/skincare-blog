import React, { useEffect, useState } from 'react';
import { usePost } from '@hooks/usePost';
import Editor from '@components/common/editor/editor';
import { fetchCategoriesApi } from "@services/categories";
import { BASE_URL } from "@utils/apiUtils";

const CreatePost = ({id}) => {

    const { getBlogById, createBlogPost , post} = usePost();
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [content, setContent] = useState('<p>This is the initial content of the editor.</p>');

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [summary, setsummary] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');

    useEffect(() => {
        getBlogById(id);
        fetchCategoriesApi(1, true).then(res => {
            setCategories(res.results || []);
        })
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openNav = () => {
        setIsMenuOpen(true);
    };

    const closeNav = () => {
        setIsMenuOpen(false);
    };

    const getImagePreview = () => {
        if (!featuredImage) {
            console.log(post)
            return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
        }
        return URL.createObjectURL(featuredImage);
    }

    const handleClick = () => {
        createBlogPost({
            title: title,
            slug: slug,
            summary: summary,
            content: content,
            content_draft: content,
            categories: selectedCategories,
            featured_img: featuredImage,
        })
    }

    const handleChangeCategory = (e) => {
        const { value } = e.target;
        if (value) {
            if (!selectedCategories.includes(value)) {
                setSelectedCategories([...selectedCategories, parseInt(value)]);
            }

        }
    }
    const handleRemoveSelectCategory = (id) => {
        setSelectedCategories(selectedCategories.filter((item) => {
            return item != id;
        }));
    }

    return(
        <div className="create-new-post pt-5">
            <div className="create-post-top">
                <div className="">
                    <div className="heading_1">Create new post</div>
                </div>
                <div className="flex justify-end gap-4 create-function pb-4">
                    <div className="col-span-2">
                        <button 
                            className="px-3 my-btn-pr w-full px-3"
                            onClick={() => {handleClick()}}
                        >
                            Create post
                        </button>
                    </div>
                    <div className="col-span-2">
                        <button className="px-3 w-full my-btn-pr w-full px-3">Preview post</button>
                    </div>
                    <div className="col-span-2">
                        <button className="px-3 w-full my-btn-pr w-full px-3">Publish post</button>
                    </div>
                    <div className="col-span-2">
                        <button className="px-3 w-full my-btn-pr w-full px-3">Delete post</button>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <button onClick={openNav} className="">
                            <img className="icon-ssm" src="/img/icon/settings.svg" alt="smile" loading="lazy"/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex">
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
                        <div className='input-wrp my-3'>
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
                                value={content}
                                onChange={setContent}
                            />
                        </div>
                    </div>
                    <div className={`setting-bar ${
                        isMenuOpen ? 'open' : ''
                    }`}>
                        <div className="post-side-setting ml-3">
                            <div className="flex">
                                <div className="heading_4 mr-auto">Blog settings</div>
                                <button className="close" onClick={closeNav}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {/*<div className="my-3">*/}
                            {/*    <div className="mb-1">Blog URL blog</div>*/}
                            {/*    <div className="search-bar-box">*/}
                            {/*        <input name="category-slug" id="cate-slug" className="w-full" type="text"*/}
                            {/*               placeholder="Enter URL blog"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className='my-3'>
                                <div className='mb-1'>Feature image</div>
                                <div className=''>
                                    <div
                                        className='feature-image-preview cursor-pointer'
                                        onClick={() => {
                                            document.getElementById('feature-image-file').click();
                                        }}
                                    >
                                        <img src={getImagePreview()} alt='feature image' />
                                    </div>
                                    <input
                                        id="feature-image-file"
                                        type='file'
                                        style={{display: "none"}}
                                        onChange={(e) => {
                                            setFeaturedImage(e.target.files[0]);
                                        }}
                                    ></input>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="mb-1">Categories</div>
                                <div className="">
                                    <select className="sl-box" onChange={handleChangeCategory}>
                                        <option defaultValue value=''>Choose category</option>
                                        {
                                            categories.map((item, index) => (
                                                <option key={index} value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    {
                                        categories.filter((item) => {
                                            return selectedCategories.includes(item.id);
                                        }).map((item, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="mr-2">{item.name}</div>
                                                <span className="close" onClick={() => {handleRemoveSelectCategory(item.id)}}>remove</span>
                                            </div>
                                        ))
                                    }
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

