import React,{useState} from 'react'

import "./nav.css"
import logoSVGLight from "logo/logo_small_icon_only.png"
import logoSVGDark from "logo/logo_small_icon_only_inverted.png"

import {Link} from 'wouter';

const theme = "dark";
const language = "English";
const data = {
    Spanish: {
        nav:{
            "btn-1":"Ingresar",
            theme: {
                "light":"Tema Día",
                "dark":"Tema Oscuro"
            }
        }
    },
    English: {
        nav:{
            "btn-1":"Loggin",
            theme: {
                "light":"Theme Light",
                "dark":"Theme Dark"
            }
        }
    }
}

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleOpenNav = () => setOpenNav(!openNav);

    return (
        <nav className="nav">
            <Link className="nav__logo-container" to="/" >
                <img className='nav__logo' src={theme === "dark" ? logoSVGDark : logoSVGLight} alt="logo"/>
                <h1 className='color'>Giffy</h1>
            </Link>

            <button onClick={handleOpenNav} className={openNav ? "nav-btn open" : "nav-btn"} type="button">
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
            </button>

            <div className={openNav ? "nav__links open" : "nav__links"}>
                <ul className="nav__ul">
                    {/* button language */}
                    <li className="nav__li">
                        <button className='btn btn-1'>
                            {language}
                        </button>
                    </li>
                    {/* button theme */}
                    <li className="nav__li">
                        <button className="btn btn-1" >{data[language].nav.theme[theme]}</button>
                    </li>
                </ul>

                {/* button loggin */}
                <button className='btn btn-2'>{data[language].nav["btn-1"]}</button>
            </div>

            <div onClick={handleOpenNav} className={openNav ? "nav-shadow open" : 'nav-shadow'}></div>
        </nav>
    )
}

export default Nav