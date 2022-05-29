// Library
import { Link } from 'wouter';

// Style
import "./gif.css"

const Gif = ({title,id,img}) => {
  return (
    <div key={id} className="gif" >
      <Link className='gif__link' to={`/gif/${id}`}>
        <img className="gif__img" loading='lazy' src={img} alt={"gif of" + title}/>
        <h4 className="gif__title">{title}</h4>
      </Link>
      <div className="gif__footer">
        <div className='gif__line'></div>
        <div className='gif__line'></div>
        <div className='gif__line'></div>
      </div>
    </div>
  )
}

export default Gif