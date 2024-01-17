import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { hideModal } from "../../store/modal/modal.action";

import ModalLoading from "./loading";
import ModalCategory from "./category";
import ModalSubcate from "./subcate";
import ModalDelete from "./deletepopup";

import { useClickOutside } from "../../hooks/dom";

const Modals = () => {
    const dispatch = useDispatch();

    const handleHide = () => {
        dispatch(hideModal());
    }

    const ref = useClickOutside(handleHide);
    
    const { show, name, data, invisibleBackground, enableClickOutside } = useSelector(state => state.modal.modal);

    const getModal = () => {
        switch (name) {
            case "category":
                return <ModalCategory id={data?.id}/>
            case "post":
                return <ModalPost/>
            case "subcate":
                return <ModalSubcate/>
            case "deletepopup":
                return <ModalDelete/>
            case "loading":
                return <ModalLoading data={data} />;
            default:
                return <></>;
        }
    }

    

    if (!show) {
        return <></>;
    }
    

    return (
        <div className="modal-backdrop">
            <div className="modal modal-open">
                <div className={`modal-dialog ${invisibleBackground ? 'modal-invisible-background': ''} ${name}`}>
                    <div className="modal-header">
                        <button className="close" onClick={handleHide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" ref={enableClickOutside ? ref : null}>
                        {getModal()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modals;