import React from 'react';
import { MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold">ActiveMoon GPS</span>
            </div>
            <p className="text-gray-400">
              Soluciones de rastreo GPS y gestión de flotas para empresas mexicanas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Inicio</Link></li>
              <li><Link to="/herramientas" className="text-gray-400 hover:text-white">Herramientas</Link></li>
              <li><Link to="/tienda/productos" className="text-gray-400 hover:text-white">Tienda</Link></li>
              <li><Link to="/tienda/paquetes" className="text-gray-400 hover:text-white">Planes integrales</Link></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacidad" className="text-gray-400 hover:text-white">Aviso de Privacidad</a></li>
              <li><a href="/terminos" className="text-gray-400 hover:text-white">Términos y Condiciones</a></li>
              <li><a href="/garantia" className="text-gray-400 hover:text-white">Garantía</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ActiveMoon GPS. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;