import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  // const isFavorite = false;
  const [favorite, setFavourite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setFavourite(!favorite);
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {favorite ? <StarFilled /> : <Star />}
    </button>
  );
}
