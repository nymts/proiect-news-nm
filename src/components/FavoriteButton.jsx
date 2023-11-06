// Create a new file, e.g., FavoriteButton.js
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { FavoritesContext } from "../store/Favorites/context";
import { addToFavorites } from "../store/Favorites/actions";

function FavoriteButton({ product }) {
  const { favoritesDispatch } = useContext(FavoritesContext);

  function handleAddToFavorites() {
    const actionResult = addToFavorites(product);
    favoritesDispatch(actionResult);

    const currentFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = [...currentFavorites, product];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  return <Button onClick={handleAddToFavorites}>Adaugă la favorite</Button>;
}

export default FavoriteButton;
