import React from "react";
import { useLocation } from "wouter";
import { Styles } from "./Styled";

// language
import { languageData } from "languages/english";
const lang = "English";

const RATING = ["g", "pg", "pg-13", "r"];

function FormSearch({initialRating="g", initialKeyword=""}) {
  const [keyword, setKeyword] = React.useState(decodeURIComponent(initialKeyword));
  const [rating, setRating] = React.useState(initialRating);
  const [_, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "" && keyword !== false) {
      pushLocation(`/search/${keyword}/${rating}`);
    }
  };

  const handleSearch = (evet) => setKeyword(evet.target.value)
  const handleSelect = (evet) => setRating(evet.target.value)

  return (
    <Styles onSubmit={handleSubmit}>
      <input
        value={keyword}
        onChange={handleSearch}
        className="btn search"
        type="search"
        placeholder={languageData[lang].FormSearch.placeholder}
        aria-label="Search"
      />
      <input
        className="btn btn-2 btn-search"
        type="submit"
        value={languageData[lang].FormSearch["btn-1"]}
      />
      <select onChange={handleSelect}>
        <option disabled>Rating type</option>
        {RATING.map((ele) => (
          <option keyword={ele} value={ele}>
            {ele}
          </option>
        ))}
      </select>
    </Styles>
  );
}

export default React.memo(FormSearch);
