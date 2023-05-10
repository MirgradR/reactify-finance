import { forwardRef } from "react";
import style from "./style.module.css";

const Modal = forwardRef(({ data }, ref) => {
  return (
    <div className={style.modal} ref={ref}>
      <h3>{data.name}</h3>
      <p>{data.weburl}</p>
    </div>
  );
});

export default Modal;
