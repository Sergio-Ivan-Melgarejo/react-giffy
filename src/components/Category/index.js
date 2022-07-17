import React from "react";
import { Link } from "react-router-dom";
import { Styles, LiStyles } from "./Styled";


export default function Category({ name, options = [] }) {
  return (
    <Styles>
      <h3 className="App-title">{name}</h3>
      <ul className="ul">
        {options.map((singleOption, index) => (
          <LiStyles key={singleOption} className="li" index={index} >
            <Link className="btn btn-2" to={`/search/${singleOption}/g`}>
              {singleOption}
            </Link>
          </LiStyles>
        ))}
      </ul>
    </Styles>
  );
}
