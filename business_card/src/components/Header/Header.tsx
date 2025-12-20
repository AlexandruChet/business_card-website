import { useState } from "react";
import { Button } from "../UI/btn/Btn";
import "./Header.scss";

const Header = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const setWebsiteTheme = () => {
    setTheme((prev) => !prev);
  };

  const setVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <header className={`header ${theme ? "header__black" : "header__light"}`}>
      <div className="main__block">
        <Button
          onClick={setWebsiteTheme}
          className={`header-btn ${theme ? "header-btn-black" : "header-btn-white"}`}
        >
          {theme ? "Dark theme" : "Light theme"}
        </Button>

        <div className="main-header__container">
          <Button
            onClick={setVisible}
            className={`btn__burger_menu ${
              theme ? "burger_menu__visible" : "burger_menu__not-visible"
            }`}
          >
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Button>

          {isVisible && (
            <div
              className={`main__container ${
                theme ? "main__container--dark" : "main__container--light"
              }`}
            >
              <ul className="list">
                <li className="list__li">
                  <h6 className="text__content">About me</h6>
                </li>
                <li className="list__li">
                  <h6 className="text__content">My Github</h6>
                </li>
                <li className="list__li">
                  <h6 className="text__content">My knowledge</h6>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
