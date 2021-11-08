import { useState } from "react";
import { Link } from "react-router-dom";

import "./search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="inputs">
      <label>anahtar kelime:</label>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />

      {keyword && (
        <Link to={`/movies/?s=${window.encodeURIComponent(keyword)}&page=1`}>
          ara
        </Link>
      )}
    </div>
  );
};

export default Search;
