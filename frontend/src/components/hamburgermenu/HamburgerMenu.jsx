import { useContext, useState } from "react";
import Button from "../header/Button";
import { useNavigate } from "react-router";
import "./hamburgermenu.css";
import { StoreContext } from "../../store/StoreProvider";
const HamburgerMenu = () => {
  const { user } = useContext(StoreContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleOnClick = () => {
    if (toggleMenu) setToggleMenu(false);
    else setToggleMenu(true);
  };
  return (
    <>
      <section className="hamburger-menu">
        <div className="icon-menu" onClick={handleOnClick}>
          MENU
        </div>
        {toggleMenu && (
          <section className="hamburger-menu-container">
            {user && <HamburgerMenuComponent handleOnClick={handleOnClick} />}
            <Button handleOnClick={handleOnClick} />
          </section>
        )}
      </section>
    </>
  );
};

const HamburgerMenuComponent = ({ handleOnClick }) => {
  const { user } = useContext(StoreContext);
  const navigate = useNavigate();
  const showCourses = () => {
    navigate("/userCourses", { replace: true });
    handleOnClick();
  };
  const showSettings = () => {
    navigate("/settings", { replace: true });
    handleOnClick();
  };
  const navigateToMainPage = () => {
    navigate("/", { replace: true });
    handleOnClick();
  };
  return (
    <>
      <p className="userCourses-hamburger" onClick={navigateToMainPage}>
        {" "}
        Strona glowna
      </p>
      <p className="userCourses-hamburger" onClick={showCourses}>
        Moje kursy
      </p>
      <p className="settings-hamburger" onClick={showSettings}>
        Ustawienia
      </p>
      <p className="money-hamburger">{user.budget}zl</p>
    </>
  );
};

export default HamburgerMenu;
