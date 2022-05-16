import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTrendingTermsServices from 'services/getTrendingTermsServices'

function TrendingSearch () {
    const [trendes, setTrendes] = useState([])

    useEffect(() => {
        getTrendingTermsServices()
        .then(res => setTrendes(res))
    },[])

    return (
        <>
        <h2 className='text-start mt-5 px-3 text-uppercase h4'><span className='color'>gif -</span> Trends</h2>
        <div className='border mb-5 border-warning d-flex flex-wrap gap-1 p-3 justify-content-center'>
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