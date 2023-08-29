import React from "react";
import Search from "./Search";

function Header({ setSearchName }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchName={setSearchName} />
    </header>
  );
}

export default Header;
