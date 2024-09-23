// import React,{useState} from "react";

export default function About(props) {
 
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#212529',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
    // border:'1px solid',
    // borderColor: props.mode === 'dark' ? 'white' : '#212529'
  }
  return (
    <div className="container">
      {/*   */}
      <h1 className="my-3" style={myStyle}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" style={myStyle}>
            {/*   */}
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              {/*   */}
              <strong> Analayze your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample" style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              {/*   */}
              TextUtil is a powerful text analysis tool designed to help users
              inspect and process their text data. It offers a variety of
              features for analyzing textual content, making it ideal for
              writers, researchers, and data analysts who need insights into
              their text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
               <strong> Free to use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample" style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              TextUtil is a free-to-use text analysis app designed to help users
              analyze and optimize their written content. Whether you're a
              writer, student, or researcher, TextUtil provides an easy-to-use
              platform to gain valuable insights into your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong> Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample" style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              TextUtil is a browser-compatible text analysis app that allows
              users to easily analyze and optimize their writing directly from
              their web browser. No downloads or installations are required,
              making it accessible from any device with internet access.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3"></div>
    </div>
  );
}
