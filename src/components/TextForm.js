import React, {useState} from 'react';

const TextForm=(props) => {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
  }
    const handleClearText = ()=>{
      let newText = " "
      setText(newText)
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
   const [text,setText] = useState('');
//    text = "newtext"// wrong way to change the text
//    setText("new text") //correct way to set the text
   return (
    <>
    <div className='container'>
         
        <h1>Enter the text to analyze: </h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
   
    </div>
    <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words,{text.length} characers(including spaces),{(text.split(".").length)-1} sentences </p>
      <p>{text.split(" ").length -1} spaces</p>
      <p>{0.008 * text.split(" ").length} minutes needed to read text</p>
      <h2>PREVIEW</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

export default TextForm;