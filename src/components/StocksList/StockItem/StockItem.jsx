import { useQuery } from "react-query";
import stocksApi from "../../../api/stocksApi";
import style from "./style.module.css";

const fetchStock = async (symbol) => {
  const price = await stocksApi["getPrice"](symbol);
  const profile = await stocksApi["getProfile"](symbol);

  const stock = { ...profile.data, price: price.data.c };
  return stock;
};

const StockItem = ({ symbol, deleteFromFavorites }) => {
  const { data } = useQuery(`getStock/${symbol}`, () => fetchStock(symbol));

  return (
    <li className={style.item}>
      {data ? (
        <div className={style.info}>
          {data.logo ? (
            <img className={style.logo} src={data.logo} alt={data.name} />
          ) : (
            <div className={style.logo}></div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p>{data.name}</p>
            <p>{data.ticker}</p>
            <p>
              {data.price} {data.currency}
            </p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <p
        onClick={() => deleteFromFavorites(symbol)}
        className={style.deleteButton}
      >
        Delete
      </p>
    </li>
  );
};

export default StockItem;
