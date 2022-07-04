import React from 'react';
import { Redirect } from 'wouter';
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner';
import { Styles } from './Styled';
import useSeo from 'hooks/useSeo';

const Detail = ({params}) => {
  let {gif, isLoading, isError} = useSingleGif({ id: params.id })
  useSeo({title: gif?.title, description: `${gif?.title}`})
  
  if ( isLoading ) return <Spinner />
  if ( isError ) return <Redirect to='/404' />
  if (!gif) return null


  return ( 
    <Styles>
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
    </Styles>
  )
}

export default Detail