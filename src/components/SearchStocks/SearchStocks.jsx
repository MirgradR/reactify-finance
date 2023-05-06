import { useRef, useState } from "react";
import { useQuery } from "react-query";
import stocksApi from "../../api/stocksApi";
import { useFilterStocks } from "../../hooks/useFilterStocks";
import Autocomplete from "./Autocomplete/Autocomplete";
import SearchInput from "./SearchInput/SearchInput";
import style from "./style.module.css";

const SearchStocks = ({ addSToFavorites }) => {
  const { data } = useQuery("getStocks", () => stocksApi["getStocks"]());
  const { setValue, value, stocks } = useFilterStocks(data);

  const [focus, setFocus] = useState(false);

  const autocompleteRef = useRef(null);

  const onBlurHandler = (e) => {
    setTimeout(() => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(e.target)
      ) {
        setFocus(false);
      }
    }, 100);
  };

  const selectStock = (stock) => {
    setValue(stock.description);
    addSToFavorites(stock.symbol);
  };

  return (
    <div className={style.searchBlock}>
      <SearchInput
        onBlurHandler={onBlurHandler}
        setValue={setValue}
        setFocus={setFocus}
        value={value}
      />

      {focus && stocks.length ? (
        <Autocomplete
          ref={autocompleteRef}
          stocks={stocks}
          selectStock={selectStock}
        />
      ) : null}
    </div>
  );
};

export default SearchStocks;
