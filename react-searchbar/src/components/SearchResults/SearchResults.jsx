import "./SearchResults.css";

import React from "react";

const SearchResults = ({ result }) => {
  return (
    <div className="search-result">
      <button onClick={() => alert(`You selected ${result}`)}>{result}</button>
    </div>
  );
};

export default SearchResults;
