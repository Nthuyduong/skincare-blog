import { useDispatch } from "react-redux";
import { showModal } from "@store/modal/modal.action";
import React, { useEffect,
    useState } from "react";
import { useCategory } from "@hooks/useCategory";

const Admincategory = () => {
    
    const { categories, paginate, fetchCategories } = useCategory();

    const [ selectedCategory, setSelectedCategory ] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategories(1, false);
    }, []);

    const handleAddCategory = (id = null) => {
        // gọi action show modal loading
        dispatch(showModal({
            title:id? "Update category" : "Create category",
            name: "category",
            enableClickOutside: true,
            data: {
                id: id,
            },
            confirmCallback: () => {
                fetchCategories(1, false);
            },
        }))
    }

    const handleDelete = () => {
        console.log(selectedCategory);
        if (selectedCategory.length === 0){
            dispatch(showModal({
                name: "notice",
                title: "Can't delete category",
                enableClickOutside: true,
                data: {
                    message: "Please select at least one category to delete"
                },
            }))
        }
        else{
            dispatch(showModal({
                name: "notice",
                title: "Are your sure...",
                enableClickOutside: true,
                data: {
                    message: "bb"
                },
            }))
        }
    }

    const handleSelectedCategory = (e, id) => {
        if (e.target.checked){
            setSelectedCategory([...selectedCategory, id])
        }
        else{
            setSelectedCategory(selectedCategory.filter(item => item != id))
        }
    }

    return(
        <div>
            <div className="category-page pt-5">
                <div className="heading_1 mb-6">Category page</div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <div className="search-bar-box flex">
                            <input name="findOrder" id="findOrder" className="search-input w-100" type="text"
                                   placeholder="Enter name/id post..."/>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <select className="sl-box">
                            <option value="" defaultValue hidden>Status</option>
                            <option value="">Published</option>
                            <option value="">Draft</option>
                            <option value="">New</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <button onClick={() => {handleAddCategory()}} className="my-btn-pr w-full">New Category</button>
                    </div>
                    <div className="col-span-1">
                        <button onClick={() => {handleDelete()}} className="my-btn-pr w-full">Delete category</button>
                    </div>
                </div>
                <div className="my-line my-4"></div>
                <div className="admin-tbl">
                    <div className="flex tbl-row admin-tbl-title">
                        <div className="select-all">
                            <input
                                type="checkbox"
                            />
                        </div>
                        <div className="cell-ssm">ID</div>
                        <div className="cell">Category name</div>
                        <div className="cell">Description</div>
                        <div className="cell">Sub-category</div>
                        <div className="cell">Total post</div>
                        <div className="cell">Status</div>
                        <div className="cell">Action</div>
                    </div>
                    {categories.map((category, index) => {
                        return (
                            <div className="post-list" key={index}>
                                <div className="flex tbl-row">
                                    <div className="">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => {handleSelectedCategory(e, category.id)}}
                                        />
                                    </div>
                                    <div className="cell-ssm">{category.id}</div>
                                    <div className="cell">{category.name}</div>
                                    <div className="cell txt-overflow">{category.description}</div>
                                    <div className="cell">4</div>
                                    <div className="cell">20</div>
                                    <div className="cell">
                                        <select className="sl-box">
                                            <option value="" defaultValue hidden>Choose status</option>
                                            <option value="">Published</option>
                                            <option value="">Draft</option>
                                            <option value="">New</option>
                                        </select>
                                    </div>
                                    <div className="cell">
                                        <div className="flex justify-center">
                                            <img
                                                onClick={() => {handleAddCategory(category.id)}}
                                                className="icon-sm mx-2" 
                                                src="../img/icon/edit.svg" 
                                                alt="smile" 
                                                loading="lazy"
                                            />
                                            <img className="icon-sm" src="../img/icon/trash.svg" alt="smile" loading="lazy"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}
export default Admincategory;