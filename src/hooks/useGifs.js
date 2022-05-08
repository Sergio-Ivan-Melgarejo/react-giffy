import {useState,useEffect, useContext} from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const useGifs = ({keyword} = {keyword:null}) => {
    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContext);
    // const [gifs, setGifs] = useState([]);
    const [datalocalStorage, setDataLocalStorage] = useState(false)

    useEffect(() => {
    // recuperamos la keyword del localStorage
    const getLocalStorage = localStorage.getItem("LastKeyword");
    if(getLocalStorage) setDataLocalStorage(true);

    const keywordToUse = keyword || getLocalStorage
    if (keywordToUse !== null){
      setLoading(true)

      const limit = keyword ? 20 : 4;

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
    
    }, [keyword, setGifs])

   return {loading,gifs,datalocalStorage}
}

export default useGifs