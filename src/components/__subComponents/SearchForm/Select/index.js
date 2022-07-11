import React, { useState } from "react";

// context
import { Context } from "context/LanguageContext";

// extra
import arrowUp from "../../../../assets/icon/angle-double-up-solid.svg";
import arrowDown from "../../../../assets/icon/angle-double-down-solid.svg";

const RATING = ["g", "pg", "pg-13", "r"];

const Select = ({ handleSelect }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev)

  const { text } = React.useContext(Context);
  return (
    <div className="container">
      <select className="btn btn-1 btn-select" onClick={handleClick} onChange={handleSelect}>
        <option disabled>{text.FormSearch.rating}</option>
        {RATING.map((ele) => (
          <option key={ele} value={ele}>
            {ele}
          </option>
        ))}
      </select>
      <img className="arrow" src={open ? arrowUp : arrowDown} alt="" />
    </div>
  );
};

export default Select;
