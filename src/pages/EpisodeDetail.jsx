import { useParams } from "react-router-dom";
import { useFetch } from "../services/useFetch";
import Loader from "../components/Loader";


export default function EpisodeDetail() {
    const {id} = useParams();
    const {data} = useFetch(`episode/${id}`);

    return (
        <div className="h-[50vh] flex items-center justify-center ">             
            {data 
                ?   
                    <div className="flex flex-col sm:flex-row flex-wrap gap-8">                    
                        <aside className="flex flex-col gap-4">
                            <ul>
                                <li className="text-2xl font-bold mb-4 uppercase"> {data?.name}</li>
                                <li>Episode:   {data?.episode}</li>
                                <li>Created:  {data?.created}</li>
                                <li>Air date:  {data?.air_date}</li>
                            </ul>
                        </aside>
                    </div>
                :   <Loader />                    
            }   
        </div>
    )
}
