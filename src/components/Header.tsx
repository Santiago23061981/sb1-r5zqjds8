import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = React.useState(false);
  const [isStoreMenuOpen, setIsStoreMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src="/activemoon-logo.png"
              alt="ActiveMoon GPS Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Inicio</Link>
            
            {/* Tools Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 hover:text-blue-600"
                onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
                onMouseEnter={() => setIsToolsMenuOpen(true)}
              >
                Herramientas
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 ${
                  isToolsMenuOpen ? 'block' : 'hidden'
                }`}
                onMouseLeave={() => setIsToolsMenuOpen(false)}
              >
                <Link 
                  to="/herramientas/software"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Plataforma de monitoreo
                </Link>
                <Link 
                  to="/herramientas/app-moon"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  EasyTracking
                </Link>
                <Link 
                  to="/herramientas/ag"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Administración para Transportistas
                </Link>
              </div>
            </div>

            {/* Store Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 hover:text-blue-600"
                onClick={() => setIsStoreMenuOpen(!isStoreMenuOpen)}
                onMouseEnter={() => setIsStoreMenuOpen(true)}
              >
                Tienda
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 ${
                  isStoreMenuOpen ? 'block' : 'hidden'
                }`}
                onMouseLeave={() => setIsStoreMenuOpen(false)}
              >
                <Link 
                  to="/tienda/productos"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Productos
                </Link>
                <Link 
                  to="/tienda/servicios"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Servicios
                </Link>
                <Link 
                  to="/tienda/paquetes"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Planes integrales
                </Link>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="https://monitoring.activemoongps.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Acceso a Plataforma
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-600">Inicio</Link>
              
              {/* Mobile Tools Submenu */}
              <div className="px-3 py-2">
                <button 
                  className="flex items-center text-gray-600 w-full"
                  onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
                >
                  Herramientas
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isToolsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isToolsMenuOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/herramientas/software" className="block py-2 text-gray-600">
                      Plataforma de monitoreo
                    </Link>
                    <Link to="/herramientas/app-moon" className="block py-2 text-gray-600">
                      EasyTracking
                    </Link>
                    <Link to="/herramientas/ag" className="block py-2 text-gray-600">
                      Administración para Transportistas
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Store Submenu */}
              <div className="px-3 py-2">
                <button 
                  className="flex items-center text-gray-600 w-full"
                  onClick={() => setIsStoreMenuOpen(!isStoreMenuOpen)}
                >
                  Tienda
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isStoreMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isStoreMenuOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/tienda/productos" className="block py-2 text-gray-600">
                      Productos
                    </Link>
                    <Link to="/tienda/servicios" className="block py-2 text-gray-600">
                      Servicios
                    </Link>
                    <Link to="/tienda/paquetes" className="block py-2 text-gray-600">
                      Planes integrales
                    </Link>
                  </div>
                )}
              </div>

              <a
                href="https://monitoring.activemoongps.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-white bg-blue-600 rounded-md"
              >
                Acceso a Plataforma
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;