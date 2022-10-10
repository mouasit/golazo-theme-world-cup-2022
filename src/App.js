import './Style/App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navigation from "./Components/Items/Navigation/Navigation";
import Separator from './Components/Items/Separator';
import Live from './Components/Live/Live';
import Ranking from "./Components/Ranking/Ranking";
import Matches from "./Components/Matches/Matches";
import Stadiums from "./Components/Stadiums/Stadiums";


function App() {
  return(
    <BrowserRouter>
    <Navigation />
    <Separator />
      <Routes>
        <Route path='/' element={<Live />} />
        <Route path='/Ranking' element={<Ranking />} />
        <Route path='/Matches' element={<Matches />} />
        <Route path='/Stadiums' element={<Stadiums />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
