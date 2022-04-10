import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import "./Button.css";
const Button = ({ login, handleOnClick }) => {
  const { user, setUser } = useContext(StoreContext);
  const loginClick = () => {
    user ? setUser(null) : navigate("/loginpage", { replace: true });
    handleOnClick && handleOnClick();
  };
  let navigate = useNavigate();
  const buttonLabel = user ? "Wyloguj sie" : "Zaloguj sie";
  const buttonComponent = login ? (
    <button className="login" type="submit" onClick={loginClick}>
      {buttonLabel}
    </button>
  ) : (
    <button className="login" onClick={loginClick}>
      {buttonLabel}
    </button>
  );
  return buttonComponent;
};

export default Button;
