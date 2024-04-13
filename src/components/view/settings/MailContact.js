import React, {useEffect, useRef, useState} from "react";
import Editor from '@components/common/editor/editor';
import {MAIL_TYPE} from "../../../utils/constants";
import { useSetting } from "@hooks/useSetting";

const MailContact = () => {
    const { setting, fetchSetting, updateSetting } = useSetting();

    const editerRef = useRef(null);
    const [title, setTitle] = useState(setting?.title || '');
    const [content, setContent] = useState('<p>Thank you for contacting us</p>');

    useEffect(() => {
        fetchSetting(MAIL_TYPE.CONTACT);
    }, []);

    useEffect(() => {
        console.log(setting)
        if(setting) {
            setTitle(setting.title);
            setContent(setting.content);
        }
    }, [setting]);

    const handleUpdate = () => {
        if (editerRef.current) {
            const newContent = editerRef.current.getContent();
            setContent(newContent);
            updateSetting(
                MAIL_TYPE.CONTACT,
                {
                    title: title,
                    content: newContent
                }
            );
        }
    }

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
                        value={title || ''}
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
                <button className="px-3 w-full my-btn-pr w-full px-3"
                        onClick={handleUpdate}
                >
                    Update
                </button>
            </div>
        </div>
    )
}

export default MailContact;