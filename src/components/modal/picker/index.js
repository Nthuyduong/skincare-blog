import React from "react";
import ImagePicker from "./image";

const Picker = ({ type, mode }) => {

    const content = () => {
        switch (type) {
            case "image":
                return <ImagePicker mode={mode}/>
            default:
                return <></>;
        }
    }

    return (
        <div>
            { content() }
        </div>
    )
}

export default Picker;
