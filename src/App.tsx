import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/home"; // Ajusta la ruta de importación según sea necesario
import Details from "./views/Details/details"; // Asegúrate de ajustar la ruta de importación según sea necesario

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
