import { useEffect, useState } from "react";
import { filterStocks } from "../helpers/filterStocks";
import { useDebounce } from "./useDebounce";

export const useFilterStocks = (data) => {
  const [value, setValue] = useState("");
  const [stocks, setStocks] = useState([]);

  const debouncedValue = useDebounce(value, 1500);

  useEffect(() => {
    if (!data) return;
    const filteredStocks = filterStocks(data, debouncedValue);
    setStocks(filteredStocks);
  }, [data, debouncedValue]);

  return { setValue, value, stocks };
};
