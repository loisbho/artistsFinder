import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.handleFormSubmit}
      className="input-lg btn-success"
      id="searchButton"
    >
      Search
    </button>
  );
}

export default Button;
