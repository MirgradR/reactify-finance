export const addSymbolToFavorites = (symbol, favorites, callback) => {
  const favorite = favorites.find((item) => item === symbol);
  if (favorite) return;
  const storage = localStorage.getItem("favorites");

  if (storage) {
    localStorage.setItem(
      "favorites",
      JSON.stringify([symbol, ...JSON.parse(storage)])
    );
  } else {
    localStorage.setItem("favorites", JSON.stringify([symbol]));
  }
  callback();
};
