import { API_URL,API_KEY } from "./settings";

const getGifs = (keyword) => {
    if(keyword.search === "") keyword.search = "memes"; 

    const apiURL =`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword.search}&limit=${keyword.limit}&offset=0&rating=g&lang=${keyword.lang}`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(res => {
            if (Array.isArray(res.data)) {
                const data = res.data;
                console.log(data)
                const gifs = data.map(dataGifs => {
                    return {
                        img: dataGifs.images.downsized_medium.url,
                        imgLarge: dataGifs.images.downsized_large.url,
                        id: dataGifs.id,
                        title: dataGifs.title
                    }
                })
                return gifs
            }
        })
}

    export default getGifs