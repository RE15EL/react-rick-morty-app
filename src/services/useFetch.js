import { useEffect, useState } from "react"
import { base_url } from "../shared/constants"


export const useFetch = ( url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState({});

    useEffect(()=>{
        setIsLoading(true);
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(`${base_url}/${url}`, {signal})
            .then(res => res.json())
            .then(data => setData(data))
            .catch((err)=>{
                setError({...error, message: err.message});
                console.error(`Error: ${error.message}`)
            })
            .finally(()=> setIsLoading(false))
    },[])

    return { isLoading, data, error };
}