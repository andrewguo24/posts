import React from "react";
import Logo from "../../assets/graphics/logo.png";
import "./style.scss";

const Header = () => (
  <header data-test="headerComponent">
    <div className="wrap">
      <div className="logo">
        <img data-test="logoIMG" src={Logo} alt="logo" />
      </div>
    </div>
  </header>
);

export default Header;
