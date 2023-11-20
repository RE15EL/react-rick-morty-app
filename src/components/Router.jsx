import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Characters from '../pages/Characters';
import Location from '../pages/Location';
import Episode from '../pages/Episode';
import CharacterDetail from "../pages/CharacterDetail";
import LocationDetail from "../pages/LocationDetail";


export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Characters/>}/>
            <Route path="character" element={<Characters/>}/>
            <Route path="character/:id" element={<CharacterDetail/>}/>
            <Route path="location" element={<Location/>}/>
            <Route path="location/:id" element={<LocationDetail/>}/>
            <Route path="episode" element={<Episode/>}/>
        </Route>
    </Routes>
  )
}
