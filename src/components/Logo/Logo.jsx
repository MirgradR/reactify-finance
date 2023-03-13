import style from "./style.module.css";

const Logo = () => {
  return (
    <div className={style.logo}>
      <div className={style.title}>RF</div>
      <div className={style.subtitle}>Reactify Finance</div>
    </div>
  );
};

export default Logo;
