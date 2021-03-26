import React from "react";
import "./result.css";
const Result = ({ data, handleDec, handleInc }) => {
  return (
    <div className="container">
      <div className="imageContainer">
        {data.map((element, id) => (
          <div key={id} className="imgBlock">
            <a href={element.largeImageURL}>
              <img key={id} src={element.previewURL} alt="noImg" />
            </a>
            <a href={element.pageURL}>
              <div id="search">
                <img src="https://img.icons8.com/metro/26/000000/search.png" />
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button className="btn" onClick={handleDec}>
          Prev
        </button>
        <button className="btn" onClick={handleInc}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Result;
