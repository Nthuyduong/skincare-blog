import React, { useState, useRef, memo, useEffect, useCallback, useMemo, use } from 'react';

import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
import { useModal } from "@hooks/modal";

const Editor = memo(({
    value,
    onChange,
    placeholder
}) => {

    const { addToast } = useModal();

    const editor = useRef(null);
    let content = value;

	const config ={
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || 'Start typings...',
        maxHeight: 800,
        useSplitMode: true,
    };

    const handleSave = () => {
        onChange(content);
        addToast('Content saved!', 'success');
    }

    const handleSetContent = (newContent) => {
        content = newContent;
    }

    return useMemo(() => (
        <>
            <div className="editor">
                <JoditEditor
                    ref={editor}
                    value={value}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={handleSetContent} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => {}}
                />
            </div>
            <div className='editer-action' onClick={handleSave}>
                save
            </div>
        </>
    ), [value])
})

export default Editor;