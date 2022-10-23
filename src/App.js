import './Style/App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navigation from "./Components/Items/Navigation/Navigation";
import Separator from './Components/Items/Separator';
import Live from './Components/Live/Live';
import Ranking from "./Components/Ranking/Ranking";
import Matches from "./Components/Matches/Matches";
import Stadiums from "./Components/Stadiums/Stadiums";
import { useState } from 'react';


function App() {
  const [lang,setLang] = useState("en");
  return(
    <BrowserRouter>
    <Navigation lang={{language: lang, set:setLang}} />
    <Separator />
      <Routes>
        <Route path='/' element={<Live lang = {lang} />} />
        <Route path='/Ranking' element={<Ranking lang = {lang} />} />
        <Route path='/Matches' element={<Matches lang = {lang} />} />
        <Route path='/Stadiums' element={<Stadiums lang = {lang} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
