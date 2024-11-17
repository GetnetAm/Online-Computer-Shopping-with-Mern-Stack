import React from "react";
import "./LoadingBox.css";
function LoadingBox() {
  return (
    <div className="loader">
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default LoadingBox;
