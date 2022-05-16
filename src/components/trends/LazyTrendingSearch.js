import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Loader from 'components/Loader'

const TrendingSearch = React.lazy(
    () => import('./TrendingSearch')
)

function LazyTrendingSearch () {
    const {isNearScreen, fromRef} = useNearScreen({distance: "100px"})
    return <div ref={fromRef}>
            {
                isNearScreen 
                ?   <Suspense fallback={<Loader/> }>
                        <TrendingSearch />
                    </Suspense> 
                :   <Loader />
            }
    </div>

}

export default LazyTrendingSearch