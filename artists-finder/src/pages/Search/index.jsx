import React, { useState } from "react";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Jumbotron from "../../components/Jumbotron/index.jsx";
import ArtistContext from "../../utils/ArtistContext.js";
import ArtistsContext from "../../utils/ArtistsContext";
import API from "../../utils/API";

function Search() {
  const [search, setSearch] = useState("");
  const [artist, setArtist] = useState({
    name: "",
    url: "",
    summary: "",
    handleInputChange: () => {},
  });
  const [similarArtistsState, setSimilarArtistsState] = useState({
    artists: [],
  });
  // const [error, setError] = useState("");

  /**
   * takes the summary string and removes the last sentence
   * @returns {string} text to display summary/bio information
   */
  function removeLastSentence(str) {
    const arr = str.split(". ");
    arr.pop();
    const newStr = arr.join(". ").concat(".");
    return newStr;
  }

  const getArtistInfo = (query) => {
    API.getArtist(query)
      .then((res) => {
        setArtist({
          ...artist,
          name: res.data.artist.name,
          url: res.data.artist.url,
          summary: removeLastSentence(res.data.artist.bio.summary),
        });
      })
      .catch((err) => console.log(err));
  };

  const getArtistsInfo = (query) => {
    API.getSimilarArtists(query)
      .then((res) => {
        setSimilarArtistsState({
          artists: res.data.similarartists.artist,
        });
      })
      .catch((err) => console.log(err));
  };

  function validateSearchTerm(input) {
    var letters = /^[a-z][a-z\s]*$/;
    return input.match(letters)
      ? "true"
      : "false" && alert("Please enter a valid artist name");
  }

  const handleInputChange = (event) => {
    var searchTerm = event.target.value;
    if (validateSearchTerm(searchTerm)) {
      setSearch(searchTerm);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getArtistInfo(search);
    getArtistsInfo(search);
  };

  return (
    <>
      <ArtistContext.Provider value={{ artist, handleInputChange }}>
        <ArtistsContext.Provider value={similarArtistsState}>
          <Jumbotron />
          <SearchForm handleFormSubmit={handleFormSubmit} results={search} />
          <SearchResults />
        </ArtistsContext.Provider>
      </ArtistContext.Provider>
    </>
  );
}

export default Search;
