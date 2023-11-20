import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import { useFetch } from "../services/useFetch";
import Loader from "../components/Loader";

export default function CharacterDetail() {
    const {id} = useParams();
    const {data} = useFetch(`character/${id}`);
    const navigate = useNavigate();

    const getId = (url) =>{
        const locationId = url.split('/').reverse()[0];
        navigate(`/location/${locationId}`);
    }

    return (
        <div className="h-[80vh] flex items-center justify-center ">             
            {data 
                ?   <div className="flex flex-col sm:flex-row flex-wrap gap-8"><Card data={data}/>
                        <aside className="flex flex-col gap-4">
                            <ul>
                                <li>Gender:   {data?.gender}</li>
                                <li>Status:   {data?.status}</li>
                                <li>Created:  {data?.created}</li>
                                <li>
                                    Origin:  
                                    <span aria-roledescription="link" role="link" onClick={()=>getId(data?.origin?.url)} className="hover:underline hover:cursor-pointer">
                                        {' '+ data?.origin?.name}
                                    </span>
                                </li>
                                <li>
                                    Location:  
                                    <span aria-roledescription="link" role="link" onClick={()=>getId(data?.location?.url)} className="hover:underline hover:cursor-pointer">
                                        {' '+ data?.location?.name}
                                    </span>
                                </li>
                            </ul>
                        </aside>
                    </div>
                :   <Loader />                    
            }   
        </div>
    )
}
