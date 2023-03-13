import { useEffect, useState } from "react";
import SearchStocks from "../../components/SearchStocks/SearchStocks";
import StocksList from "../../components/StocksList/StocksList";
import { addSymbolToFavorites } from "../../helpers/addSymbolToFavorites";
import { deleteSymbolFromFavorites } from "../../helpers/deleteSymbolFromFavorites";
import style from "./style.module.css";

const Stocks = () => {
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

  return (
    <div className={style.stocks}>
      <h1>Stocks</h1>

      <SearchStocks addSToFavorites={addSToFavorites} />

      <StocksList
        deleteFromFavorites={deleteFromFavorites}
        stocks={favorites}
      />
    </div>
  );
};

export default Stocks;
