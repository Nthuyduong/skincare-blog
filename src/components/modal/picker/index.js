import React, { useState } from "react";
import ImagePicker from "./image";
import BlogPicker from "./blog";

const tabs = [
    {
        name: 'image',
        label: 'Image'
    },
    {
        name: 'post',
        label: 'Post'
    }
]

const Picker = ({ type, mode }) => {

    const [tab, setTab] = useState('image');

    const content = () => {
        
        switch (tab) {
            case "image":
                return <ImagePicker mode={mode}/>
            default:
                return <BlogPicker mode={mode}/>;
        }
    }

    return (
        <div>
            <div className="flex justify-center">
                { tabs.map((t, index) => (
                    <div 
                        key={index}
                        className={`tab my-2 p-3 ${tab === t.name ? 'bg-black text-white' : ''}`}
                        onClick={() => setTab(t.name)}
                    >
                        {t.label}
                    </div>
                ))}
            </div>
            { content() }
        </div>
    )
}

export default Picker;
