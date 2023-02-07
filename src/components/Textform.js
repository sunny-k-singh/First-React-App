import React, {useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState(""); //without reloading page, text gets updated via setText function
    // setText("Helloooo!");
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        // setText("You have clicked on handleUpClick");
        let netText=text.toUpperCase();
        setText(netText);
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked");
        // setText("You have clicked on handleUpClick");
        let netText=text.toLowerCase();
        setText(netText);
    }
    const handleOnChange=(event)=>{
        console.log("Uppercase was changed");
        setText(event.target.value);
    }
    return (
    <>    
    <div className='container'>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        {/* <label for="exampleFormControlTextarea1" className="form-label"></label> */}
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Enter your text here' value={text} onChange={handleOnChange} ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>

        </div>
    </div>
    <div className="container">
        <h1>Your text summary!</h1>
        <p>{text.split(" ").length-1} words, {text.length} characters</p> 
        {/* text.split gives an array */}
        <p>This Takes about {0.008*(text.split(" ").length-1)} minutes to read!</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
