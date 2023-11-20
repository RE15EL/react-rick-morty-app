import Loader from "../components/Loader"
import { Link } from "react-router-dom"
import { useFetch } from "../services/useFetch"

export default function Location() {
  const {data, isLoading} = useFetch('location')

  if (isLoading) <Loader />

  return (
    <div className="h-[80vh]  grid place-items-center p-8" >
      <ul className="w-[50vw] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8">
        { data && data.results.map((location)=>(
          <Link key={location.id} to={`${location.id}`}>
            <li className="text-gray-800 dark:text-gray-200 bg-gray-200 bg-gradient-to-r hover:bg-gradient-to-l from-gray-300 to-gray-100 border
                           dark:from-gray-800 dark:to-gray-600 hover:shadow-md transition-all hover:font-bold p-2 rounded-[0.5rem]">{location.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
