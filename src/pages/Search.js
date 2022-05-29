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
    <>
      <h2 className='text-light p-2 py-3 text-uppercase'><span className='color'>gif -</span> {decodeURI(params.keyword)}</h2>
      <ListOfGifs gifs={gifs} loading={loading} />
      <button className='btn btn-outline-warning w-100 fs-4 p-3 my-3 rounded-0' onClick={handeleNextPage} >Get next page</button>
    </>
  )
}

export default Search;