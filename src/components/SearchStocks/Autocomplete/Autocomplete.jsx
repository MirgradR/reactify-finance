import { forwardRef } from "react";
import style from "./style.module.css";

const Autocomplete = forwardRef(({ selectStock, stocks }, ref) => {
  return (
    <ul ref={ref} className={style.autocomplete}>
      {stocks.map((stock) => {
        return (
          <li
            onClick={() => selectStock(stock)}
            className={style.item}
            key={stock.figi}
          >
            {stock.description}
          </li>
        );
      })}
    </ul>
  );
});

export default Autocomplete;
