import { useEffect, useState } from "react";
import { filterStocks } from "../helpers/filterStocks";

export const useFilterStocks = (data) => {
  const [value, setValue] = useState("");
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    if (!data) return;
    const filteredStocks = filterStocks(data, value);
    setStocks(filteredStocks);
  }, [data, value]);

  return { setValue, value, stocks };
};
