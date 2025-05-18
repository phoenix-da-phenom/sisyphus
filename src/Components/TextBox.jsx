import React, { useState } from 'react';

export default function TextBox({ placeHolder }) {
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [text, setText] = useState("");

    const handleFocus = () => {
        setShowPlaceholder(false);
    };

    const handleBlur = () => {
        setShowPlaceholder(text.length === 0);
    };

    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        // Hide placeholder only if there's text
        if (newText.length > 0) {
            setShowPlaceholder(false);
        }
    };

    return (
        <div className='text-box__container'>
            <input 
                type="text" 
                className='text-box' 
                id="inputBox" 
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {showPlaceholder && (
                <div id="txt"> 
                    <p>{placeHolder}</p>
                    <p>0.00USD</p>
                </div>
            )}
        </div>
    );
}