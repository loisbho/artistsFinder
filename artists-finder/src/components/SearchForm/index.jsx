import React, { useContext } from "react";
import ArtistContext from '../../utils/ArtistContext.js'
import Button from "../Buttons/index.jsx";
import "./style.css";

/**
 * REFACTOR: place input element in its own component
 */
function SearchForm(props) {
  const { handleInputChange } = useContext(ArtistContext)
  return (
    <form className="search">
      <div className="input-group input-group-lg">
        <input
          value={props.search}
          onChange={handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in an artist to begin"
          id="term"
        />
        <Button 
        handleFormSubmit={props.handleFormSubmit}
        />
      </div>
    </form>
  );
}

export default SearchForm;
