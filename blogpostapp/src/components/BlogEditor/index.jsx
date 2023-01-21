import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const BlogEditor = ({ content, setContent}) => {
    const editor = useRef(null);

    // const [content, setContent] = useState('');

    const config = {
        buttons: ['bold', 'italic', 'underline', 'font',"fontsize", 'ul', 'link', "strikethrough", 'image','align'],
        uploader: { insertImageAsBase64URI: true },
        removeButtons: ["brush", "file"],
        showXPathInStatusbar: false,
        showCharsCounter: false,
        showWordsCounter: false,
        toolbarAdaptive: false
    }



    return useMemo(() =>
        <JoditEditor
            ref={editor}
            // value={blogData}
            config={config}
            // value={`<h1 style="display:flex;justify-content:center;"><input type="" name="" value="" placeholder='Tital' style="border:none;" /></h1>`}
            onChange={content => setContent(content)}
        />, []
    )
}

export default (BlogEditor)