import React from "react";
import { Styles } from "./Styled";

const NavButton = ({open, handleOpen}) => {
  return (
    <Styles onClick={handleOpen} className={open ? "nav-btn open" : "nav-btn"} type="button">
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
    </Styles>
  )
}

export default NavButton;
