import { useEffect, useRef, useState } from 'react';

/**
 * 
 * @param {distance} string distacia que vigila por defecto "100px"
 * @returns 
 * hook para lazy load, evita que carge el archivo si no esta en viewport
 */
function useNearScreen ({distance = "100px", externalRef, once=true} = {}) {
    const [isNearScreen, setIsNearScreen] = useState(false)
    const fromRef = useRef()

    useEffect(() => {
        let observer;

        const fromElement = externalRef ? externalRef.current : fromRef.current;
        if (!fromElement) return
        
        const onChange=(entries,observer)=>{
            const el = entries[0]
            if(el.isIntersecting){
                setIsNearScreen(true)
                once && observer.disconnect()
            } else {
                !once && setIsNearScreen(false)
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== "undefined"
            ? IntersectionObserver
            : import("intersection-observer")
        )
        .then(()=>{
            observer = new IntersectionObserver(onChange,{
                rootMargin: distance
            })
            observer.observe(fromElement)
        })

        return ()=> observer && observer.disconnect()
    },[distance, externalRef, once])

    return {isNearScreen, fromRef}
}

export default useNearScreen