import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Hooks
import useSingleGif from 'hooks/useSingleGif';

// Components
import Spinner from 'components/Spinner';

// Styles 
import { Styles } from './Styled';

const Detail = () => {
  const params = useParams()
  let {gif, isLoading, isError} = useSingleGif({ id: params.id })
  
  if ( isLoading ) return (<>
    <Spinner />
    <Helmet >
      <title>Cargando...</title>
      <meta name="description" content={"Cargando..."} />
    </Helmet>
  </>)
  if ( isError ) return <Navigate to='/404' />
  if (!gif) return null


  return ( 
  <>
    <Helmet >
      <title>{gif?.title} | Giffy</title>
      <meta name="description" content={gif?.title} />
      <meta name="rating" content="General" />
    </Helmet>
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
  </>
  )
}

export default Detail