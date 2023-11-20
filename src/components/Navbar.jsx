import { NavLink } from "react-router-dom";

export default function Navbar() {
  
    const applyClassName = ({isActive})=>[
        isActive ? 'border-b dark:border-gray-300 border-gray-700 font-semibold' : '',
        'mr-4', 
    ].join(' ')

    return (
        <nav>
            <ul className="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-2 p-2
                        dark:text-gray-300 text-xl" >
                <li >
                    <NavLink className={applyClassName} to="/character">Character</NavLink>
                </li>
                <li >
                    <NavLink className={applyClassName} to="location">Location</NavLink>
                </li>
                <li >
                    <NavLink className={applyClassName} to="episode">Episode</NavLink>
                </li>
            </ul>
        </nav>
  )
}
