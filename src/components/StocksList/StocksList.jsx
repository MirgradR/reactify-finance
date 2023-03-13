import StockItem from "./StockItem/StockItem";
import style from "./style.module.css";

const StocksList = ({ stocks, deleteFromFavorites }) => {
  return (
    <ul className={style.list}>
      {stocks.map((stock) => {
        return (
          <StockItem
            deleteFromFavorites={deleteFromFavorites}
            symbol={stock}
            key={stock.figi}
          />
        );
      })}
    </ul>
  );
};

export default StocksList;
