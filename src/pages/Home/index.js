import React from "react"
import { Helmet } from "react-helmet"

// Hooks
import {useGifs} from 'hooks/useGifs'

// Components
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'

export default function Home() {
  const {loading, gifs} = useGifs()
  return (
    <>
      <Helmet >
        <title>Home | Giffy</title>
        <meta name="description" content={"home page of Giffy"} />
        <meta name="rating" content="General" />
        <link rel="canonical" href="https://react-giffy.netlify.app" />
      </Helmet>
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