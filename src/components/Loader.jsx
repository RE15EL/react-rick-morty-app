import { RotatingLines } from "react-loader-spinner";


export default function Loader() {
  return (
    <div className="h-[100vh] flex items-center justify-center opacity-50"> 
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
    </div>
  )
}
