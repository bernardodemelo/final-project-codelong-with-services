import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import Signup from './pages/Signup'
import Login from './pages/Login';
import PlanetsListPage from './pages/PlanetsListPage';
import PlanetDetailsPage from './pages/PlanetsDetailsPage';
import EditPlanetPage from './pages/EditPlanetPage';
import AddPlanetPage from './pages/AddPlanet';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/planets" element={<PlanetsListPage />} />
        <Route path="/planets/:id" element={<PlanetDetailsPage />} />
        <Route path="/add-planet" element={<AddPlanetPage />} />
        <Route path="/edit-planet/:id" element={<EditPlanetPage />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App
