

export default function Card( {data} ) {
  return (
    <div className="flex flex-col  ">
        <img src={data?.image} alt={data?.name} />
        <div className="flex justify-between items-center border rounded p-2 ">
            <p>{data?.name.length > 20 ? data?.name.substring(0,20) : data?.name }</p>
            <p className="text-sm font-bold">{data?.species}</p>
        </div>
    </div>
  )
}
