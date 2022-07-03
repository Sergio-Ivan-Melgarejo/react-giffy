import React from 'react';

// Hooks
import useGlobalGifs from 'hooks/useGlobalGifs';

// Style
import "./detail.css";

const Detail = ({params}) => {
  const gifs = useGlobalGifs() 
  const gif = gifs.find(singleGif => singleGif.id === params.id)
  console.log(gif)
  return ( 
    <div className='detail'>
      <h2 className='App-title'><span className='color'>gif -</span> {gif.title}</h2>
      
      <div className='detail__gif'>
        <div className='detail__container-img'>
          <img className='detail__img' src={gif.url} alt={gif.title} />
          <p className='detail__id'>{gif.id}</p>
          
          <div className="detail__top">
            <div className='detail__line detail__line-1'></div>
            <div className='detail__line detail__line-2'></div>
            <div className='detail__line detail__line-3'></div>
          </div>
          
          <div className="detail__right">
            <div className='detail__line detail__line-3'></div>
            <div className='detail__line detail__line-2'></div>
            <div className='detail__line detail__line-1'></div>
          </div>
          
          <div className="detail__bottom">
            <div className='detail__line detail__line-3'></div>
            <div className='detail__line detail__line-2'></div>
            <div className='detail__line detail__line-1'></div>
          </div>
          
          <div className="detail__left">
            <div className='detail__line detail__line-1'></div>
            <div className='detail__line detail__line-2'></div>
            <div className='detail__line detail__line-3'></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Detail