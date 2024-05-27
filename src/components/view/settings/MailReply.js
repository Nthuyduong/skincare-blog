import React, {useEffect, useRef, useState} from "react";
import Editor from '@components/common/editor/editor';
import {MAIL_TYPE} from "../../../utils/constants";
import { useSetting } from "@hooks/useSetting";

const MailReply = () => {
    const { setting, fetchSetting, updateSetting, testSetting } = useSetting();

    const editerRef = useRef(null);
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState(setting?.title || '');
    const [content, setContent] = useState('<p>Thank you for contacting us</p>');

    useEffect(() => {
        fetchSetting(MAIL_TYPE.CONTACT);
    }, []);

    useEffect(() => {
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
    const handleTestMail = () => {
        if (!email) {
            return;
        }
        testSetting(MAIL_TYPE.CONTACT, email);
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
            <div className='input-wrp pt-4'>
                <div className="mb-1">Mail test</div>
                <div className="">
                    <input 
                        name="category-slug"
                        className="border-solid border border-ccc dark:border-999 py-1 px-2 w-full"
                        type="text"
                        placeholder="Enter title"
                        onChange={(e) => {setEmail(e.target.value)}}
                        value={email || ''}
                    />
                </div>
            </div>
            <div className="col-span-2">
                <button className="px-3 w-full my-btn-pr w-full px-3"
                        onClick={handleTestMail}
                >
                    Test mail
                </button>
            </div>
        </div>
    )
}

export default MailReply;