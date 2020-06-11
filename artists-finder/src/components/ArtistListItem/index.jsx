import React from "react";
import "./style.css";

function ArtistListItem(props) {
  return (
    <li className="list-group-item">
      <h3>{props.name}</h3>
      <a href={props.url}>
        Go to Biography
      </a>
    </li>
  );
}

export default ArtistListItem;
