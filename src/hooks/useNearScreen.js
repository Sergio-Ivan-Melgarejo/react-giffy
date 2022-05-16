const { useEffect, useRef, useState } = require("react");

/**
 * 
 * @param {distancia} string distacia que vigila por defecto "100px"
 * @returns 
 * hook para lazy load, evita que carge el archivo si no esta en viewport
 */
function useNearScreen ({distancia = "100px"}) {
    const [isNearScreen, setIsNearScreen] = useState(false)
    const fromRef = useRef()

    useEffect(() => {
        let observer;
        const onChange=(entries,observer)=>{
            const el = entries[0]
            if(el.isIntersecting){
                setIsNearScreen(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== "undefined"
            ? IntersectionObserver
            : import("intersection-observer")
        )
        .then(()=>{
            observer = new IntersectionObserver(onChange,{
                rootMargin: distancia
            })
            observer.observe(fromRef.current)
        })

        return ()=> observer && observer.disconnect()
    })

    return {isNearScreen, fromRef}
}

export default useNearScreen