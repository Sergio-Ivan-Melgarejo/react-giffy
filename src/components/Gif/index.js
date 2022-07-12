import React from 'react'
import {Link} from 'react-router-dom'
import { ButtonFav } from 'components/__subComponents/Gif'
import { Styles } from './Styled'

function Gif ({ title, id, url }) {
  
  return (
    <Styles key={id}>
      <div className="button-container">
        <ButtonFav id={id} />
      </div>
      <Link className='gif__link' to={`/gif/${id}`}>
        <img className="gif__img" loading='lazy' src={url} alt="" />
        <h4 className="gif__title">{title}</h4>
      </Link>
      <div className="gif__footer">
        <div className='gif__line'></div>
        <div className='gif__line'></div>
        <div className='gif__line'></div>
      </div>
    </Styles>
  )
}

export default React.memo(Gif, (prevProps,newProps) => {
  // vuelve a renderizar si cambia la id nomas
  return prevProps.id === newProps.id
})