import React from "react";
import { Link } from "react-router-dom";
import { Styles } from "./Styled";


export default function Category({ name, options = [] }) {
  return (
    <Styles>
      <h3 className="App-title">{name}</h3>
      <ul className="list">
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link className="btn btn-2" to={`/search/${singleOption}/g`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </Styles>
  );
}
