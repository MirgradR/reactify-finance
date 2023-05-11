import StockItem from "./StockItem/StockItem";
import style from "./style.module.css";
import { useResizeWindow } from "../../hooks/useResizeWindow";

const StocksList = ({ stocks, deleteFromFavorites }) => {
  const windowSize = useResizeWindow();

  return (
    <ul className={windowSize.width > 500 ? style.list1 : style.list}>
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
