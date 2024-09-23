import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handelUpClick = () => {
    setText("You have clicked on handelUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppper case", "success");
  };

  const handelDel = () => {
    setText("");
    props.showAlert("text has been Deleted", "success");
  };

  const handelDnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  };
  
  const handelcopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipbord !", "success");
  }

  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success my-1" onClick={handelUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handelDnClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handelDel}>
          Delete All
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handelcopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview "}
        </p>
      </div>
    </>
  );
}
