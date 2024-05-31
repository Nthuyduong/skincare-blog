import React, { useState, useEffect } from "react";
import { useIngredient } from "@hooks/useIngredient";
import { fetchIngredientsApi } from "@services/ingredients";
import Dragable from "@components/common/dragable/dragable";
import { BASE_URL } from "@utils/apiUtils";
import { set } from "nprogress";

const editIngredient = ({ id }) => {
    const { updateIngredient, fetchIngredientById, ingredient } = useIngredient();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [content, setContent] = useState("");
    const [featuredImage, setFeaturedImage] = useState('');
    const [featuredImage2, setFeaturedImage2] = useState('')
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetchIngredientById(id);
    }, []);

    useEffect(() => {
        if (id) {
            setName(ingredient?.name);
            setDescription(ingredient?.description);
            setContent(ingredient?.content);
            setDetails(ingredient?.details ?? []);
        } else {
            setName("");
            setDescription("");
            setContent("");
        }

    }, [ingredient]);

    const getImagePreview = () => {
        if (!featuredImage) {
            if (ingredient.featured_img) {
                return BASE_URL + '/storage/desktop/' + ingredient.featured_img;
            }
            return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
        }
        return URL.createObjectURL(featuredImage);
    }

    const getImagePreview2 = () => {
        if (!featuredImage2) {
            if (ingredient.featured_img2) {
                return BASE_URL + '/storage/desktop/' + ingredient.featured_img2;
            }
            return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
        }
        return URL.createObjectURL(featuredImage2);
    }

    const handleUpdate = async() => {
        await updateIngredient({
            id: id,
            name: name,
            description: description,
            content: content,
            featured_img: featuredImage,
            featured_img2: featuredImage2,
            details: details,
        })
    }

    return (
        <div className="">
            <div className="mb-3">
                <div className="heading_1">Update ingredient</div>
            </div>
            <div>
                <div className="mb-3">
                    <div className="mb-1">Ingredient name</div>
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
                    <div className="mb-1">Description</div>
                    <div className="search-bar-box">
                        <textarea
                            className="w-full"
                            rows="2"
                            value={description || ""}
                            onChange={(e) => {setDescription(e.target.value)}}
                        ></textarea>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="mb-1">Meta Title</div>
                    <div className="search-bar-box">
                        <input
                            name="Meta title"
                            id=""
                            className="w-full"
                            type="text"
                            placeholder="Enter meta title"
                            value={metaTitle || ""}
                            onChange={(e) => { setMetaTitle(e.target.value) }}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-1">Meta Description</div>
                    <div className="search-bar-box">
                        <textarea
                            className="w-full"
                            rows="2"
                            value={metaDescription || ""}
                            onChange={(e) => { setMetaDescription(e.target.value) }}
                        ></textarea>
                    </div>
                </div>
                <div className="mt-3 mb-5">
                    <div className="mb-1">Feature image</div>
                    <div className="flex gap-2">
                        <div className='feature-img-light'>
                            <div
                                className='h-6 overflow-hidden featured-image-preview cursor-pointer'
                                onClick={() => {
                                    document.getElementById('featured-image-file').click();
                                }}
                            >
                                <img className="h-full w-auto" src={getImagePreview()} alt='featured image' />
                            </div>
                            <input
                                id="featured-image-file"
                                type='file'
                                style={{display: "none"}}
                                onChange={(e) => {
                                    setFeaturedImage(e.target.files[0]);
                                }}
                            ></input>
                        </div>
                        <div className='feature-img-dark'>
                            <div
                                className='h-6 overflow-hidden featured-image-preview cursor-pointer'
                                onClick={() => {
                                    document.getElementById('featured-image-file2').click();
                                }}
                            >
                                <img className="h-full w-auto" src={getImagePreview2()} alt='featured image' />
                            </div>
                            <input
                                id="featured-image-file2"
                                type='file'
                                style={{display: "none"}}
                                onChange={(e) => {
                                    setFeaturedImage2(e.target.files[0]);
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <Dragable
                    details={details}
                    setDetails={setDetails}
                />
            </div>
            <div className="callback-btn mt-4 bg-white sticky py-3 border-t border-ccc border-solid" style={{bottom: 0}}>
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-1">
                        <button className="my-out-line-btn w-full">Cancel</button>
                    </div>
                    <div className="col-span-1">
                        <button onClick={() => {handleUpdate()}} className="my-btn-pr w-full">Update</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
editIngredient.getInitialProps = async ({ query }) => {
    const { id } = query
    return { id }
}

export default editIngredient;