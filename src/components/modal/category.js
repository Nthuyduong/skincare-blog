import React, { useState, useEffect } from "react";
import { useCategory } from "@hooks/useCategory";

const ModalCategory = ({ id }) => {

    const { createSubcategory, updateSubcategory } = useCategory();

    const { fetchCategoryById, category } = useCategory();

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [featuredImage, setFeaturedImage] = useState('');
    const [bannerImage, setBannerImage] = useState('')

    useEffect(() => {
        fetchCategoryById(id);
    }, [id]);


    useEffect(() => {
        if (id) {
            setName(category?.name);
            setSlug(category?.slug);
            setDescription(category?.description);
        } else {
            setName("");
            setSlug("");
            setDescription("");
        }
        
    }, [category]);

    const handleClick = () => {
        createSubcategory({
            name: name,
            slug: slug,
            description: description,
            featured_img: featuredImage,
            banner_img: bannerImage,
        })
    }

    return (
        <div className="">
            <div>
                <div className="mb-3">
                    <div className="mb-1">Category name</div>
                    <div className="search-bar-box">
                        <input 
                            name="category-name" 
                            id="cate-name" 
                            className="w-full" 
                            type="text"
                            placeholder="Enter name"
                            value={name || ""}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="mb-1">Category slug</div>
                    <div className="search-bar-box">
                        <input 
                            name="category-slug" 
                            id="cate-slug" 
                            className="w-full" 
                            type="text"
                            placeholder="Enter slug"
                            value={slug || ""}
                            onChange={(e) => {setSlug(e.target.value)}}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-1">Desciption</div>
                    <div className="search-bar-box">
                        <textarea 
                            className="w-full" 
                            rows="5"
                            value={description || ""}
                            onChange={(e) => {setDescription(e.target.value)}}
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="callback-btn">
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-1">
                        <button className="my-out-line-btn w-full">Cancel</button>
                    </div>
                    { id ? (
                        <div className="col-span-1">
                            <button className="my-btn-pr w-full">Update category</button>
                        </div>) : (
                        <div className="col-span-1">
                            <button className="my-btn-pr w-full">Add new category</button>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default ModalCategory;