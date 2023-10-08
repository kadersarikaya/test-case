import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return(
  <div className="loadingSpinner">
    <div className="loadingSpinnerDot"></div>
    <div className="loadingSpinnerDot"></div>
    <div className="loadingSpinnerDot"></div>
  </div>);
};

export default Spinner;
