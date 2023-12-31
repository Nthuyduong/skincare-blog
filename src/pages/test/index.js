import React, { useState } from "react";

import dynamic from 'next/dynamic';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
() => import('react-draft-wysiwyg').then(mod => mod.Editor),
{ ssr: false }
)

const Test = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        console.log(convertToRaw(editorState.getCurrentContent()))
    };

    const convertHtml = () => {
        return convertImage(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }

    const convertImage = (htmlText) => {
        return htmlText.replace(/<div style="text-align:none;"><img/g, '<div style="text-align:center;"><img')
    }

    return (
        <div className="text-editor-wrp">
            <h1>Test</h1>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
            />

            <textarea
                className="text-editor-html-test"
                value={convertHtml()}
            />
            <div 
                class="text-editor-result-test" 
                dangerouslySetInnerHTML={{__html: convertHtml()}}
            />
        </div>
    )
}

export default Test