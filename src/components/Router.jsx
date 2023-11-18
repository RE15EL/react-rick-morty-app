import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Characters from '../pages/Characters';
import Location from '../pages/Location';
import Episode from '../pages/Episode';


export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Characters/>}/>
            <Route path="character" element={<Characters/>}/>
            <Route path="location" element={<Location/>}/>
            <Route path="episode" element={<Episode/>}/>
        </Route>
    </Routes>
  )
}
