import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Herramientas from './pages/Herramientas';
import Software from './pages/Software';
import AppMoon from './pages/AppMoon';
import AG from './pages/AG';
import Productos from './pages/store/Productos';
import Servicios from './pages/store/Servicios';
import Paquetes from './pages/store/Paquetes';
import Planes from './pages/Planes';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/herramientas/software" element={<Software />} />
        <Route path="/herramientas/app-moon" element={<AppMoon />} />
        <Route path="/herramientas/ag" element={<AG />} />
        <Route path="/tienda/productos" element={<Productos />} />
        <Route path="/tienda/servicios" element={<Servicios />} />
        <Route path="/tienda/paquetes" element={<Paquetes />} />
        <Route path="/planes" element={<Planes />} />
      </Routes>
    </Router>
  );
}

export default App;