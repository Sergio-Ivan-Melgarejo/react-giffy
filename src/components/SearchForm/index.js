import React from "react";
import { useLocation } from "wouter";
import { Styles } from "./Styled";

// Components
import { Select } from "components/__subComponents/SearchForm";

// hooks
import { useForm } from "./hook";

// context
import { Context } from "context/LanguageContext";

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
      <div className="container">
        <input
          value={keyword}
          onChange={handleSearch}
          className="btn search"
          type="search"
          placeholder={text.FormSearch.placeholder}
          aria-label="Search"
        />
        {times > 0 && <small className="times">{times}</small>}
      </div>
      <Select handleSelect={handleSelect} />
      <input
        className="btn btn-2 btn-search"
        type="submit"
        value={text.FormSearch.btnSearch}
      />


    </Styles>
  );
}

export default React.memo(FormSearch);
