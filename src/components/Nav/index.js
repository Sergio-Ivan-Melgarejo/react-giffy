import React,{useState} from 'react'
import {Link} from 'wouter';

import logoSVGLight from "logo/logo_small_icon_only.png"
import logoSVGDark from "logo/logo_small_icon_only_inverted.png"
import { Styles } from './Styled';

const theme = "dark";

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleOpenNav = () => setOpenNav(!openNav);

    return (
        <Styles>
            <Link className="logo-container" to="/" >
                <img className='logo' src={theme === "dark" ? logoSVGDark : logoSVGLight} alt="logo"/>
                <h1 className='color'>Giffy</h1>
            </Link>

            {/* nav button */}
            <button onClick={handleOpenNav} className={openNav ? "nav-btn open" : "nav-btn"} type="button">
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
            </button>

            <div className="nav__links">
                <ul className="nav__ul">
                    {/* button language */}
                    <li className="nav__li">
                        <button className='btn btn-1'>
                            Spanish
                        </button>
                    </li>
                    {/* button theme */}
                    <li className="nav__li">
                        <button className="btn btn-1" >theme</button>
                    </li>
                </ul>

                {/* button loggin */}
                <button className='btn btn-2'>loggin</button>
            </div>

            {/* side bar */}
            <div className={openNav ? "nav__side-bar open" : "nav__side-bar"}>
                <ul className="nav__ul">
                    {/* button language */}
                    <li className="nav__li">
                        <button className='btn btn-1'>
                            Spanish
                        </button>
                    </li>
                    {/* button theme */}
                    <li className="nav__li">
                        <button className="btn btn-1" >theme</button>
                    </li>
                </ul>

                {/* button loggin */}
                <button className='btn btn-2'>loggin</button>
            </div>

            <div onClick={handleOpenNav} className={openNav ? "nav-shadow open" : 'nav-shadow'}></div>
        </Styles>
    )
}

export default Nav