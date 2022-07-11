import React, { useState } from "react";

// Context
import { Context as ContextLang } from "context/LanguageContext";
import { Context as ContextTheme } from "context/ThemeContext";

// style
import { Styles } from "./Styled";

// extra
import SearchForm from "components/SearchForm";
import { Logo, NavButton } from "components/__subComponents";
import { Link } from "react-router-dom";

const isLogged = false;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { text, changeLanguage } = React.useContext(ContextLang);
  const { changeTheme, dark } = React.useContext(ContextTheme);
  return (
    <Styles>
      <Logo dark={dark} />
      <NavButton handleOpen={handleOpen} open={open} />

      <div className={open ? "nav__links open" : "nav__links"}>
        <ul className="nav__ul">
          {/* button language */}
          <li className="nav__li">
            <button onClick={changeLanguage} className="btn btn-1">
              {text.nav.btnLanguage}
            </button>
          </li>
          {/* button theme */}
          <li className="nav__li">
            <button onClick={changeTheme} className="btn btn-1">
              {dark ? text.nav.lightTheme : text.nav.darkTheme}
            </button>
          </li>
        </ul>

        {/* button login */}
        {isLogged ? (
          <button className="btnLogin btn btn-2">{text.nav.btnLogout}</button>
        ) : (
          <Link to="/login" className="btnLogin btn btn-2">
            {text.nav.btnLogin}
          </Link>
        )}

        <div className="search-container">
          <SearchForm />
        </div>
      </div>

      <div
        onClick={handleOpen}
        className={open ? "nav-shadow open" : "nav-shadow"}
      ></div>
    </Styles>
  );
};

export default Nav;
