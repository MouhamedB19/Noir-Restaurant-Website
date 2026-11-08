import {useState,useEffect} from 'react'

function useLoaded(src) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();

        image.onload = () => setLoaded(true);
        image.onerror = () => setLoaded(false);

        image.src = src;

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [src]);

    return loaded;
}

export default useLoaded;