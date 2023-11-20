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
          <Card key={character.id} data={character} />
        ))}
      </div>
    </>
  )
}
