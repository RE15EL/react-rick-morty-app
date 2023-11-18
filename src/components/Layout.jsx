import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <Outlet />
    </div>
  )
}
