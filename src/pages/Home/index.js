import React from "react"
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'

export default function Home() {
  const {loading, gifs} = useGifs()

  return (
    <>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category"> 
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}