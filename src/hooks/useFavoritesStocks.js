import { useEffect, useState } from "react";
import { addSymbolToFavorites } from "../helpers/addSymbolToFavorites";
import { deleteSymbolFromFavorites } from "../helpers/deleteSymbolFromFavorites";

export const useFavoritesStocks = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem("favorites");
    if (storage) {
      setFavorites(JSON.parse(storage));
    }
  }, []);

  const addSToFavorites = (symbol) => {
    addSymbolToFavorites(symbol, favorites, () =>
      setFavorites((prev) => [symbol, ...prev])
    );
  };

  const deleteFromFavorites = (symbol) => {
    deleteSymbolFromFavorites(symbol, (newArray) => setFavorites(newArray));
  };

  return { favorites, addSToFavorites, deleteFromFavorites };
};
