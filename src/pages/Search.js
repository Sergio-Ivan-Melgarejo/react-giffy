import { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';

// Hooks
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';

// Components
import ListOfGifs from 'components/ListOfGifs';

// Style
import "./search.css";

// decodeURI reemplaza los %20 por espacios en blanco
const Search = ({params}) => {
  // decodeURI reemplaza los %20 por espacios en blanco
  const {gifs, loading, setPage} = useGifs({keyword:decodeURI(params.keyword)})
  const externalRef = useRef();
  const {isNearScreen, fromRef} = useNearScreen({
    distance : "300px",
    externalRef: loading ? null : externalRef, 
    once: false
  });
  
  //const handleNextPage = () => setPage(prevPage => prevPage + 1)
  //const handleNextPage = () => console.log("next page") 

  const debuanceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200)
  , [])

  useEffect(() => {  
    console.log(isNearScreen)
    if(isNearScreen) debuanceHandleNextPage();
  }, [isNearScreen]);
  

  return (
    <div>
      <h2 className='title'><span className='color'>gif -</span> {decodeURI(params.keyword)}</h2>
      <ListOfGifs gifs={gifs} loading={loading} />
      <button id="visor" ref={externalRef} className="btn btn-2" >Visor</button>
    </div>
  )
}

export default Search;