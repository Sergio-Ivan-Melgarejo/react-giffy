// hook para las historial de busqueda
const useGifSearched = () => {
    let getSearched = localStorage.getItem("searched-history");

    if(getSearched) getSearched =JSON.parse(getSearched) ;
    else getSearched = [];

    for(let i=0; i < 5 ;i++){
        if(getSearched[i]) continue
        else getSearched.push(null)
    }

  return getSearched;
}

export default useGifSearched