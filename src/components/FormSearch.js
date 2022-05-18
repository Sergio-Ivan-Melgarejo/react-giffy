import React, { useState } from 'react'
import "./formSearch.css"

import { useLocation } from 'wouter';

const theme = "dark";
const language = "English";
const data = {
    Spanish: {
        FormSearch:{
            placeholder:"Gif ...",
            "btn-1":"Buscar"
        }
    },
    English: {
        FormSearch:{
            placeholder:"Gif ...",
            "btn-1":"Search"
        }
    }
}

const FormSearch = () => {
    const [keyword, setKeyword] = useState("");
    const [paht,pushLocation] = useLocation();

    const handleSubmitSearch = (e) =>{
        e.preventDefault();
        if(keyword !== "" && keyword !== false) {
            pushLocation(`/search/${keyword}`);
        }
    }

    const handleChange = (evet) =>{
        setKeyword(evet.target.value)
    }

    return (
        <div>
            {/* search */}
            <form onSubmit={handleSubmitSearch} className="formSearch">
                <input value={keyword} onChange={handleChange} className="btn search" type="search" placeholder={data[language].FormSearch.placeholder} aria-label="Search" />
                <input className="btn btn-2 btn-search" type="submit" value={data[language].FormSearch["btn-1"]} />
            </form>
        </div>
    )
}

export default FormSearch;