export const deleteSymbolFromFavorites = (symbol, callback) => {
  const storage = localStorage.getItem("favorites");

  const filteredStocks = JSON.parse(storage).filter(
    (favorite) => favorite !== symbol
  );
  localStorage.setItem("favorites", JSON.stringify(filteredStocks));
  callback(filteredStocks);
};
