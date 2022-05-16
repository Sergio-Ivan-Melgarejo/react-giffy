// hook para las historial de busqueda
const useGifSearched = () => {
    const gifSearch = [];
    let getSearched = localStorage.getItem("searched-history");

    if(getSearched) getSearched = getSearched.split(",").reverse();
    else getSearched = [];

    for(let i=0; i < 5 ;i++){
        if(getSearched[i]){
          gifSearch.push(getSearched[i])
        }
        else gifSearch.push(" ")
    }

    localStorage.setItem("searched-history",gifSearch.join(","));

  return gifSearch.reverse()
}

export default useGifSearched