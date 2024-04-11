import React, { useRef, useState } from "react";
import Editor from '@components/common/editor/editor';

const MailSubscriber = () => {
    const editerRef = useRef(null);
    const [content, setContent] = useState('<p>Thank for contact us</p>');

    return (
        <div className="pt-4">
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
            <div className="text-editor-wrp">
                <Editor
                    ref={editerRef}
                    value={content}
                />
            </div>
            <div className="col-span-2">
                <button className="px-3 w-full my-btn-pr w-full px-3">Update</button>
            </div>
        </div>
    )
}

export default MailSubscriber;