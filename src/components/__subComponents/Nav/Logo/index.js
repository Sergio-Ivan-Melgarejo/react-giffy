import React from "react";
import { Link } from "react-router-dom";
// extra
import logoSVGLight from "assets/logo/logo_small_icon_only.png"
import logoSVGDark from "assets/logo/logo_small_icon_only_inverted.png"
import { Styles } from "./Styled";

const Logo = ({dark}) => {
  return (
    <Styles>
        <Link className="logo-container" to="/" >
            <img className='logo' src={!dark ? logoSVGDark : logoSVGLight} alt=""/>
            <h1 className='color'>Giffy</h1>
        </Link>
    </Styles>
  )
}

export default Logo;
