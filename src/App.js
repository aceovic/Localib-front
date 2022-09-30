import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClientPage from "./pages/ClientPage";
import VehiculePage from "./pages/VehiculePage";
import LocationPage from "./pages/LocationPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Clients" element={<ClientPage />} />
        <Route path="/Vehicules" element={<VehiculePage />} />
        <Route path="/Location" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
