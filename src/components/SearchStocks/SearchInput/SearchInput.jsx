import style from "./style.module.css";

const SearchInput = ({ value, setValue, setFocus, onBlurHandler }) => {
  return (
    <div className={style.inputContainer}>
      <input
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={onBlurHandler}
        onChange={(e) => setValue(e.target.value)}
        className={style.input}
        type="text"
      />
      <span onClick={() => setValue("")}>x</span>
    </div>
  );
};

export default SearchInput;
