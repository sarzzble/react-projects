import "./SearchResultsList.css";

import React from "react";
import SearchResults from "../SearchResults/SearchResults";

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResults key={id} result={result.name} />;
      })}
    </div>
  );
};

export default SearchResultsList;
