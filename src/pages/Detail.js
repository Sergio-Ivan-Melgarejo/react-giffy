// Hooks
import useGlobalGifs from '../hooks/useGlobalGifs';

// Style
import "./detail.css";

const Detail = ({params}) => {
  const gifs = useGlobalGifs() 
  // console.log(gifs)
  
  const gif = gifs.find(singleGif => singleGif.id === params.id)
  // console.log(gif)
  return ( 
    <div className='Detail align-items-start justify-content-center row m-0'>
      <h1 className='col-12 h1 fw-bolder py-3'>{gif.title}</h1>
      <div className='container-img text-light p-0'>
        <img className='img-fluid' src={gif.imgLarge} alt={gif.title} />
        <p className='id'>{gif.id}</p>
      </div>
    </div>
  )
}

export default Detail