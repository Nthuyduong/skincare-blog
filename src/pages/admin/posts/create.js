import React, { useEffect, useState, useRef } from 'react';
import { usePost } from '@hooks/usePost';
import Editor from '@components/common/editor/editor';
import { fetchCategoriesApi } from "@services/categories";
import { BASE_URL } from "@utils/apiUtils";
import { BLOG_STATUS } from '@utils/constants';

const CreatePost = () => {

    const editerRef = useRef(null);

    const { createBlogPost } = usePost();
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [content, setContent] = useState('<p>This is the initial content of the editor.</p>');
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [summary, setSummary] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [bannerImage, setBannerImage] = useState('');
    const [status, setStatus] = useState(BLOG_STATUS.HIDDEN);
    const [tags, setTags] = useState([]);
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [tag, setTag] = useState([]);


    useEffect(() => {
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
            return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
        }
        return URL.createObjectURL(featuredImage);
    }

    const getBannerPreview = () => {
        if (!bannerImage) {
            return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
        }
        return URL.createObjectURL(bannerImage);
    }

    const handleClick = () => {
        if (editerRef.current) {
            const newContent = editerRef.current.getContent();
            setContent(newContent);
            createBlogPost({
                title: title,
                slug: slug,
                summary: summary,
                content: newContent,
                content_draft: newContent,
                categories: selectedCategories,
                featured_img: featuredImage,
                banner_img: bannerImage,
                status: status,
                tag: tag,
                meta_title: metaTitle,
                meta_description: metaDescription,
                author: author,
                excerpt: excerpt
            })
        }
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

    const handleChangeTags = (e) => {
        const { value } = e.target;
        if (value) {
            if (!tag.includes(value)) {
                setTag([...tag, value]);
            }
        }
    }

    return(
        <div className="create-new-post pt-5">
            <div className="create-post-top">
                <div className="">
                    <div className="heading_1">Create new post</div>
                </div>
            </div>
            <div className="flex-wrap bg-white sticky-top flex justify-end gap-4 create-function pb-4">
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
            <div>
                <div className="flex">
                    <div className="create-content pt-4">
                        <div className='input-wrp'>
                            <div className="mb-1">Title</div>
                            <div className="">
                                <input 
                                    name="category-slug"
                                    className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                    type="text"
                                    placeholder="Enter title"
                                    onChange={(e) => {setTitle(e.target.value)}}
                                />
                            </div>
                        </div>
                        <div className='input-wrp mt-3'>
                            <div className="mb-1">Slug</div>
                            <div className="">
                                <input 
                                    name="category-slug"
                                    className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                    type="text"
                                    placeholder="Enter title"
                                    onChange={(e) => {setSlug(e.target.value)}}
                                />
                            </div>
                        </div>
                        <div className='input-wrp my-3'>
                            <div className="mb-1">Summary</div>
                            <div className="">
                                <textarea 
                                    className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                    rows="5"
                                    placeholder="Enter summary"
                                    onChange={(e) => {setSummary(e.target.value)}}
                                ></textarea>
                            </div>
                        </div>
                        <div className="text-editor-wrp">
                            <Editor
                                ref={editerRef}
                                value={content}
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
                            <div className="my-3">
                                <div className="mb-1">Status</div>
                                <div className="">
                                    <select 
                                        className="sl-box" 
                                        onChange={(e) => { setStatus(e.target.value)}}
                                        value={status}
                                    >
                                        <option defaultValue value={BLOG_STATUS.HIDDEN}>Hidden</option>
                                        <option value={BLOG_STATUS.VISIBLE}>Visible</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-3'>
                                <div className='mb-1'>Feature image</div>
                                <div className=''>
                                    <div
                                        className='feature-image-preview cursor-pointer'
                                        onClick={() => {
                                            document.getElementById('feature-image-file').click();
                                        }}
                                    >
                                        <img src={getImagePreview()} alt='feature image' className="w-7"/>
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
                            <div className=''>
                                <div className='mb-1'>Banner image</div>
                                <div className=''>
                                    <div
                                        className='banner-image-preview cursor-pointer'
                                        onClick={() => {
                                            document.getElementById('banner-image-file').click();
                                        }}
                                    >
                                        <img src={getBannerPreview()} alt='banner image' className="w-7"/>
                                    </div>
                                    <input
                                        id="banner-image-file"
                                        type='file'
                                        style={{display: "none"}}
                                        onChange={(e) => {
                                            setBannerImage(e.target.files[0]);
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
                                <div className="">
                                    <input 
                                        name="category-slug"
                                        id="cate-tag" 
                                        className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                        type="text"
                                        placeholder="Choose category"
                                        onKeyDown={(e) => { if (e.key === 'Enter') {handleChangeTags(e); e.target.value = ''} }}
                                    />
                                </div>
                                <div>
                                    {
                                        tag.map((item, index) => (
                                            <div key={index} className="flex items-center border-ccc border w-fit py-1 px-2 rounded-full">
                                                <div className="mr-2">{item}</div>
                                                <span className="close" onClick={() => {setTag(tag.filter((i) => {return i != item}))}}>x</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="my-3">
                                <div className="mb-1">Author</div>
                                <div className="">
                                    <input 
                                        name="category-slug" 
                                        className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                        type="text"
                                        placeholder="Enter author"
                                        onChange={(e) => {setAuthor(e.target.value)}}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Blog Excerpt</div>
                                <div className="">
                                    <textarea 
                                        className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                        rows="5"
                                        onChange={(e) => {setExcerpt(e.target.value)}}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="my-3">
                                <div className="mb-1">Meta title (250)</div>
                                <div className="">
                                    <input
                                        name="category-slug"
                                        className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                        type="text"
                                        placeholder="Enter meta title"
                                        onChange={(e) => {setMetaTitle(e.target.value)}}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Meta description (505)</div>
                                <div className="">
                                    <textarea 
                                        className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                        rows="5"
                                        placeholder="Enter meta description"
                                        value={metaDescription}
                                        onChange={(e) => {setMetaDescription(e.target.value)}}
                                    ></textarea>
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

