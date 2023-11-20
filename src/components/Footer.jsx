import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" mt-8 flex flex-col justify-center items-center flex-wrap     border-gray-300 dark:border-gray-700 p-0">
        <section className="pt-4 flex justify-center items-center flex-wrap gap-4">
            <Link to="https://github.com/RE15EL" className="text-gray-800 dark:text-gray-200 text-2xl transition-all hover:scale-105 shadow-lg hover:shadow-2xl shadow-gray-500">
                <FaSquareGithub />
            </Link>
            <Link to="https://twitter.com/RE15EL" className="text-gray-800 dark:text-gray-200 text-2xl transition-all hover:scale-105 shadow-lg hover:shadow-2xl shadow-gray-500">
                <FaSquareXTwitter/>
            </Link>
            <Link to="https://www.linkedin.com/in/reiselvr" className="text-gray-800 dark:text-gray-200 text-2xl transition-all hover:scale-105 shadow-lg hover:shadow-2xl shadow-gray-500">
                <SiLinkedin />  
            </Link>
            <Link to="https://www.facebook.com/reiselreiner.vallerojas" className="text-gray-800 dark:text-gray-200 text-2xl transition-all hover:scale-105 shadow-lg hover:shadow-2xl shadow-gray-500">
                <ImFacebook2 />
            </Link>
        </section>
        <section className='text-center text-dark p-3 w-full'>
            ©{new Date().getFullYear()} Copyright:
            <a className='text-dark' href='https://mdbootstrap.com/'> MDBootstrap.com </a>
        </section>              
    </footer>
  )
}
