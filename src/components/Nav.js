import React,{useState} from 'react'

import "./nav.css"
import buttonBars from "../bootstrap/bars-solid.svg"
import logoSVG from "../logo/logo.svg"

import { Link, useLocation } from 'wouter';

const Nav = ({dataApp,setDataApp}) => {
    const [keyword, setKeyword] = useState("");
    const [paht,pushLocation] = useLocation();

    // const handleSubmit = (e) => e.preventDefault();

    const handleSubmitSearch = (e) =>{
        e.preventDefault();
        if(keyword !== "" && keyword != false) {
            pushLocation(`/search/${keyword}`);
        }
    }

    const handleChange = (evt) =>{
        setKeyword(evt.target.value)
    }

    const limit = (data) =>{
        setDataApp({...dataApp,limit:data});
    }

    return (
        <nav className="navbar navbar-expand-lg border-bottom border-warning">
            <div className="container-fluid">
                <Link className="" to="/" >
                    <button className="btn btn-outline-warning nav-logo" >
                        <img className='' src={logoSVG} alt="logo"/>
                    </button>
                </Link>
                <button className="navbar-toggler btn-warning button-navbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img className='button-bars' src={buttonBars} alt="button bars"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 gap-lg-1 p-3">
                        {/* button limit */}
                        <li className="nav-item dropdown">
                            <a href='#' className="height-btn btn btn-outline-warning nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">{dataApp.lang === "en" ? "Select limit" : "Selecciona el Limite"}</a>
                            <ul className="dropdown-menu">
                            <li value="12" className='dropdown-item' onClick={()=>limit(12)}>12</li>
                            <li value="25" className='dropdown-item' onClick={()=>limit(25)}>25</li>
                            <li value="50" className='dropdown-item' onClick={()=>limit(50)}>50</li>
                            <li><hr className="dropdown-divider"/></li>
                            <li value="default"  className='dropdown-item' onClick={()=>limit("select limit")} >Default</li>
                            </ul>
                        </li>
                        {/* button language */}
                        <li className="nav-item dropdown">
                            <button value={dataApp.lang === "en" ? "es" : "en"} onClick={(e)=>setDataApp({...dataApp,lang:e.target.value})} className='height-btn btn btn-outline-warning w-100'>
                                {dataApp.lang === "en" ? "Spanish":"Ingles"}
                            </button>
                        </li>
                        {/* button theme */}
                        <li className="nav-item">
                            <button onClick={(e)=>setDataApp({...dataApp,dark: !dataApp.dark})} className="height-btn  btn btn-warning w-100 fw-bolder" >{dataApp.dark ? "Light Theme" : "Dark Theme"}</button>
                        </li>
                    </ul>
                    {/* search */}
                    <form onSubmit={handleSubmitSearch} className="d-flex">
                        <input value={keyword} onChange={handleChange} className="text-dark btn-color-search form-control me-2 btn-outline-warning" type="search" placeholder={dataApp.lang === "en" ? "search":"Busqueda"} aria-label="Search" />
                        <input className="btn btn-outline-warning fw-bolder button-search" type="submit" value={dataApp.lang === "en" ? "search":"Busqueda"} />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav