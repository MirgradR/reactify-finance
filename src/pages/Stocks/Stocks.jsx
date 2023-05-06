import SearchStocks from "../../components/SearchStocks/SearchStocks";
import StocksList from "../../components/StocksList/StocksList";
import { useFavoritesStocks } from "../../hooks/useFavoritesStocks";
import style from "./style.module.css";

const Stocks = () => {
  const { favorites, addSToFavorites, deleteFromFavorites } =
    useFavoritesStocks();

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
