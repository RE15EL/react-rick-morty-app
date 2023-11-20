import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useFetch } from "../services/useFetch";

export default function Episode() {
  const {data} = useFetch(`episode`);

  return (      
    <div className="h-[80vh]  grid place-items-center p-8" >
      <ul className="w-[50vw] flex flex-col justify-center items-center gap-4">
        { data 
            ?  data.results.map((episode)=>(
                <Link key={episode.id} to={`${episode.id}`}> 
                  <li  className="hover:bg-gray-200 hover:shadow-md transition-all hover:font-bold p-2 rounded-[0.5rem]">
                    {episode.name}
                  </li>
                </Link>
              ))
              : <Loader />
        }
      </ul>
    </div>    
  )
}
