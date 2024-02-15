import React, { useEffect, useState } from "react";
import { showModal } from "@store/modal/modal.action";
import { useIngredient } from "@hooks/useIngredient";
import {useDispatch} from "react-redux";

const Index = () => {

    const { ingredients, paginate, fetchIngredients } = useIngredient();

    const [ selectedIngredient, setSelectedIngredient ] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchIngredients(1);
    }, []);

    const handleAddIngredient = (id = null) => {
        // gọi action show modal loading
        dispatch(showModal({
            title:id? "Update ingredient" : "Create ingredient",
            name: "ingredient",
            enableClickOutside: true,
            data: {
                id: id,
            },
            confirmCallback: () => {
                fetchIngredients(1);
            },
        }))
    }

    const handleDelete = () => {
        console.log(selectedIngredient);
        if (selectedIngredient.length === 0){
            dispatch(showModal({
                name: "notice",
                title: "Can't delete ingredient",
                enableClickOutside: true,
                data: {
                    message: "Please select at least one ingredient to delete"
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

        const handleSelectedIngredient = (e, id) => {
            if (e.target.checked){
                setSelectedIngredient([...selectedIngredient, id])
            }
            else{
                setSelectedIngredient(selectedIngredient.filter(item => item != id))
            }
        }
    }

    return(
        <div className="pt-5">
            <div className="heading_1 mb-6">Skincare Ingredients</div>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1">
                    <button onClick={() => {handleAddIngredient()}} className="my-btn-pr w-full">New Ingredient</button>
                </div>
                <div className="col-span-1">
                    <button onClick={() => {handleDelete()}} className="my-btn-pr w-full">Delete Ingredient</button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <div className="search-bar-box flex">
                        <input name="findOrder" id="findOrder" className="search-input w-full" type="text"
                               placeholder="Enter name/id ingredient..."/>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="col-span-1">
                        <select className="sl-box">
                            <option value="" defaultValue hidden>Sorter</option>
                            <option value="">Alphabetical Asc. (A - Z)</option>
                            <option value="">Alphabetical Dsc. (Z - A)</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="col-span-1">
                        <select className="sl-box">
                            <option value="" defaultValue hidden>Status</option>
                            <option value="">Published</option>
                            <option value="">Draft</option>
                            <option value="">New</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
            <div className="my-line my-4"></div>
            <div className="admin-tbl">
                <div className="flex tbl-row admin-tbl-title">
                    <div className="select-all">
                        <input type="checkbox"/>
                    </div>
                    <div className="cell-ssm">ID</div>
                    <div className="cell-sm">Date</div>
                    <div className="cell-ssm">Ingredient</div>
                    <div className="cell">Name</div>
                    <div className="cell">Description</div>
                    <div className="cell-sm">Status</div>
                    <div className="cell-sm">Action</div>
                </div>
                {ingredients?.map((ingredient, index) => {
                    return (
                        <div className="post-list" key={index}>
                            <div className="flex tbl-row">
                                <div>
                                    <input type="checkbox"/>
                                </div>
                                <div className="cell-ssm">ID</div>
                                <div className="cell-sm"></div>
                                <div className="cell-ssm">A</div>
                                <div className="cell">{ingredient.name}</div>
                                <div className="cell">{ingredient.description}</div>
                                <div className="cell-sm">
                                    <select className="sl-box">
                                        <option value="" defaultValue hidden>Choose status</option>
                                        <option value="">Published</option>
                                        <option value="">Draft</option>
                                        <option value="">New</option>
                                    </select>
                                </div>
                                <div className="cell-sm">
                                    <div className="flex justify-center">
                                        <img className="icon-sm" src="../img/icon/zoom-in.svg" alt="smile" loading="lazy"/>
                                        <img className="icon-sm mx-2" src="../img/icon/edit.svg" alt="smile" loading="lazy"/>
                                        <img className="icon-sm" src="../img/icon/trash.svg" alt="smile" loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Index;