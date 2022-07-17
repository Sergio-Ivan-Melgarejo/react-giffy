import React from "react";
import { useNavigate } from "react-router-dom";
import { Styles } from "./Styled";

// Components
import { Select } from "components/__subComponents/SearchForm";

// hooks
import { useForm } from "./hook";

// context
import { Context } from "context/LanguageContext";

function FormSearch({ initialRating = "g", initialKeyword = "" }) {
  const { keyword, times, rating, updateKeyword, updateRating, resetTimes } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleSearch = (evet) => updateKeyword(evet.target.value);
  const handleSelect = (evet) => updateRating(evet.target.value);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "" && keyword !== false) {
      navigate(`/search/${keyword}/${rating || "g"}`);
    }
  };
  const handleTimes = () => resetTimes()

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
        {times > 0 && <small onClick={handleTimes} className="times">{times}</small>}
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
