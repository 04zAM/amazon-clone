import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        alt="logo"
        src="https://pngimg.com/uploads/lilac/small/lilac_PNG99.png"
      ></img>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Guest</span>
          <span className="header__optionLineTwo">Sing In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Pirme</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;