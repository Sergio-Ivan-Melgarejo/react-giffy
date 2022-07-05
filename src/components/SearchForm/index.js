import React, { useReducer } from "react";
import { useLocation } from "wouter";
import { Styles } from "./Styled";

// language
import { languageData } from "languages/english";
const lang = "English";

const RATING = ["g", "pg", "pg-13", "r"];

const filterReducer = (state, action) => {
  switch (action.type) {
    case "change_keyword":
      return {
        keyword: action.payload,
        times: state.times + 1
      }
    default: return state
  }
}

function FormSearch({initialRating="g", initialKeyword=""}) {
  // const [keyword, setKeyword] = React.useState(decodeURIComponent(initialKeyword));
  const [rating, setRating] = React.useState(initialRating);
  // const [times, setTimes] = React.useState(0);



  const [state, dispatch] = useReducer(filterReducer, {
    keyword: decodeURIComponent(initialKeyword),
    times: 0
  });

  const {keyword, times} = state;
  
  const updateKeyword = (keyword) => {
    dispatch({type:"change_keyword", payload: keyword})
  }

  const handleSearch = (evet) => dispatch({type:"change_keyword", payload: evet.target.value})
  const handleSelect = (evet) => setRating(evet.target.value)



  const [_, pushLocation] = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "" && keyword !== false) {
      pushLocation(`/search/${keyword}/${rating}`);
    }
  };

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
      <small>{times}</small>
    </Styles>
  );
}

export default React.memo(FormSearch);
