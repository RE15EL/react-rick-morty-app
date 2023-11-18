import Navbar from "./Navbar";

export function Header({darkTheme, setDarkTheme}) {
  return (
    <div className="p-5 flex justify-center items-center flex-wrap sm:justify-between 
                    border-b border-gray-300 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center space-x-5 w-screen gap-4">
            <h1 className="dark:text-gray-300 text-bold font-bold text-2xl" >Rick & Morty App</h1>
            
            <Navbar/>

            <button type="button" 
                    className="p-1 border shadow-md hover:shadow-lg border-gray-300 dark:border-gray-700 rounded-full"
                    onClick={()=>setDarkTheme(!darkTheme)}>
                { darkTheme ? '☀️' : '🌙'}
            </button>
        </div>
    </div>
  )
}
