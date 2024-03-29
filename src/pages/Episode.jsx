import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useFetch } from "../services/useFetch";

export default function Episode() {
  const {data} = useFetch(`episode`);

  return (      
    <div className="h-[80vh]  grid place-items-center p-8" >
      <ul className="w-[60vw] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
        { data 
            ?  data.results.map((episode)=>(
                <Link key={episode.id} to={`${episode.id}`}> 
                  <li  className="list-decimal text-gray-800 dark:text-gray-200 bg-gray-200 bg-gradient-to-r hover:bg-gradient-to-l from-gray-300 to-gray-100 border
                           dark:from-gray-800 dark:to-gray-600 hover:shadow-md transition-all hover:font-bold p-2 rounded-[0.5rem]">
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
