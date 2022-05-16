import {useState,useEffect, useContext} from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

// hook para busqueda de gifs atraves de keyword
const useGifs = ({keyword} = {keyword:null}) => {
    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContext);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loadingNextPage, setLoadingNextPage] = useState(false)

    
    // recuperamos la keyword del localStorage
    const getLocalStorage = localStorage.getItem("LastKeyword");
    const keywordToUse = keyword || getLocalStorage || "random";

    // para obtener los gifs
    useEffect(() => {
    if (keywordToUse !== null){
      setLoading(true);

      // alterar para poder cambiarlo desde menu (tambien el idioma)
      const limit = keyword ? 24 : 4;

      getGifs({search:keywordToUse, limit,lang:"en"})
      .then(gifs =>{
          setGifs(gifs);
          setLoading(false)
          // guardamos la keyword del localStorage
          if(keyword !== null && keyword !== ""){
            localStorage.setItem("LastKeyword",JSON.stringify(keyword));
            
            const searchedHistory = localStorage.getItem("searched-history");
            localStorage.setItem("searched-history",(searchedHistory + "," + keyword));
          }
          });
    }
    }, [keyword, keywordToUse, setGifs])

    // para el cambio de pagina
    useEffect(() => {
      if(page === INITIAL_PAGE) return
        setLoadingNextPage(true);
        getGifs({search:keywordToUse,page})
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        })

    }, [ page, keywordToUse, setGifs ])
    
    // datalocalStorage = para decidir si mostrar en home "last search"
    // setPage,loadingNextPage = para la paginacion
    return {loading,gifs,setPage,loadingNextPage}
}

export default useGifs