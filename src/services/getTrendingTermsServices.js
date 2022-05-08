import {API_KEY,API_URL} from "./settings"

const getTrendingTermsServices = (k) => {
    const apiURL =`${API_URL}/trending/searches?api_key=${API_KEY}`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            return res.data
        })
}

    export default getTrendingTermsServices