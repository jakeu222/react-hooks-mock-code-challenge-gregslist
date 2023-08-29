import React from "react";

function Search({ setSearchName }) {
  function handleSubmit(e) {
    e.preventDefault();
    setSearchName(e.target.search.value);

  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
      // value={searchName}
      // onChange={setSearchName}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
