import { useEffect, useState } from "react"
import { base_url } from "../shared/constants"


export const useFetch = ( url, options) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(()=>{
        setIsLoading(true);
        fetch(`${base_url}/${url}`, options)
            .then(res => res.json())
            .then(data => setData(data))
            .catch((error)=>console.error(error))
            .finally(()=> setIsLoading(false))
    },[])

    return { isLoading, data };
}