import { API_URL,API_KEY } from "./settings";

const getGifs = ({limit= 25,search= "memes",lang="en",page = 0}) => {
    const apiURL =`${API_URL}/gifs/search?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=${page * limit}&rating=g&lang=${lang}`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(res => {
            if (Array.isArray(res.data)) {
                const data = res.data;
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