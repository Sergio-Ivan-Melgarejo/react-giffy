import React from "react";
import { useLocation } from "wouter";
import { Styles } from "./Styled";

// hooks
import { useForm } from "./hook";

// context
import { Context } from "context/LanguageContext";

const RATING = ["g", "pg", "pg-13", "r"];

function FormSearch({ initialRating = "g", initialKeyword = "" }) {
  const { keyword, times, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleSearch = (evet) => updateKeyword(evet.target.value);
  const handleSelect = (evet) => updateRating(evet.target.value);

  const [_, pushLocation] = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "" && keyword !== false) {
      pushLocation(`/search/${keyword}/${rating}`);
    }
  };

  const { text } = React.useContext(Context);

  return (
    <Styles onSubmit={handleSubmit}>
      <input
        value={keyword}
        onChange={handleSearch}
        className="btn search"
        type="search"
        placeholder={text.FormSearch.placeholder}
        aria-label="Search"
      />
      <input
        className="btn btn-2 btn-search"
        type="submit"
        value={text.FormSearch.btnSearch}
      />
      <select onChange={handleSelect}>
        <option disabled>{text.FormSearch.rating}</option>
        {RATING.map((ele) => (
          <option key={ele} value={ele}>
            {ele}
          </option>
        ))}
      </select>
      {times > 0 && <small className="times">{times}</small>}
    </Styles>
  );
}

export default React.memo(FormSearch);
