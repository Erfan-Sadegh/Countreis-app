import "./header.css";
import { Outlet } from "react-router-dom";
// import { useState } from "react";

const Header = ({ darkTheme, handleTheme }) => {
  return (
    <>
      <header className="header">
        <h1>Where in the world?</h1>
        {darkTheme ? (
          <div className="theme-light" onClick={handleTheme}>
            <i className="fa-solid fa-moon"></i>
            <p>Dark Theme</p>
          </div>
        ) : (
          <div className="theme-dark" onClick={handleTheme}>
            <i className="fa-solid fa-sun"></i>
            <p>Light Theme</p>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
