import React, { useState, useEffect, useRef } from 'react';

import { usePost } from '@hooks/usePost';
import Link from 'next/link';
import Editor from '@components/common/editor/editor';
import { fetchCategoriesApi } from "@services/categories";
import { BASE_URL } from "@utils/apiUtils";
import LibraryIcon from '@components/common/libraryIcon';
import { BLOG_STATUS } from '@utils/constants';

const EditPost = ({ id }) => {

    const editerRef = useRef(null);

    const { getBlogById, post, updateBlogPost, publishedBlogPost } = usePost();
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [summary, setsummary] = useState('');
    const [content, setContent] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [bannerImage, setBannerImage] = useState('')
    const [status, setStatus] = useState(BLOG_STATUS.HIDDEN);
    const [tag, setTag] = useState([]);
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [excerpt, setExcerpt] = useState('');

    useEffect(() => {
        getBlogById(id);
        fetchCategoriesApi(1, true).then(res => {
            setCategories(res.results || []);
        })
    }, []);

    useEffect(() => {
        setTitle(post.title || '');
        setSlug(post.slug || '');
        setsummary(post.summary || '');
        setContent(post?.detail?.content_draft || '');
        setStatus(post.status || '');
        if (post.tag) {
            setTag(post.tag.split(','));
        }
        setMetaTitle(post.meta_title || '');
        setMetaDescription(post.meta_description || '');
        setAuthor(post.author || '');
        setExcerpt(post.excerpt || '');
        let postCategories = [];
        (post.categories || []).map((item) => {
            postCategories.push(item.id);
        });
        setSelectedCategories(postCategories);
    }, [post]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openNav = () => {
        setIsMenuOpen(true);
    };

    const closeNav = () => {
        setIsMenuOpen(false);
    };

    const getImagePreview = () => {
        if (!featuredImage) {
            if (post.featured_img) {
                return BASE_URL + '/storage/desktop/' + post.featured_img;
            }
            return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
        }
        return URL.createObjectURL(featuredImage);
    }

    const getBannerPreview = () => {
        if (!bannerImage) {
            if (post.banner_img) {
                return BASE_URL + '/storage/desktop/' + post.banner_img;
            }
            return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
        }
        return URL.createObjectURL(bannerImage);
    }

    const handleClick = () => {
        if (editerRef.current) {
            const updateContent = editerRef.current.getContent();
            setContent(updateContent);
            updateBlogPost({
                id: id,
                title: title,
                slug: slug,
                summary: summary,
                content: updateContent,
                content_draft: updateContent,
                categories: selectedCategories,
                featured_img: featuredImage,
                banner_img: bannerImage,
                status: status,
                tag: tag,
                meta_title: metaTitle,
                meta_description: metaDescription,
                author: author,
                excerpt: excerpt,
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
    
    const handleRemoveSelectTag = (id) => {
        setTag(tag.filter((item) => {
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
        <div className="create-new-post">
            <div className="create-post-top">
                <div className="pt-5">
                    <div className="heading_1">Update post</div>
                </div>
            </div>
            <div className="flex-wrap bg-white sticky-top flex justify-end gap-4 create-function p-4">
                <div className="col-span-2">
                    <button 
                        className="px-3 my-btn-pr w-full"
                        onClick={() => {handleClick()}}
                    >
                        Update post
                    </button>
                </div>
                <div className="col-span-2">
                    <button className="px-3 w-full my-btn-pr w-full">
                        <Link href={`/article/${post.slug}`}>Preview post</Link>
                    </button>
                </div>
                <div className="col-span-2">
                    <button 
                        className="px-3 w-full my-btn-pr w-full"
                        onClick={() => {publishedBlogPost(id)}}
                    >
                        Publish post
                    </button>
                </div>
                <div className="col-span-2">
                    <button className="px-3 w-full my-btn-pr w-full">Delete post</button>
                </div>
                <div className="col-span-1 flex items-center">
                    <button onClick={openNav} className="">
                        <img className="icon-ssm" src="/img/icon/settings.svg" alt="smile" loading="lazy"/>
                    </button>
                </div>
            </div>
            <div>
                { content && content !== post?.detail?.content ? (
                    <div className="bg-red-200 text-center">
                        <span className="text-red-500">This post has been updated</span>
                    </div>
                ) : ''    
                }
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
                                    value={title}
                                />
                            </div>
                        </div>
                        <div className='input-wrp my-3'>
                            <div className="mb-1">Slug</div>
                            <div className="">
                                <input 
                                    name="category-slug"
                                    className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                    type="text"
                                    placeholder="Enter title"
                                    onChange={(e) => {setSlug(e.target.value)}}
                                    value={slug}
                                />
                            </div>
                        </div>
                        <div className='input-wrp'>
                            <div className="mb-1">Summary</div>
                            <div className="">
                                <textarea 
                                    className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                                    rows="5"
                                    placeholder="Enter summary"
                                    onChange={(e) => {setsummary(e.target.value)}}
                                    value={summary}
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
                            <div className="">
                                <div className='mb-1'>Banner Image</div>
                                <div className=''>
                                    <div
                                        className='banner-img cursor-pointer'
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
                                            <div key={index} className="flex items-center border-ccc border w-fit py-1 px-2 rounded-full mt-2">
                                                <div className="mr-2">{item.name}</div>
                                                <span className="close" onClick={() => {handleRemoveSelectCategory(item.id)}}>x</span>
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
                                                <span className="close" onClick={() =>  {setTag(tag.filter((i) => {return i != item}))}}>x</span>
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
                                        value={author}
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
                                        value={excerpt}
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
                                        value={metaTitle}
                                        onChange={(e) => {setMetaTitle(e.target.value)}}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Meta description (255)</div>
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
            <LibraryIcon />
        </div>
    )
}
EditPost.getInitialProps = async ({ query }) => {
    const { id } = query
    return { id }
}
export default EditPost;

