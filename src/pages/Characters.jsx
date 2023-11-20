import Card from "../components/Card"
import Loader from "../components/Loader"
import { Link } from "react-router-dom"
import { useFetch } from "../services/useFetch"

export default function Characters() {
  const {data} = useFetch('character')

  return (
    <>
      <div className="flex justify-center align-self-center flex-wrap gap-6">
        { data 
          ? data.results.map((character)=>(
              <Link key={character.id} to={`${character.id}`}>
                <Card  data={character} />
              </Link>
            ))
          : <Loader />
        }
      </div>
    </>
  )
}
