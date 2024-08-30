import "./App.css";

import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import SearchResultsList from "./components/SearchResultsList/SearchResultsList.jsx";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1>Searchbar Project</h1>
      <div className="searchbar-wrapper">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
}

export default App;
