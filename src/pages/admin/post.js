import {useDispatch} from "react-redux";
import {showModal} from "../../store/modal/modal.action";

const Adminpostpage = () => {

    const dispatch = useDispatch();

    const handleCreatePost = () => {
        // gọi action show modal loading
        dispatch(showModal({
            name: "post",
            enableClickOutside: true,
        }))
    }

    return(
        <div>
            <div className="post-page">
                <div className="heading_1 mb-6">Post Page</div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3"></div>
                    <div className="col-span-1">
                        <button onClick={handleCreatePost} className="my-btn-pr w-full">Create new post</button>
                    </div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">Delete post</button>
                    </div>
                </div>
                <div className="my-line my-4"></div>
                <div className="grid grid-cols-5 gap-4 items-end mb-5">
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
                        <select className="sl-box">
                            <option value="" defaultValue hidden>Category</option>
                            <option value="">Drink & Coffee</option>
                            <option value="">Food & Cake</option>
                            <option value="">Photo Spots</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label>Start date</label>
                            <input className="sort-date" type="datetime-local" placeholder="dd/mm/yyyy"/>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label>End date</label>
                            <input className="sort-date" type="datetime-local" placeholder="dd/mm/yyyy"/>
                        </div>
                    </div>
                </div>
                {/*POST TABLE*/}
                <div className="admin-tbl">
                    <div className="flex tbl-row admin-tbl-title">
                        <div className="cell-ssm">ID</div>
                        <div className="cell">Date & Time</div>
                        <div className="cell">Feature image</div>
                        <div className="cell">Post title</div>
                        <div className="cell">Author</div>
                        <div className="cell">Status</div>
                        <div className="cell">Action</div>
                        <div className="cell">Action</div>
                    </div>
                    <div className="post-list">
                        <div className="flex tbl-row">
                            <div className="cell-ssm">ID</div>
                            <div className="cell">Date & Time</div>
                            <div className="cell">Feature image</div>
                            <div className="cell">Post title</div>
                            <div className="cell">Author</div>
                            <div className="cell">Status</div>
                            <div className="cell">
                                <select className="sl-box">
                                    <option value="" defaultValue hidden>Choose status</option>
                                    <option value="">Published</option>
                                    <option value="">Draft</option>
                                    <option value="">New</option>
                                </select>
                            </div>
                            <div className="cell">Action</div>
                        </div>
                        <div className="flex tbl-row">
                            <div className="cell-ssm">ID</div>
                            <div className="cell">Date & Time</div>
                            <div className="cell">Feature image</div>
                            <div className="cell">Post title</div>
                            <div className="cell">Author</div>
                            <div className="cell">

                            </div>
                            <div className="cell">
                                <select className="sl-box">
                                    <option value="" defaultValue hidden>Choose status</option>
                                    <option value="">Published</option>
                                    <option value="">Draft</option>
                                    <option value="">New</option>
                                </select>
                            </div>
                            <div className="cell">Action</div>
                        </div>
                        <div className="flex tbl-row">
                            <div className="cell-ssm">ID</div>
                            <div className="cell">Date & Time</div>
                            <div className="cell">Feature image</div>
                            <div className="cell">Post title</div>
                            <div className="cell">Author</div>
                            <div className="cell">

                            </div>
                            <div className="cell">
                                <select className="sl-box">
                                    <option value="" defaultValue hidden>Choose status</option>
                                    <option value="">Published</option>
                                    <option value="">Draft</option>
                                    <option value="">New</option>
                                </select>
                            </div>
                            <div className="cell">Action</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Adminpostpage;