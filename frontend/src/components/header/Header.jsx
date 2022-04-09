import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { StoreContext } from "../../store/StoreProvider";
import Button from "./Button";
import RightSideHeaderComponent from "./RightSideHeaderComponent";
const Header = () => {
  const { user } = useContext(StoreContext);
  const navigation = useNavigate();
  const handleSpanOnClick = () => navigation("/", { replace: true });

  return (
    <header className="header">
      <section className="left">
        <div className="logo"></div>
        <span className="logo-span" onClick={handleSpanOnClick}>
          Udemy
        </span>
        <section className="input">
          <label htmlFor="input">
            <input type="text" className="find" placeholder="Szukaj" />
          </label>
        </section>
      </section>
      {user && (
        <span className="welcome-again">Witaj ponownie {user.login}</span>
      )}
      {user && <RightSideHeaderComponent />}
      <Button />
    </header>
  );
};

export default Header;
