import React from "react";
import "./style/Search.css";

const Search = ({ value, onChange }) => (
  <div className="searchForm">
    <form>
      <input
        type="text"
        placeholder="Find your hero"
        onChange={onChange}
        value={value}
      />
    </form>
  </div>
);

export default Search;
