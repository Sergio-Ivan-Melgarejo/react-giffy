import React from 'react'
import { Link } from 'wouter';
import "./cardGif.css"

const CardGif = (props) => {
  return (
    <Link to={`/gif/${props.id}`}>
      <div key={props.id} className="card col-12 col-md-6 col-lg-4 col-xl-3 p-1" >
        <div className='container-card'>
          <img loading='lazy' src={props.img} className="card-img-top" alt={"gif of" + props.title}/>
          <p className='gif'>Gif</p>
        </div>
      </div>
    </Link>
  )
}

export default CardGif