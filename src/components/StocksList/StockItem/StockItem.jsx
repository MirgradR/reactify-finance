import { useQuery } from "react-query";
import stocksApi from "../../../api/stocksApi";
import style from "./style.module.css";
import Modal from "../../Modal/Modal";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

const fetchStock = async (symbol) => {
  const price = await stocksApi["getPrice"](symbol);
  const profile = await stocksApi["getProfile"](symbol);

  const stock = { ...profile.data, price: price.data.c };
  return stock;
};

const StockItem = ({ symbol, deleteFromFavorites }) => {
  const { data } = useQuery(`getStock/${symbol}`, () => fetchStock(symbol));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useOnClickOutside(modalRef, closeModal);

  return (
    <li className={style.item}>
      {data ? (
        <div onClick={() => setIsModalOpen(true)} className={style.info}>
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
      {isModalOpen ? <Modal data={data} ref={modalRef} /> : null}
    </li>
  );
};

export default StockItem;
