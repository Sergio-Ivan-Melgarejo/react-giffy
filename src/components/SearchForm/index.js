import React from "react";
import { useLocation } from "wouter";
import { Styles } from "./Styled";

// language
import { languageData } from "languages/english";
const lang = "English";

function FormSearch() {
  const [keyword, setKeyword] = React.useState("");
  const [paht, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "" && keyword !== false) {
      pushLocation(`/search/${keyword}`);
    }
  };

  const handleChange = (evet) => {
    setKeyword(evet.target.value);
  };

  return (
    <Styles onSubmit={handleSubmit}>
      <input
        value={keyword}
        onChange={handleChange}
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
    </Styles>
  );
}

export default React.memo(FormSearch);
