

export default function Card( {data} ) {
  return (
    <div className="flex flex-col border border-gray-800 dark:border-gray-200 overflow-hidden text-gray-800 dark:text-gray-200 bg-gradient-to-r hover:bg-gradient-to-l 
                  from-gray-300 to-gray-100 dark:from-gray-800 dark:to-gray-600  rounded-md hover:scale-105 transition-all hover:cursor-pointer">
        <img src={data?.image} alt={data?.name} />
        <div className="flex justify-between items-center p-2 ">
            <h2 className="font-bold">{data?.name.length > 20 ? data?.name.substring(0,20) : data?.name }</h2>
            <p className="text-sm font-bold">{data?.species}</p>
        </div>
    </div>
  )
}
