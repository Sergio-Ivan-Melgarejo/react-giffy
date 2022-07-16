import React from "react";
import { Styles } from "./Styled";
import img from "../../../assets/image/error.gif"

const Nathing = () => {
  return (
    <Styles>
     <div className="msg">
        <img src={img} alt="" />
        <p>
          <span>Oops! There’s nothing.</span>
          <span>Try again</span>
        </p>
     </div>
    </Styles>
  )
};

export default Nathing;
