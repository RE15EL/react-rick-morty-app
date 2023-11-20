import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { useFetch } from "../services/useFetch";

export default function LocationDetail() {
  const {id} = useParams();
  const {data} = useFetch(`location/${id}`);

  return (      
    <div className="h-[50vh] flex items-center justify-center ">
      { data 
        ? <ul>
            <li className="text-2xl font-bold mb-4 uppercase">{data?.name}</li>
            <li>Dimension:   {data?.dimension}</li>
            <li>Type:  {data?.type}</li>
            <li>Created:  {data?.created}</li>
          </ul>
        : <Loader />
      }
    </div>     
  )
}
