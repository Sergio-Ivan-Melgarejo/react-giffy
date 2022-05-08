import React, { useState } from 'react'
import "./home.css"

// Librerias
import { Link } from 'wouter'

// Context

// Components
import useGifs from '../hooks/useGifs';
import Loader from '../components/Loader';
import CardGif from '../components/CardGif';
import useGifSearched from '../hooks/useGifSearched';
import TrendingSearch from '../components/TrendingSearch';

const recommended = ["Panda","pandas","mas pandas","rick & morty","the witcher"];

const Home = () => {
  const [keyword, setKeyword] = useState("")
  const {loading,gifs,datalocalStorage}= useGifs()

 const searched = useGifSearched();

  return (
    <header className='home py-1 text-light'>
        <h1 className="h1 my-3 my-md-5 py-2 px-3">App <span>Giffy</span></h1>

        <div className='row justify-content-between gap-3 m-3 mx-md-0'>
          <section className='recommended text-md-start col-12 col-md-8 col-lg-5 p-2'>
            <h2 className='h4 ps-3 text-uppercase'>Gif Recommended</h2>
            <ul className='ul d-flex flex-column ps-md-3 list-group' >
              {
                recommended.map((ele,num) => <li key={num} className={`li li-${num}`}><Link className='searched list-group-item list-group-item-action btn btn-outline-warning' to={`/search/${ele}`}>{ele}</Link></li>)
              }
            </ul>
           
          </section>

          <section className='searched col-12 col-md-8 col-lg-5 p-2 text-md-end'>
            <h2 className='h4 pe-3 text-uppercase'>Gif Searched</h2>
            <ul className='ul d-flex flex-column pe-md-3 list-group'>
              {
                searched.map((ele,num) => {
                  if(ele !== false)return <li key={num} className={`li li-${num}`}><Link className='searched list-group-item list-group-item-action btn btn-outline-warning' to={`/search/${ele}`}>{ele}</Link></li>
                  else return <li key={num} className={`li li-${num}`}><div className='searched list-group-item list-group-item-action rellenar'>{ele}</div></li>
                })
              }
            </ul>
            
          </section>
        </div>

        <TrendingSearch />


       { datalocalStorage ? 
        <>
         { 
          loading ? 
            <Loader />
          :
            <>
              <h3 className='text-start py-2 px-4 h5 fw-bolder mt-5 mb-2 col-12'>Last Searched...</h3>
              <section className="d-flex flex-wrap flex-lg-nowrap overflow-hidden">
                {
                  gifs.map((gif) => <CardGif dataApp={{lang:"en"}} key={"gif=" + gif.id} title={gif.title} id={gif.id} img={gif.img}/>)
                }
              </section>
            </>
          }
        </>
        :
        null
      }
    </header>
  )
}

export default Home