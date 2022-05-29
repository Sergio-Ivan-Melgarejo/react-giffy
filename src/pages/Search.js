// Hooks
import useGifs from 'hooks/useGifs';

// Components
import ListOfGifs from 'components/ListOfGifs';

// Style
import "./search.css";

// decodeURI reemplaza los %20 por espacios en blanco
const Search = ({params}) => {
  // decodeURI reemplaza los %20 por espacios en blanco
  const {gifs, loading, setPage} = useGifs({keyword:decodeURI(params.keyword)})

  const handeleNextPage = () => setPage(prevPage => prevPage + 1);

  return (
    <div>
      <h2 className='title'><span className='color'>gif -</span> {decodeURI(params.keyword)}</h2>
      <ListOfGifs gifs={gifs} loading={loading} />
      <button className='btn btn-2 search__btn' onClick={handeleNextPage} >Get next page</button>
    </div>
  )
}

export default Search;