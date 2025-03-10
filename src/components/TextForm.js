import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was Clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!", "success");
  }

  const handleLoClick = ()=>{
    //console.log("Uppercase was Clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success");
  }

  const handleCopyClick = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copt to clipboard!", "success");
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "convertcase-net.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOnChange = (event)=>{
    //console.log("On Change")
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownload}>Download Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it...'}</p>
      </div>
    </>
  )
}
