import React, { useContext } from "react";
import ArtistsContext from "../../utils/ArtistsContext";
import ArtistListItem from "../ArtistListItem/index.jsx";

function ArtistList(props) {
  const { artists } = useContext(ArtistsContext);
  return (
    <div>
      {artists.map((artist) => {
        return (
          <ArtistListItem
            key={artist.match}
            name={artist.name}
            url={artist.url}
          />
        );
      })}
    </div>
  );
}

export default ArtistList;
