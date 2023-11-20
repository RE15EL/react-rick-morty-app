import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div className="p-5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 min-h-screen">
      <Outlet />
    </div>
  )
}
