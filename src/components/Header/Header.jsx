import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Logo from "../Logo/Logo";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <HeaderMenu />
    </header>
  );
};

export default Header;
