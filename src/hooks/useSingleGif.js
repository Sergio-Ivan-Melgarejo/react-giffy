import { useEffect, useState } from "react";
import getSingleGift from "services/getSingleGift";
import { useGifs } from "./useGifs";

export default function useSingleGif ({id}) {
    const {gifs} = useGifs()
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!gif) {
            setIsLoading(true)
            // llama al servicio si no esta el gif
            getSingleGift({id})
            .then(res => {
                setIsLoading(false)
                setGif(res)
            })
            .catch(err => {
                setIsLoading(false)
                setIsError(true)
            })
        }
    }, [gif, id]);
    
    return { gif, isLoading, isError }
}