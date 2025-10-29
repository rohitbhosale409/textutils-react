import React, { useState } from 'react';

export default function TextForm(props) {
    // Function to convert text to uppercase
    const handleUpClick = () => {
        // console.log("Uppercase Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    // Function to handle typing in textarea
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };

    // State variable to hold text value
    const [text, setText] = useState("Enter text here");

    return (
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
        </div>
    );
}
