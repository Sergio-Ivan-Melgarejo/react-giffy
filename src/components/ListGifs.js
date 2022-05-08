import React from 'react'
import CardGif from './CardGif'

import Loader from './Loader';

import useGifs from '../hooks/useGifs';

const ListGifs = ({params}) => {
    const { keyword } = params;
    const {gifs, loading} = useGifs({keyword})
  return (
    <>
        {
          !loading ?
            <section className="d-flex flex-wrap">
              {
                gifs.map((gif) => <CardGif dataApp={{lang:"en"}} key={"gif=" + gif.id} title={gif.title} id={gif.id} img={gif.img}/>)
              }
            </section>
          :
            <Loader />
        }
    </>
  )
}

export default ListGifs