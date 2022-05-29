import { useEffect, useState } from 'react'

// Library
import { Link } from 'wouter'

// services
import getTrendingTermsServices from 'services/getTrendingTermsServices'

// Style
import "./trends.css";

function TrendingSearch () {
    const [trendes, setTrendes] = useState([])

    useEffect(() => {
        getTrendingTermsServices()
        .then(res => setTrendes(res))
    },[])

    return (
        <>
        <h2 className='title'><span className='color'>gif -</span> Trends</h2>
        <div className='trends'>
            {
                trendes.length > 0 
                ?   trendes.map((ele,i) => <Link to={`/search/${ele}`} key={`trend-${i}`} className='btn btn-secondary p-2'>{ele}</Link>)
                :   null
            }
        </div>
        </>
    )
}

export default TrendingSearch