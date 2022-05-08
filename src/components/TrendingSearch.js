import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTrendingTermsServices from '../services/getTrendingTermsServices'

const TrendingSearch = () => {
    const [trendes, setTrendes] = useState([])

    useEffect(() => {
        getTrendingTermsServices()
        .then(res => setTrendes(res))
    }, [])
    

    return (
        <div className='border border-warning d-flex flex-wrap gap-1 p-3 justify-content-center mt-5'>
            {
                trendes.length > 0 
                ?   trendes.map((ele,i) => <Link to={`/search/${ele}`} key={`trend-${i}`} className='btn btn-secondary p-2'>{ele}</Link>)
                :   null
            }
        </div>
    )
}

export default TrendingSearch