import React, { useState } from 'react';

import dynamic from 'next/dynamic';

const EditorTiny = dynamic(() => import('@tinymce/tinymce-react').then(mod => mod.Editor), { ssr: false });

const Editor = ({
    value,
    onChange,
}) => {

    const [inputValue, setInputValue] = useState(value);

    return (
        <>
            <EditorTiny
                apiKey="q6b6zkgvi8i2izuwgaxicgg8lcp19cqdat0mrbgsv6to864a"
                initialValue={inputValue}
                onEditorChange={onChange}
                init={{
                    height: 500,
                    plugins: 
                        'advlist autolink lists link image charmap print preview anchor' +
                        'searchreplace visualblocks code fullscreen' +
                        'insertdatetime media table paste imagetools wordcount'
                    ,
                    toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/plugins.min.js" referrerpolicy="origin"></script>
        </>
    )
}

export default Editor;