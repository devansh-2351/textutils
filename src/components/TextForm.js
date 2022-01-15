import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked  " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","Success");
    }
    const handleDownClick = ()=>{
        console.log("lowercase was clicked  " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","Success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("text cleared","Success");
    }
    const handleCopy = ()=>{
        console.log("I am copy");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style = {{color: props.mode=='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode=='dark'?'grey':'white' , color: props.mode=='dark'?'white':'#042743'}} id="myBox"  cols="30" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>

        </div>
        <div className="container my-3" style = {{color: props.mode=='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} Minutes read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
    )
}
