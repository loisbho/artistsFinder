import React, { useContext } from "react";
import ArtistsContext from "../../utils/ArtistsContext";
import ArtistListItem from "../ArtistListItem/index.jsx";
import ArtistList from "../ArtistList/index.jsx";
import "./style.css";

function SearchResults() {
  const { artists } = useContext(ArtistsContext);
  return (
    <ArtistList>
      <ul className="list-group search-results">
        {artists.map((artist, index) => {
          return (
            <ArtistListItem key={index} name={artist.name} url={artist.url} />
          );
        })}
      </ul>
    </ArtistList>
  );
}

export default SearchResults;
