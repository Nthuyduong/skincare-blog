import React, { useRef, memo, useMemo, forwardRef, useImperativeHandle } from 'react';

import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const Editor = memo(forwardRef(({
    value,
    placeholder
}, ref) => {

    const editor = useRef(null);
    let content = value;

	const config ={
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || 'Start typings...',
        maxHeight: 800,
        useSplitMode: true,
    };
    useImperativeHandle(ref, () => ({
        getContent
    }));
    const getContent = () => {
        return content;
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
                />
            </div>
        </>
    ), [value])
}));

export default Editor;