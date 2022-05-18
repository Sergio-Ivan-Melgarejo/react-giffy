import React from 'react'
import CardGif from './CardGif'

import Loader from './Loader';
//d-flex flex-wrap 
const ListGifs = ({gifs,loading}) => {
  return (
    <>
        {
          !loading 
          ?<>
              <section className="gifs-container-grid">
                {
                  gifs.map((gif) => <CardGif dataApp={{lang:"en"}} key={"gif=" + gif.id} title={gif.title} id={gif.id} img={gif.img}/>)
                }
              </section>
            </>
          :
            <Loader />
        }
    </>
  )
}

export default ListGifs