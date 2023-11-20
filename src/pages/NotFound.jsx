import img from '../assets/404.png';

export default function NotFound() {
  return (
    <div className=" grid place-items-center pt-8">
        <img width={`700px`} height={'850px'} className='rounded-2xl' src={img} alt="404" />
    </div>
  )
}
// bg-[url('./assets/404.png')] bg-no-repeat bg-center