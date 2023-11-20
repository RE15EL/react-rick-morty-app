import { Link } from "react-router-dom"
import Card from "../components/Card"
import Loader from "../components/Loader"
import { useFetch } from "../services/useFetch"


export default function Characters() {
  const {data, isLoading} = useFetch('character')

  if (isLoading) <Loader />

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
        { data && data.results.map((character)=>(
          <Link key={character.id} to={`${character.id}`}>
            <Card  data={character} />
          </Link>
        ))}
      </div>
    </>
  )
}
