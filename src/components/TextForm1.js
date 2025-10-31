import React, { useState } from 'react';

export default function TextForm(props) {
    // Function to convert text to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };


    // Function to handle typing in textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // State variable to hold text value
    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to lowercase </button>

            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minites read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
